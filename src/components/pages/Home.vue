<template lang="pug">
  section.b-main
    .container.__container
      .__top
        .__left
          title-component.__title Новые поступления в этом сезоне
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
      .__colection
        title-component.__subtitle(
          size="m"
        ) Новая коллекция
        .__collection-wrapper
          card-component.__product(
            v-for="item in newCollectionProducts"
            :product="item"
            v-on:click="$router.push(`/product/${item.id}`)"
          )



</template>

<script lang="ts">
import Title from "@/components/UI/Title.vue";
import Button from '@/components/UI/Button.vue'
import Link from '@/components/UI/Link.vue'
import Tabs from '@/components/UI/Tabs.vue'
import CardProduct from "@/components/blanks/CardProduct.vue";

import {Component, Vue} from "vue-property-decorator";
import {Getter} from "@/decorators";
import {Product} from "@/store/modules/products/state";
import getArrayRandomNumbers from "@/utils/numberGenerator";



@Component({
  components: {
    'button-component': Button,
    'link-component': Link,
    'tabs-component': Tabs,
    'title-component': Title,
    'card-component': CardProduct
  }
})
export default class Home extends Vue {

  @Getter('products/products') products!: Product[]

  newCollectionProducts: Product[] =[]

  mounted() {
    this.getNewCollectionProducts()
  }

  getNewCollectionProducts() {
    const min = this.products[0].id
    const max = this.products.length

    getArrayRandomNumbers(max, min, 3).forEach(num=> {
      this.products.forEach(product=>{
        if(num === product.id){
          this.newCollectionProducts.push(product)
        }
      })
    })
  }
}


</script>


