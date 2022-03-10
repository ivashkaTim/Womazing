<template lang="pug">
  section.b-shop
    .container.__container
      .__info
        title-component.__title(
          tag="h2"
        ) Магазин
      .__products
        tabs-component.__tabs(
          :tabs="categories",
          @click="changeActiveTab"
        )
        .__list
          card-component.__product(
            v-for="product in filterProducts"
            :product="product"
            v-on:click="$router.push(`products/${product.id}`)"
          )
</template>

<script lang="ts">
import Button from '@/components/UI/Button.vue'
import CardProduct from "@/components/blanks/CardProduct.vue";
import Title from "@/components/UI/Title.vue";
import Tabs from "@/components/UI/Tabs.vue";

import {Component, Vue} from "vue-property-decorator";
import {Getter} from "@/decorators";
import {Category} from "@/types/components/pages/Shop";
import {Product} from "@/store/modules/products/state";

@Component({
  components: {
    'title-component': Title,
    'button-component': Button,
    'card-component': CardProduct,
    'tabs-component': Tabs
  }
})
export default class Shop extends Vue {
  @Getter('products/categories') categories!: Category[]
  @Getter('products/products') products!: Product[]

  activeCategory: number = 0

  changeActiveTab(tab: Category) {
    this.activeCategory = tab.id
  }

  get filterProducts() {
    return this.activeCategory === 0 ? this.products : this.products.filter(product => product.category.id === this.activeCategory)
  }
}
</script>
