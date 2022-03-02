<template lang="pug">
  header.b-header
    .container.__container
      logo-component.__logo
      navigation-component.__nav
      call-component.__call(
        :image = "true"
      )
      bag-component.__bag(
        :count = "itemsCount"

      )

</template>

<script>
import Logo from '@/components/UI/Logo.vue'
import Navigation from '@/components/blanks/Navigation.vue'
import Call from "@/components/UI/Call";
import Bag from "@/components/UI/Bag";
import {mapGetters} from "vuex";

export default {
  props: {},
  data() {
    return {
      count: 5,
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      itemsCount:'cart/itemsCount'
    })
  },
  components: {
    'logo-component': Logo,
    'navigation-component': Navigation,
    'call-component': Call,
    'bag-component': Bag,
  },
}
</script>
