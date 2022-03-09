<template lang="pug">
  link-component.b-bag(
    href="/cart"
  )
    .__image
      img(src='@/assets/images/icons/bags.svg')
    .__counter(
      v-if="count"
    ) {{count}}
      slot
</template>

<script lang="ts">

import Link from "@/components/UI/Link.vue";
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  components: {
    'link-component': Link
  }
})
export default class Bag extends Vue{
  @Prop({default: 0}) count!: number
}
</script>