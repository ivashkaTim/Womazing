<template lang="pug">
  .b-nav
    .__list
      link-components(
        v-for="item in nav"
        :key="item.id"
        view="secondary"
        size="s"
      ).__item {{item.title}}
</template>

<script>
import Link from "@/components/UI/Link";

export default {
  props: {
    nav: Array,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'link-components': Link,
  },
}
</script>
