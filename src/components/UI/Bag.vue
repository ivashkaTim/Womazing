<template lang="pug">
  .b-bag
    .__image
      img(src='@/assets/images/icons/bags.svg')
    .__counter(
      v-if="count"
    ) {{count}}
</template>

<script>

export default {
  props: {
    count:{
      default: 0,
      type: Number,
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
  },
}
</script>