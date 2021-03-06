import { createStore } from 'vuex'
import { taskModel } from './models'

export default createStore({
  state: { latestID: 0, job: Array<taskModel>(), etappLabels: Array<string>() },

  mutations: {
    loadJson(state) {
      state.job = JSON.parse(localStorage.getItem('job') || '{}')
      state.etappLabels = JSON.parse(
        localStorage.getItem('etappLabels') || '{}'
      )
    },

    saveJson(state) {
      localStorage.setItem('job', JSON.stringify(state.job))
      localStorage.setItem('etappLabels', JSON.stringify(state.etappLabels))
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
    }
  },
  actions: {
    addNewLabelAction(context, payload) {
      context.commit('addNewLabel', payload)
      context.commit('saveJson')
    },
    addNewTaskAction(context, payload) {
      context.commit('updateId')
      context.commit('addNewTask', payload)
      context.commit('saveJson')
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
    }
  }
})
