import { createStore } from 'vuex'
import {
  taskModel,
  locationModel,
  repModel,
  companyModel,
  disclaimerModel
} from './models'

export default createStore({
  state: {
    latestID: 0,
    job: Array<taskModel>(),
    etappLabels: Array<string>(),
    location: new locationModel(),
    rep: new repModel(),
    company: new companyModel(),
    disclaimers: new disclaimerModel()
  },

  mutations: {
    loadAllJson(state) {
      state.job = JSON.parse(localStorage.getItem('job') || '{}')
      state.etappLabels = JSON.parse(
        localStorage.getItem('etappLabels') || '{}'
      )
      state.location = JSON.parse(localStorage.getItem('location') || '{}')
    },

    loadSettingsJson(state) {
      state.rep = JSON.parse(localStorage.getItem('rep') || '{}')
      state.company = JSON.parse(localStorage.getItem('company') || '{}')
      state.disclaimers = JSON.parse(
        localStorage.getItem('disclaimers') || '{}'
      )
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

    saveCompanyJson(state) {
      localStorage.setItem('company', JSON.stringify(state.company))
    },

    saveDisclaimersJson(state) {
      localStorage.setItem('disclaimers', JSON.stringify(state.disclaimers))
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
      const filterOutIds = state.job.map((el) => el.Id)
      const highestId = Math.max(...filterOutIds)

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
      const originalTask = state.job.find((el) => el.Id === pld.id)!

      originalTask.Amount = pld.amount
      originalTask.Description = pld.desc
    },

    cloneTask(state, pld) {
      const originalTask = state.job.find((el) => el.Id === pld.id)!

      state.job.push({
        Description: originalTask.Description,
        Amount: originalTask.Amount,
        Id: state.latestID,
        Label: originalTask.Label
      })
    },

    addlocationDescription(state, pld) {
      if (pld.ang !== '') state.location.Angaende = pld.ang
      if (pld.fastighet !== '') state.location.Fastighet = pld.fastighet
      if (pld.start !== '') state.location.Jobbstart = pld.start
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
    },
    clearRepDetails(state) {
      state.rep = {} as repModel
    },

    addCompanyDetails(state, pld) {
      if (pld.previewImage !== '') state.company.previewImage = pld.previewImage
      if (pld.leadin !== '') state.company.leadin = pld.leadin
      if (pld.orgnummer !== '') state.company.orgnummer = pld.orgnummer
      if (pld.hemsida !== '') state.company.hemsida = pld.hemsida
      if (pld.address !== '') state.company.address = pld.address
      if (pld.fskatt !== '') state.company.fskatt = pld.fskatt
    },

    clearCompanyData(state) {
      state.company = {} as companyModel
    },

    addDisclaimers(state, pld) {
      if (pld.fakturering !== '')
        state.disclaimers.fakturering = pld.fakturering
      if (pld.giltig !== '') state.disclaimers.giltig = pld.giltig
      if (pld.garanti !== '') state.disclaimers.garanti = pld.garanti
      if (pld.arbetstid !== '') state.disclaimers.arbetstid = pld.arbetstid
      if (pld.försäkring !== '') state.disclaimers.försäkring = pld.försäkring
      if (pld.avvikelse !== '') state.disclaimers.avvikelse = pld.avvikelse
      if (pld.extra !== '') state.disclaimers.extra = pld.extra
      if (pld.rot !== '') state.disclaimers.rot = pld.rot
      if (pld.ovrigth !== '') state.disclaimers.ovrigt = pld.ovrigt
    },

    clearDisclaimers(state) {
      state.disclaimers = {} as disclaimerModel
    }
  },
  actions: {
    addNewLabelAction(context, payload) {
      if (payload !== '') {
        context.commit('addNewLabel', payload)
        context.commit('saveEtappJson')
      }
    },

    addLocationDescriptionAction(context, payload) {
      context.commit('addlocationDescription', payload)
      context.commit('saveLocationJson')
    },

    addNewTaskAction(context, payload) {
      if (payload.Description !== '') {
        context.commit('updateId')
        context.commit('addNewTask', payload)
        context.commit('saveJobJson')
      }
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

    attemptLoadSettingsAction(context) {
      context.commit('loadSettingsJson')
    },

    resetStateAction(context) {
      context.commit('resetState')
    },

    saveRepAction(context, payload) {
      context.commit('addRepDetails', payload)
      context.commit('saveRepJson')
    },

    saveCompanyAction(context, payload) {
      context.commit('addCompanyDetails', payload)
      context.commit('saveCompanyJson')
    },

    clearCompanyDataAction(context) {
      context.commit('clearCompanyData')
      context.commit('saveCompanyJson')
    },

    saveDisclaimersAction(context, payload) {
      context.commit('addDísclaimers', payload)
      context.commit('saveDisclaimersJson')
    },

    clearDisclaimersAction(context) {
      context.commit('clearDisclaimers')
      context.commit('saveDisclaimersJson')
    }
  },
  getters: {
    amounts: (state): Array<number> => {
      return state.job.length > 0 ? state.job.map((e) => e.Amount) : []
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
    },

    company: (state): companyModel => {
      return state.company
    },

    disclaimers: (state): disclaimerModel => {
      return state.disclaimers
    },

    rep: (state): repModel => {
      return state.rep
    }
  }
})
