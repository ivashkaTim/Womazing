<template lang="pug">
  .b-nav
      link-components(
        v-for="route in filterRoutes"
        :view="getLinkView(route.name)"
        :href="route.path || '/'"
        size="s"
      ).__item {{route.meta.title}}
</template>

<script>
import Link from "@/components/UI/Link";


export default {
  props: {},
  data() {
    return {
    }
  },
  methods: {
    isActiveRoute(name) {
      return this.$route.name === name || this.$route.name === 'product' && name === 'products'
    },
    getLinkView(name) {
      return this.isActiveRoute(name) ? 'primary' : 'secondary'
    },
  },
  computed: {
    filterRoutes() {
      // пустой path на главной странице
      const routes = this.$router.getRoutes()
      return routes.filter(route => route?.meta?.title)


    }
  },
  components: {
    'link-components': Link,
  },
}
</script>
