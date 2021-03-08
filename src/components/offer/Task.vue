<template>
  <td v-if="isEditable">
    <input
      id="local-expense"
      type=""
      class="fr__input-box"
      v-model="localDescription"
    />
  </td>
  <td v-else>{{ task.Description }}</td>

  <td v-if="isEditable">
    <input
      id="local-amount"
      type=""
      class="fr__input-box"
      v-model="localAmount"
    />
  </td>
  <td v-else>{{ task.Amount }}</td>

  <td>
    <select v-model="selected" @change="assignLabel">
      <option
        v-for="(label, i) in labels"
        v-bind:value="{ label: label, task: task.Id }"
        :key="i"
      >
        {{ label }}
      </option>
    </select>
  </td>

  <td>
    <div>
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
import { taskModel } from '@/store/models'

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
      // TODO: implement assignLabelAction
      console.log('selected: ', this.selected)
    },

    deleteTask(id: number) {
      // TODO: implement deleteTaskAction
      console.log('this task should be deleted (id): ', id)
    },

    unassignLabel(id: number) {
      // TODO: implement unassignLableAction
      console.log('this task should have its label unassigned: ', id)
      // return unassignLabel({ id });
    },

    cloneTask(id: number) {
      console.log('this task should be cloned with new Id but same ...values: ', id)
      // TODO: implement cloneTaskAction
    },

    toggleEditing(id: number) {
      // TODO: implement editing toggle
      // if (this.isEditable) {
      // const title = localExpense;
      // const amount = localAmount;
      // setIsEditable(false);
      // modifyExpense({ id, title, amount });
      // return;
      // }
      // if (!this.isEditable) {
      // setLocalExpense(expense.title);
      // setLocalAmount(expense.amount);
      // setIsEditable(true);
      // return
      // }
    }
  }
})
</script>
