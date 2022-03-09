<template lang="pug">
  a(
    v-bind="linkAttrs"
    :class="classes"
  ).b-link
    .__image(
      v-if="icon"
    )
      img(
        :src="iconSrc"
      )
    slot
</template>

<script lang="ts">

import {Component, Mixins, Prop, Vue} from "vue-property-decorator";
import LinkOptions from "@/mixins/utils/link-options";

@Component
export default class Link extends Mixins(LinkOptions) {

  @Prop({default: 'secondary'}) view!: string
  @Prop({default: 'l'}) size!: string
  @Prop() icon!: string

  get classes() {
    const classes = [
      `link--${this.view}`,
      `link--size-${this.size}`,
    ]
    return classes
  }

  get iconSrc() {
    return `/images/icons/${this.icon}.svg`
  }

}

</script>
