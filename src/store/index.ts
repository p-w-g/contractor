import { createStore } from 'vuex'
import { taskModel, locationModel } from './models'

export default createStore({
  state: {
    latestID: 0,
    job: Array<taskModel>(),
    etappLabels: Array<string>(),
    location: new locationModel()
  },

  mutations: {
    loadAllJson(state) {
      state.job = JSON.parse(localStorage.getItem('job') || '{}')
      state.etappLabels = JSON.parse(
        localStorage.getItem('etappLabels') || '{}'
      )
      state.location = JSON.parse(localStorage.getItem('location') || '{}')
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

    deletJson(state) {
      localStorage.setItem('location', JSON.stringify('{}'))
      localStorage.setItem('etappLabels', JSON.stringify('[]'))
      localStorage.setItem('job', JSON.stringify('[]'))
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
    addlocationDescription(state, pld) {
      state.location.Angaende = pld.ang
      state.location.Fastighet = pld.fastighet
      state.location.Jobbstart = pld.start
      console.log(state)
    }
  },
  actions: {
    addNewLabelAction(context, payload) {
      context.commit('addNewLabel', payload)
      context.commit('saveEtappJson')
    },
    addNewTaskAction(context, payload) {
      context.commit('updateId')
      context.commit('addNewTask', payload)
      context.commit('saveJobJson')
    },
    addLocationDescriptionAction(context, payload) {
      context.commit('addlocationDescription', payload)
      context.commit('saveLocationJson')
    }
  },
  getters: {
    amounts: (state): Array<number> => {
      return state.job.map((e) => e.Amount)
    },
    grandTotal: (state, getters) => {
      return getters.amounts.reduce(
        (accumulator: number, current: number) => accumulator + current,
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
