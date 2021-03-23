import { createStore } from 'vuex'
import {
  taskModel,
  locationModel,
  repModel,
  companyModel,
  disclaimerModel,
  avdragModel
} from './models'

export default createStore({
  state: {
    latestID: 0,
    job: Array<taskModel>(),
    etappLabels: Array<string>(),
    location: new locationModel(),
    rep: new repModel(),
    company: new companyModel(),
    disclaimers: new disclaimerModel(),
    avdrag: new avdragModel()
  },

  mutations: {
    loadAllJson(state) {
      if (JSON.parse(localStorage.getItem('job'))) {
        state.job = JSON.parse(localStorage.getItem('job'))
      } else {
        state.job = []
      }
      if (JSON.parse(localStorage.getItem('etappLabels'))) {
        state.etappLabels = JSON.parse(localStorage.getItem('etappLabels'))
      } else {
        state.etappLabels = []
      }
      if (JSON.parse(localStorage.getItem('location'))) {
        state.location = JSON.parse(localStorage.getItem('location'))
      } else {
        state.location = {} as locationModel
      }
    },

    loadSettingsJson(state) {
      if (JSON.parse(localStorage.getItem('rep'))) {
        state.rep = JSON.parse(localStorage.getItem('rep'))
      } else {
        state.rep = {} as repModel
      }
      if (JSON.parse(localStorage.getItem('company'))) {
        state.company = JSON.parse(localStorage.getItem('company'))
      } else {
        state.company = {} as companyModel
      }
      if (JSON.parse(localStorage.getItem('avdrag'))) {
        state.avdrag = JSON.parse(localStorage.getItem('avdrag'))
      } else {
        state.avdrag = {} as avdragModel
      }
      if (JSON.parse(localStorage.getItem('disclaimers'))) {
        state.disclaimers = JSON.parse(localStorage.getItem('disclaimers'))
      } else {
        state.disclaimers = {} as disclaimerModel
      }
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

    saveAvdragJson(state) {
      localStorage.setItem('avdrag', JSON.stringify(state.avdrag))
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
      if (pld && pld !== '') {
        state.etappLabels.push(pld)
      }
    },

    addNewTask(state, pld) {
      if (pld.task) {
        state.job.push({
          Description: pld.task,
          Amount: pld.amount,
          Id: state.latestID,
          Label: '',
          Deductible: false
        })
      }
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
        Label: originalTask.Label,
        Deductible: originalTask.Deductible
      })
    },

    toggleDeductible(state, pld) {
      const originalTask = state.job.find((el) => el.Id === pld)
      originalTask.Deductible = !originalTask.Deductible
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
      const index = state.job.findIndex((el) => el.Id === pld.id)
      if (index != -1) state.job.splice(index, 1)
    },

    addRepDetails(state, pld) {
      if (pld.names !== '') state.rep.names = pld.names
      if (pld.mail !== '') state.rep.mail = pld.mail
      if (pld.mobile !== '') state.rep.mobile = pld.mobile
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
      if (pld.forsakring !== '') state.disclaimers.forsakring = pld.forsakring
      if (pld.avvikelse !== '') state.disclaimers.avvikelse = pld.avvikelse
      if (pld.extra !== '') state.disclaimers.extra = pld.extra
      if (pld.rot !== '') state.disclaimers.rot = pld.rot
      if (pld.ovrigth !== '') state.disclaimers.ovrigt = pld.ovrigt
    },

    clearDisclaimers(state) {
      state.disclaimers = {} as disclaimerModel
    },

    addAvdrag(state, pld) {
      state.avdrag.percentage = pld.percentage
      state.avdrag.maxamount = pld.maxamount
    },

    clearAvdrag(state) {
      state.avdrag = {} as avdragModel
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
      context.commit('addDisclaimers', payload)
      context.commit('saveDisclaimersJson')
    },

    clearDisclaimersAction(context) {
      context.commit('clearDisclaimers')
      context.commit('saveDisclaimersJson')
    },

    saveAvdragAction(context, payload) {
      context.commit('addAvdrag', payload)
      context.commit('saveAvdragJson')
    },

    clearAvdragAction(context) {
      context.commit('clearAvdrag')
      context.commit('saveAvdragJson')
    },

    toggleDeductibleAction(context, payload) {
      context.commit('toggleDeductible', payload)
      context.commit('saveJobJson')
    }
  },
  getters: {
    deductedAmount: (state): number => {
      if (state.job.length > 0) {
        const tasks: taskModel[] = state.job.filter((el) => el.Deductible)
        const amounts: Array<number> = tasks.map((e) => e.Amount)

        return amounts.reduce(
          (acc: number, curr: number) => Number(acc) + Number(curr),
          0
        )
      }
    },

    grandTotal: (state): number => {
      if (state.job.length > 0) {
        const amounts: Array<number> = state.job.map((e: taskModel) => e.Amount)

        return amounts.reduce(
          (accumulator: number, current: number) =>
            accumulator + Number(current),
          0
        )
      }
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
    },

    avdrag: (state): avdragModel => {
      return state.avdrag
    }
  }
})
