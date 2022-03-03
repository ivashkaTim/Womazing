<template lang="pug">
  .b-tabs
      button-component.__item(
        v-for="tab in tabs"
        :view = "isActive(tab)"
        v-on:click="changeActiveTab(tab)"
        :size='size'
      ) {{tab.name}}
</template>

<script>
import Button from '@/components/UI/Button.vue'

export default {
  props: {
    tabs: Array,
    size:{
      default:'m',
      type: String
    }
  },
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    isActive(tab) {
      return this.activeTab === tab.id ? 'secondary' : 'secondary-ghost'
    },
    changeActiveTab(tab) {
      this.activeTab = tab.id
      this.$emit('click',tab)
    }
  },
  computed: {},
  components: {
    'button-component': Button,
  },
}
</script>
