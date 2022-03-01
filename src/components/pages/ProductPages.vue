<template lang="pug">
  section.b-product(
    v-if="product"
  )
    .container.__container
      h2.__title {{product.title}}

      .__image
        img(
          :src="`/images/shop/${product.image}.png`"
        )
      .__info
        .__price {{product.price}}
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {},
  data() {
    return {
      product: null,
    }
  },
  async created() {
    this.product = await this.activeProduct(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      activeProduct: 'products/activeProduct'
    }),

  },
  computed: {},
  components: {},
}
</script>
