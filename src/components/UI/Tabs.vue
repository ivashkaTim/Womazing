<template lang="pug">
  .b-tabs
    .__list
      button-component.__item(
        view = 'secondary-ghost'
        size='m'
        v-for="tab in tabs"
        :key="tab.id"
      ) {{tab.name}}
</template>

<script>
import Button from '@/components/UI/Button.vue'

export default {
  props: {
    tabs: Array
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'button-component': Button,
  },
}
</script>
