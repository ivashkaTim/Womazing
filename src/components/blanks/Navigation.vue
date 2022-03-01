<template lang="pug">
  .b-nav
    .__list
      link-components(
        v-for="route in filterRoutes"
        :view="getLinkView(route.name)"
        :href="route.path || '/'"
        size="s"
      ).__item {{route.meta.title}}
</template>

<script>
import Link from "@/components/UI/Link";
import routes from '@/router/routes.js'


export default {
  props: {},
  data() {
    return {
      routes
    }
  },
  methods: {
    isActiveRoute(name) {
      return this.$route.name === name
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
