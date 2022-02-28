<template lang="pug">
  .b-header
    .container.__container
      logo-component
      navigation-component

</template>

<script>
import Logo from '@/components/UI/Logo.vue'
import Navigation from '@/components/blanks/Navigation.vue'

export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'logo-component': Logo,
    'navigation-component': Navigation,
  },
}
</script>
