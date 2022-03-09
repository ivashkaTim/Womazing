<template lang="pug">
  .b-nav
    link-components(
      v-for="route in filterRoutes"
      :view="getLinkView(route.name)"
      :href="route.path || '/'"
      size="s"
    ).__item {{route.meta.title}}
</template>

<script lang="ts">

import Link from "@/components/UI/Link.vue";
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {
    'link-components': Link,
  }
})
export default class Navigation extends Vue {
  isActiveRoute(name: string) {
    return this.$route.name === name || this.$route.name === 'product' && name === 'products'
  }

  getLinkView(name: string) {
    return this.isActiveRoute(name) ? 'primary' : 'secondary'
  }
     get filterRoutes() {
      // пустой path на главной странице
      const routes = this.$router.getRoutes()
      return routes.filter(route => route?.meta?.title)
    }
}

</script>
