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
    {{ !isEditable ? task.Amount : '' }}
  </td>

  <td>
    <select v-model="selected" @change="assignLabel">
      <option
        v-for="(label, i) in labels"
        :value="label"
        :key="i"
        :selected="label === task.label"
      >
        {{ label }}
      </option>
    </select>
  </td>

  <td>
    <div class="fr__img-wrapper">
      <span @click="deleteTask(task.Id)"> <img :src="DeleteIcon" /> </span>

      <span @click="toggleEditing(task.Id)"> <img :src="EditIcon" /> </span>

      <span @click="unassignLabel(task.Id)"> <img :src="UnassignIcon" /> </span>

      <span @click="cloneTask(task.Id)"> <img :src="CloneIcon" /> </span>
    </div>
  </td>
</template>

<script lang="ts">
import DeleteIcon from '../../assets/delete.svg'
import EditIcon from '../../assets/edit.svg'
import UnassignIcon from '../../assets/bookmark_remove.svg'
import CloneIcon from '../../assets/content_copy.svg'

import { defineComponent } from 'vue'
import store from '@/store/index'

export default defineComponent({
  name: 'Task',

  setup() {
    return {
      DeleteIcon,
      EditIcon,
      UnassignIcon,
      CloneIcon
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
    }
  }
})
</script>
