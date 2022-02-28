<template lang="pug">
  button(
    :class="classes"
  ).b-button
    slot
</template>

<script>
export default {
  props: {
    view: {
      default: 'primary',
      type: String,
    },
    size: {
      default: 'l',
      type: String,
    },

  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    classes() {
      const classes = [
        `button--${this.view}`,
        `button--size-${this.size}`,

      ]
      return classes
    }
  },
  components: {},
}
</script>
