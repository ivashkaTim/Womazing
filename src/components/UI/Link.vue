<template lang="pug">
  component(
    v-bind="linkAttrs"
    :class="classes"
  ).b-link
    .__image(
      v-if="icon"
    )
      img(
        :src="iconSrc"
      )
    slot
</template>

<script>
import linkOptions from "@/mixins/utils/link-options";

export default {
  mixins: [linkOptions],
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
    iconSrc() {
      return `/images/icons/${this.icon}.svg`
    }

  },
  components: {},
}
</script>
