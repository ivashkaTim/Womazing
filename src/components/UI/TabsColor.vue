<template lang="pug">
  .b-tabs-colors
    .__button(
      v-for="item in list"
      :style="{'background-color': item.color}"
      v-on:click ="changeActiveItem(item)"
      :class="isActive(item)"
    )
</template>

<script lang="ts">


import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {TabColorItem} from "@/types/components/UI/TabsColor";

@Component
export default class TabsColor extends Vue {
  @Prop() list!: TabColorItem[]

  @Emit('click')
  clickEmit(item: TabColorItem) {
    return item
  }
  activeItem: number = 0

  changeActiveItem(item: TabColorItem) {
    this.activeItem = item.id
    this.clickEmit(item)
  }

  isActive(item: TabColorItem) {
    return this.activeItem === item.id ? 'is-active' : null
  }


}

</script>
