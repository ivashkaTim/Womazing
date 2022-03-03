<template lang="pug">
  component(
    v-bind="linkAttrs"
    :class="classes"
    v-on:click="$emit('click')"
  ).b-button
    slot
</template>

<script>
import linkOptions from "@/mixins/utils/link-options";

export default {
  mixins: [linkOptions],
  props: {
    tag: {
      default: 'button',
      type: String
    },
    view: {
      default: 'primary',
      type: String,
    },
    size: {
      default: 'l',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean
    }

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
        this.disabled && 'disabled'
      ]
      return classes
    },

  },
  components: {},
}
</script>
