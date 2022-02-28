<template lang="pug">
  .b-header
    .container.__container
      logo-component.__logo
      navigation-component.__nav(
        :nav="nav"
      )
      call-component.__call(
        image = true
      )
      bag-component.__bag(
        :count = "count"
      )

</template>

<script>
import Logo from '@/components/UI/Logo.vue'
import Navigation from '@/components/blanks/Navigation.vue'
import Call from "@/components/UI/Call";
import Bag from "@/components/UI/Bag";

export default {
  props: {},
  data() {
    return {
      nav: [
        {id: 1, title: 'Главная', page: 'main'},
        {id: 2, title: 'Магазин', page: 'shop'},
        {id: 3, title: 'О бренде', page: 'about'},
        {id: 4, title: 'Контакты', page: 'contacts'},
      ],
      count: 5,
    }
  },
  methods: {},
  computed: {},
  components: {
    'logo-component': Logo,
    'navigation-component': Navigation,
    'call-component': Call,
    'bag-component': Bag,
  },
}
</script>
