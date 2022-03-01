<template lang="pug">
  #app
    header-component
    router-view
</template>
<script>
import Header from '@/components/sections/Header.vue'
export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'header-component': Header,
  },
}
</script>



<style lang="scss">
  @import '@/assets/styles/main.scss';

</style>
