<template lang="pug">
  component(
    v-bind="attrs"
  ).b-link
    slot
</template>

<script>
export default {
  props: {
    tag: {
      default: 'router-link',
      type: String
    },
    view: {
      default: 'secondary',
      type: String
    },
    size: {
      default: 'l',
      type: String
    },
    href: String,
    icon: String
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
    },
    attrs() {
      return {
        ...this.tag === 'router-link' && {
          to: this.href
        },
        ...this.tag === 'a' && {
          href: this.href
        },
        class: this.classes,
        is: this.tag
      }
    },
  },
  components: {},
}
</script>
