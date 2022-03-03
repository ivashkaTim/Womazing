<template lang="pug">
  component.b-title(
    :is="tag"
  )
    slot
</template>

<script>
export default {
  props: {
    tag: {
      default: 'h2',
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
}
</script>
