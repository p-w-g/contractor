<template>
  <div class="fr__label-wrapper">
    <label :for="labelShort">{{ labelFull }}</label>
    <input
      :id="labelShort"
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
  name: 'FormInput',
  props: {
    labelFull: String,
    labelShort: String,
    modelValue: [String, Number],
    required: Boolean
  }
})
</script>
