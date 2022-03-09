<template lang="pug">
  .b-card-product(
    v-on:click="$emit('click')"
  )
    .__image
      img(
        :src="`images/shop/${product.image}.png`"
      )
    h3.__title {{product.title}}
    p.__price $ {{product.price}}
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import {Product} from "@/store/modules/products/state";

@Component
export default class CardProduct extends Vue {
  @Prop() product!: Product
}

</script>
