<template lang="pug">
  div
    header-component
    //button-component(
    //  view="primary"
    //  size="l"
    //) Открыть магазин
    //button-component(
    //  view="primary-ghost"
    //) Открыть магазин
    //button-component(
    //  view="ghost"
    //) Подробнее о бренде
    //button-component(
    //  view="secondary-ghost"
    //  size="m"
    //) Пальто
    //button-component(
    //  view="secondary"
    //  size="s"
    //) L
    //
    //tabs-component(
    //  :tabs="tabs"
    //)
</template>

<script>
import Header from '@/components/sections/Header.vue'
import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'
import Tabs from '@/components/UI/Tabs.vue'


export default {
  data() {
    return {
      tabs: [
        {id:1, name: 'Все', category: 'all'},
        {id:2, name: 'Пальто', category: 'coat'},
        {id:3, name: 'Свитшоты', category: 'sweatshirts'},
        {id:4, name: 'Кардиганы', category: 'cardigans'},
        {id:5, name: 'Толстовки', category: 'hoodies'},
      ]
    }
  },

  methods: {},
  computed: {},

  components: {
    'header-component': Header,
    'button-component': Button,
    'link-component': Link,
    'tabs-component': Tabs,
  }
}
</script>

