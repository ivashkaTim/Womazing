<template lang="pug">
  header.b-header
    .container.__container
      logo-component.__logo(
        to="/"
      )
      navigation-component.__nav
      link-component.__call(
        tag="a"
        href="tel:+74958235412"
        view="secondary"
        size="s"
        icon="call"
      ) +7 (495) 823-54-12

      bag-component.__bag(
        :count = "itemsCount"

      )

</template>

<script>
import Logo from '@/components/UI/Logo.vue'
import Navigation from '@/components/blanks/Navigation.vue'
import Bag from "@/components/UI/Bag";
import {mapGetters} from "vuex";
import Link from "@/components/UI/Link";

export default {
  props: {},
  data() {
    return {
      count: 5,
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      itemsCount: 'cart/itemsCount'
    })
  },
  components: {
    'logo-component': Logo,
    'navigation-component': Navigation,
    'bag-component': Bag,
    'link-component': Link,
  },
}
</script>
