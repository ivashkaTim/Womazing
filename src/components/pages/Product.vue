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
</template>

<script lang="ts">

import Button from "@/components/UI/Button.vue";
import Title from "@/components/UI/Title.vue";
import Tabs from "@/components/UI/Tabs.vue";
import TabsColor from "@/components/UI/TabsColor.vue";

import {Component, Vue} from "vue-property-decorator";
import {Action} from "@/decorators";
import {ActionProductActiveProduct} from "@/store/modules/products/actions";
import {ActionCartAddProduct} from "@/store/modules/cart/actions";
import {Product} from "@/store/modules/products/state";
import {Maybe} from "@/types/helpers";
import {Color, Size} from "@/types/components/pages/Product";
import {CartProduct} from "@/store/modules/cart/mutations";

@Component({
  components: {
    'title-component': Title,
    'button-component': Button,
    'tabs-component': Tabs,
    'tabs-colors-component': TabsColor
  }
})
export default class ProductActive extends Vue {
  @Action('products/activeProduct') activeProduct!: ActionProductActiveProduct
  @Action('cart/addProduct') addProduct!: ActionCartAddProduct

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

