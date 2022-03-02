<template lang="pug">
  link-component.b-bag(
    href="/cart"
  )
    .__image
      img(src='@/assets/images/icons/bags.svg')
    .__counter(
      v-if="count"
    ) {{count}}
      slot
</template>

<script>

import Link from "@/components/UI/Link";

export default {
  props: {
    count: {
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
    'link-component': Link
  },
}
</script>