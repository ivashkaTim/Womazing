<template lang="pug">
  .b-input(
    :class="{'is-error': errorSync}"
  )
    input.__value(
      :placeholder="placeholder"
      :type="type"
      :value="value"
      v-on:input="onInputEmit($event)"
    )
</template>

<script lang="ts">

import {Component, Prop, Emit, Vue, PropSync} from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() type!: string
  @Prop({default: ''}) placeholder!: string
  @Prop() value!: string
  @PropSync("error") errorSync!: boolean

  @Emit('input')
  onInputEmit(e: InputEvent) {
    this.errorSync = false
    return (e.target as HTMLInputElement).value
  }
}

</script>
