<template lang="pug">
  section.b-product(
    v-if="product"
  )
    .container.__container
      title-component.__title {{product.title}}
      .__wrapper
        .__image
          img(
            :src="`/images/shop/${product.image}.png`"
          )
        .__info
          p.__price $ {{product.price}}
          p.__text Выберите размер
          tabs-component.__sizes(
            :tabs="sizes"
            size="s"
            @click="changeProductSize"
          )
          p.__text Выберите цвет
          tabs-colors-component.__colors(
            :list="colors"
            @click="changeProductColors"
          )
          .__send-form
          input.__counter(
            v-model.number="count"
          )
          button-component(
            view="primary"
            size="l"
            @click="sendProductInfo(product.id)"
          ) Добавить в корзину

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

import Button from "@/components/UI/Button.vue";
import Title from "@/components/UI/Title.vue";
import Tabs from "@/components/UI/Tabs.vue";
import TabsColor from "@/components/UI/TabsColor.vue";

import {Component, Vue, Watch} from "vue-property-decorator";
import {Action, Getter} from "@/decorators";
import {ActionProductActiveProduct} from "@/store/modules/products/actions";
import {ActionCartAddProduct} from "@/store/modules/cart/actions";
import {Product} from "@/store/modules/products/state";
import {Maybe} from "@/types/helpers";
import {Color, Size} from "@/types/components/pages/Product";
import {CartProduct} from "@/store/modules/cart/mutations";
import getArrayRandomNumbers from "@/utils/numberGenerator";
import CardProduct from "@/components/blanks/CardProduct.vue";

@Component({
  components: {
    'title-component': Title,
    'button-component': Button,
    'tabs-component': Tabs,
    'tabs-colors-component': TabsColor,
    'card-component': CardProduct,
  }
})
export default class ProductActive extends Vue {
  @Action('products/activeProduct') activeProduct!: ActionProductActiveProduct
  @Action('cart/addProduct') addProduct!: ActionCartAddProduct
  @Getter('products/products') products!: Product[]

  newCollectionProducts: Product[] = []
  product: Maybe<Product> = null
  selectedSize: Maybe<string> = null
  selectedColor: Maybe<string> = null
  count: number = 1
  sizes: Size[] = [
    {
      id: 0,
      name: 'S'
    },
    {
      id: 1,
      name: 'M'
    },
    {
      id: 2,
      name: 'L'
    },
    {
      id: 3,
      name: 'XL'
    }
  ]
  colors: Color[] = [
    {
      id: 0,
      color: '#927876',
      name: 'Brown'
    },
    {
      id: 1,
      color: '#D4D4D4',
      name: 'Gray'
    },
    {
      id: 2,
      color: '#FD9696',
      name: 'Pink'
    },
    {
      id: 3,
      color: '#FDC796',
      name: 'Gold'
    },
  ]


  async created() {
    this.product = await this.activeProduct(this.$route.params.id) ?? null
    this.selectedSize = this.sizes[0].name
    this.selectedColor = this.colors[0].name
    this.getNewCollectionProducts()
  }

  getNewCollectionProducts() {
    const min = this.products[0].id
    const max = this.products.length

    getArrayRandomNumbers(max, min, 3).forEach(num => {
      this.products.forEach(product => {
        if (num === product.id) {
          this.newCollectionProducts.push(product)
        }
      })
    })
  }

  changeProductSize(tab: Size) {
    this.selectedSize = tab.name
  }

  changeProductColors(item: Color) {
    this.selectedColor = item.name
  }

  sendProductInfo(id: number) {
    if (this.product) {
      const cartItem: CartProduct = {
        ...this.product,
        id,
        count: this.count,
        color: this.selectedColor ?? '',
        size: this.selectedSize ?? ''
      }
      this.addProduct(cartItem)
    }
  }

}

</script>

