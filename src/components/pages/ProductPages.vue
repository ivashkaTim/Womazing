<template lang="pug">
  section.b-product(
    v-if="product"
  )
    .container.__container
      h2.__title {{product.title}}
      .__wrapper
        .__image
          img(
            :src="`/images/shop/${product.image}.png`"
          )
        .__info
          .__price $ {{product.price}}
          .__size
            p.__text Выберите размер
            button-component.__size-button(
              v-for="size in sizes"
              :view="size === selectedSize ? 'secondary' : 'secondary-ghost'"
              @click="changeProductSize(size)"
              size="s"
            ) {{size}}
          .__colors
            p.__text Выберите цвет
            .__colors-buttons
              .__color-button(
                v-for="color in colors"
                :style="{'background-color': color.color}"
                @click ="changeProductColors(color.name)"
                :class="isActive(color.name)"
              )
          .__send-form
            input.__counter(
              v-model.number="count"
            )
            button-component(
              view="primary"
              size="l"
              @click="sendProductInfo"
            ) Добавить в корзину
</template>

<script>
import {mapActions} from 'vuex'
import Button from "@/components/UI/Button";

export default {
  props: {},
  data() {
    return {
      product: null,
      sizes: ['S', 'M', 'L', 'XL'],
      count: 1,
      selectedSize: null,
      selectedColor: null,
      colors: [
        {
          color: '#927876',
          name: 'Browm'
        },
        {
          color: '#D4D4D4',
          name: 'Gray'
        },
        {
          color: '#FD9696',
          name: 'Pink'
        },
        {
          color: '#FDC796',
          name: 'Gold'
        },
      ]
    }
  },
  async created() {
    this.product = await this.activeProduct(this.$route.params.id)
    this.selectedSize = this.sizes[0]
    this.selectedColor = this.colors[0].name
  },
  methods: {
    ...mapActions({
      activeProduct: 'products/activeProduct',
      addProduct: 'cart/addProduct'
    }),
    changeProductSize(size) {
      this.selectedSize = size
    },
    changeProductColors(color) {
      this.selectedColor = color
    },
    isActive(name) {
      return this.selectedColor === name ? 'is-active' : null
    },
    sendProductInfo() {
      const cartItem = {
        ...this.product,
        count: this.count,
        color: this.selectedColor,
        size: this.selectedSize
      }
      this.addProduct(cartItem)
    },

  },
  computed: {},
  components: {
    'button-component': Button
  },
}
</script>
<style lang="scss">

</style>
