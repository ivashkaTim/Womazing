<template lang="pug">
  section.b-main
    .container.__container
      .__left
          h2.__title Новые поступления в этом сезоне
          p.__text Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
          button-component.__button(
            tag="router-link"
            href="/products"
            view="primary"
            size="l"
          ) Открыть магазин
      .__right
        .__image
          img(src="@/assets/images/home/photo.png")

</template>

<script lang="ts">

import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'
import Tabs from '@/components/UI/Tabs.vue'
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {
    'button-component': Button,
    'link-component': Link,
    'tabs-component': Tabs,
  }
})
export default class Home extends Vue{}

</script>

