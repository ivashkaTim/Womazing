<template lang="pug">
  component.b-title(
    :is="tag"
    :class="classes"
  )
    slot
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Title extends Vue{
  @Prop({default: 'h2'}) tag!: string
  @Prop({default:'l'}) size!: string

  get classes(){
    return [
      `title--size-${this.size}`,
    ]

  }
}
</script>
