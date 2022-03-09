<template lang="pug">
  component(
    v-bind="linkAttrs"
    :class="classes"
    v-on:click="$emit('click')"
  ).b-button
    slot
</template>

<script lang="ts">
import LinkOptions from "@/mixins/utils/link-options";
import {Component, Mixins, Prop} from "vue-property-decorator";

@Component
export default class Button extends Mixins(LinkOptions) {
  // @ts-ignore
  @Prop({default: 'button'}) tag!: string
  @Prop({default: 'primary'}) view!: string
  @Prop({default: 'l'}) size!: string
  @Prop({default: false}) disabled!: boolean

  get classes() {
    const classes = [
      `button--${this.view}`,
      `button--size-${this.size}`,
      this.disabled && 'disabled'
    ]
    return classes
  }
}

</script>
