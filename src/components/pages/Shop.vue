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

<script>
import Button from '@/components/UI/Button.vue'
import {mapGetters} from 'vuex'
import CardProduct from "@/components/blanks/CardProduct";
import Title from "@/components/UI/Title";
import Tabs from "@/components/UI/Tabs";


export default {
  props: {},
  data() {
    return {
      activeCategory: 0,
    }
  },
  methods: {
    changeActiveTab(tab) {
      this.activeCategory = tab.id
    }
  },
  computed: {
    ...mapGetters({
      categories: 'products/categories',
      products: 'products/products',
    }),
    filterProducts() {
      return this.activeCategory === 0 ? this.products : this.products.filter(product => product.category.id === this.activeCategory)
    },
  },
  components: {
    'title-component': Title,
    'button-component': Button,
    'card-component': CardProduct,
    'tabs-component': Tabs
  },
}
</script>
