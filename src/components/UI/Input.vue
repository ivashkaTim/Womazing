<template lang="pug">
  .b-input
    input.__value(
      :placeholder="placeholder"
      :type="type"
      v-on:input="$emit('input', $event.target.value)"
      :class="{'is-error': error}"

    )
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: {
      default: '',
      type: String,
    },
    value: String,
    error: Boolean

  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
}
</script>
