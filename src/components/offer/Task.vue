<template>
  <td>
    <input
      v-if="isEditable"
      id="local-expense"
      v-model="localDescription"
      @keydown.enter="toggleEditing(task.Id)"
    />
    {{ !isEditable ? task.Description : '' }}
  </td>

  <td>
    <input
      v-if="isEditable"
      id="local-amount"
      type=""
      v-model="localAmount"
      @keydown.enter="toggleEditing(task.Id)"
    />
    {{ !isEditable ? dynamicAmount : '' }}
  </td>

  <td>
    <select v-model="selected" @change="assignLabel" name="labels">
      <option v-for="(label, i) in labels" :value="label" :key="i">
        {{ label }}
      </option>
    </select>
  </td>

  <td>
    <div class="fr__img-wrapper">
      <span @click="deleteTask(task.Id)"> <img :src="DeleteIcon" /> </span>

      <span @click="toggleEditing(task.Id)">
        <img :src="EditIcon" :class="isEditable ? 'toggled' : ''" />
      </span>

      <span @click="unassignLabel(task.Id)"> <img :src="UnassignIcon" /> </span>

      <span @click="cloneTask(task.Id)"> <img :src="CloneIcon" /> </span>

      <span @click="toggleDeductible(task.Id)">
        <img
          :src="ConstructionIcon"
          :class="task.Deductible ? 'toggled' : ''"
        />
      </span>
    </div>
  </td>
</template>

<script lang="ts">
import DeleteIcon from '../../assets/delete.svg'
import EditIcon from '../../assets/edit.svg'
import UnassignIcon from '../../assets/bookmark_remove.svg'
import CloneIcon from '../../assets/content_copy.svg'
import ConstructionIcon from '../../assets/construction.svg'
import { defineComponent } from 'vue'
import store from '@/store/index'
import { avdragModel } from '@/store/models'

export default defineComponent({
  name: 'Task',

  setup() {
    return {
      DeleteIcon,
      EditIcon,
      UnassignIcon,
      CloneIcon,
      ConstructionIcon
    }
  },
  components: {},
  data: () => ({
    isEditable: false,
    selected: '',
    localAmount: Number,
    localDescription: String
  }),
  computed: {
    labels(): Array<string> {
      return store.getters.labels
    },
    avdrag(): avdragModel {
      return store.getters.avdrag
    },
    dynamicAmount(): string {
      let percentage =
        Number.isNaN(this.avdrag.percentage) ||
        this.avdrag.percentage === undefined ||
        this.avdrag.percentage === null
          ? 0
          : Number(this.avdrag.percentage)

      const reducedAmount = (Number(this.task.Amount) * percentage) / 100
      return !this.task.Deductible
        ? this.task.Amount
        : `${this.task.Amount}, varav avdrag: ${reducedAmount}`
    }
  },
  props: {
    task: Object
  },
  methods: {
    assignLabel() {
      store.dispatch({
        type: 'assignLabelAction',
        label: this.selected,
        id: this.task?.Id
      })
      this.selected = ''
    },

    deleteTask(id: number) {
      store.dispatch({
        type: 'deleteTaskAction',
        id: id
      })
    },

    unassignLabel(id: number) {
      store.dispatch({
        type: 'unassignLabelAction',
        id: id
      })
    },

    cloneTask(id: number) {
      store.dispatch({
        type: 'cloneTaskAction',
        id: id
      })
    },

    toggleEditing(id: number) {
      if (this.isEditable) {
        const description = this.localDescription
        const amount = this.localAmount
        store.dispatch({
          type: 'updateTaskAction',
          id: id,
          desc: description,
          amount: amount
        })
        this.isEditable = false

        return
      }
      if (!this.isEditable) {
        this.localAmount = this.task?.Amount
        this.localDescription = this.task?.Description
        this.isEditable = true

        return
      }
    },

    toggleDeductible(id: number) {
      store.dispatch('toggleDeductibleAction', id)
    }
  }
})
</script>
