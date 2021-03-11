import { createStore } from 'vuex'
import { taskModel, locationModel, repModel } from './models'

export default createStore({
  state: {
    latestID: 0,
    job: Array<taskModel>(),
    etappLabels: Array<string>(),
    location: new locationModel(),
    rep: new repModel()
  },

  mutations: {
    loadAllJson(state) {
      state.job = JSON.parse(localStorage.getItem('job') || '{}')
      state.etappLabels = JSON.parse(
        localStorage.getItem('etappLabels') || '{}'
      )
      state.location = JSON.parse(localStorage.getItem('location') || '{}')
      state.rep = JSON.parse(localStorage.getItem('rep') || '{}')
    },

    saveJobJson(state) {
      localStorage.setItem('job', JSON.stringify(state.job))
    },

    saveEtappJson(state) {
      localStorage.setItem('etappLabels', JSON.stringify(state.etappLabels))
    },

    saveLocationJson(state) {
      localStorage.setItem('location', JSON.stringify(state.location))
    },

    saveRepJson(state) {
      localStorage.setItem('rep', JSON.stringify(state.rep))
    },

    resetState(state) {
      state.etappLabels = []
      state.job = []
      state.location = {} as locationModel

      localStorage.setItem('job', JSON.stringify(state.job))
      localStorage.setItem('etappLabels', JSON.stringify(state.etappLabels))
      localStorage.setItem('location', JSON.stringify(state.location))
    },

    updateId(state) {
      let filterOutIds = state.job.map((el) => el.Id)
      let highestId = Math.max(...filterOutIds)

      highestId > state.latestID
        ? (state.latestID = highestId)
        : state.latestID++
    },

    addNewLabel(state, pld) {
      state.etappLabels.push(pld)
    },

    addNewTask(state, pld) {
      state.job.push({
        Description: pld.task,
        Amount: pld.amount,
        Id: state.latestID,
        Label: ''
      })
    },

    updateTask(state, pld) {
      let originalTask = state.job.find((el) => el.Id === pld.id)!

      originalTask.Amount = pld.amount
      originalTask.Description = pld.desc
    },

    cloneTask(state, pld) {
      let originalTask = state.job.find((el) => el.Id === pld.id)!

      state.job.push({
        Description: originalTask.Description,
        Amount: originalTask.Amount,
        Id: state.latestID,
        Label: originalTask.Label
      })
    },

    addlocationDescription(state, pld) {
      state.location.Angaende = pld.ang
      state.location.Fastighet = pld.fastighet
      state.location.Jobbstart = pld.start
    },

    assignLabel(state, pld) {
      state.job.find((el) => el.Id === pld.id)!.Label = pld.label
    },

    unassignLabel(state, pld) {
      state.job.find((el) => el.Id === pld.id)!.Label = ''
    },

    deleteTask(state, pld) {
      const index = state.job.findIndex((el) => el.Id == pld.id)
      if (index != -1) state.job.splice(index, 1)
    },
    addRepDetails(state, pld) {
      state.rep.names = pld.names
      state.rep.mail = pld.mail
      state.rep.mobile = pld.mobile
    }
  },
  actions: {
    addNewLabelAction(context, payload) {
      context.commit('addNewLabel', payload)
      context.commit('saveEtappJson')
    },

    addLocationDescriptionAction(context, payload) {
      context.commit('addlocationDescription', payload)
      context.commit('saveLocationJson')
    },

    addNewTaskAction(context, payload) {
      context.commit('updateId')
      context.commit('addNewTask', payload)
      context.commit('saveJobJson')
    },

    cloneTaskAction(context, payload) {
      context.commit('updateId')
      context.commit('cloneTask', payload)
      context.commit('saveJobJson')
    },

    assignLabelAction(context, payload) {
      context.commit('assignLabel', payload)
      context.commit('saveJobJson')
    },

    unassignLabelAction(context, payload) {
      context.commit('unassignLabel', payload)
      context.commit('saveJobJson')
    },

    deleteTaskAction(context, payload) {
      context.commit('deleteTask', payload)
      context.commit('saveJobJson')
    },

    updateTaskAction(context, payload) {
      context.commit('updateTask', payload)
      context.commit('saveJobJson')
    },

    attemptLoadJsonAction(context) {
      context.commit('loadAllJson')
    },

    resetStateAction(context) {
      context.commit('resetState')
    },

    saveRepAction(context, payload) {
      context.commit('addRepDetails', payload)
      context.commit('saveRepJson')
    }
  },
  getters: {
    amounts: (state): Array<number> => {
      return state.job.map((e) => e.Amount)
    },
    grandTotal: (state, getters) => {
      return getters.amounts.reduce(
        (accumulator: number, current: number) => accumulator + Number(current),
        0
      )
    },
    labels: (state): Array<string> => {
      return state.etappLabels
    },
    location: (state): locationModel => {
      return state.location
    }
  }
})
