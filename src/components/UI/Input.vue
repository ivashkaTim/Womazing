<template lang="pug">
  .b-input(
    :class="{'is-error': error}"
    )
    input.__value(
      :placeholder="placeholder"
      :type="type"
      v-on:input="onInputEmit($event)"

    )
</template>

<script lang="ts">

import {Component, Prop, Emit, Vue} from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() type!: string
  @Prop({default: ''}) placeholder!: string
  @Prop() value!: string
  @Prop() error!: boolean

  @Emit('input')
  onInputEmit(e: InputEvent) {
    return (e.target as HTMLInputElement).value
  }
}

</script>
