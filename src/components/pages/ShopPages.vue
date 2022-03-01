<template lang="pug">
  section.b-shop
    .container.__container
      .__info
        h2.__title Магазин
      .__products
        .__tabs
          button-component.__tab(
            v-for="category in categories"
            :view="getActiveCategory(category.id)"
            @click="changeActiveTab(category.id)"
            size="m"
          ) {{category.name}}
        .__list
          card-component(
            v-for="product in filterProducts"
            :product="product"
            v-on:click="$router.push(`products/${product.id}`)"
          )

</template>

<script>
import Button from '@/components/UI/Button.vue'
import {mapGetters} from 'vuex'
import CardProduct from "@/components/blanks/CardProduct";


export default {
  props: {},
  data() {
    return {
      activeCategory: 0,
    }
  },
  methods: {
    getActiveCategory(id) {
      return this.activeCategory === id ? 'secondary' : 'secondary-ghost'
    },

    changeActiveTab(id) {
      this.activeCategory = id
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
    'button-component': Button,
    'card-component': CardProduct,
  },
}
</script>
