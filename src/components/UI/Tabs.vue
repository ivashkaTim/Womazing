<template lang="pug">
  .b-tabs
    button-component.__item(
      v-for="tab in tabs"
      :view = "isActive(tab)"
      v-on:click="changeActiveItem(tab)"
      :size='size'
    ) {{tab.name}}
</template>

<script lang="ts">
import Button from '@/components/UI/Button.vue'

import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import {TabItem} from "@/types/components/UI/Tabs";

@Component({
  components: {
    'button-component': Button,
  }

})
export default class Tabs extends Vue {
  @Prop() tabs!: TabItem[]
  @Prop({default: 'm'}) size!: string

  @Emit('click')
  clickEmit(tab: TabItem) {
    return tab
  }

  activeTab: number = 0

  changeActiveItem(tab: TabItem) {
    this.activeTab = tab.id
    this.clickEmit(tab)
  }

  isActive(tab: TabItem) {
    return this.activeTab === tab.id ? 'secondary' : 'secondary-ghost'
  }

}

</script>
