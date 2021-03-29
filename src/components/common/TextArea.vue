<template>
  <div class="fr__label-wrapper">
    <label :for="labelShort">{{ labelFull }}</label>
    <textarea
      :id="labelShort"
      type="text"
      class="fr__input-box"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TextArea',
  props: {
    labelFull: String,
    labelShort: String,
    modelValue: String,
    required: Boolean
  }
})
</script>
