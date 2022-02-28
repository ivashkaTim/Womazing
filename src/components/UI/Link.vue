<template lang="pug">
  a(
    href='#'
    :class="classes"
  ).b-link
    slot
</template>

<script>
export default {
  props: {
    view:{
      default: 'secondary',
      type: String
    },
    size:{
      default: 'l',
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    classes() {
      const classes = [
        `link--${this.view}`,
        `link--size-${this.size}`,
      ]
      return classes
    }
  },
  components: {},
}
</script>
