<template lang="pug">
  table.b-table-products
    tr
      th.__title(
        v-for="info in itemInfo"
      ) {{info}}

    tr(
      v-for="item in items"
    )
      td
        button.__button-delete(
          @click="deleteSelectedProduct(item)"
        )
        .__image
          img(
            :src="`/images/shop/${item.image}.png`"
            v-on:click="$router.push(`products/${item.id}`)"
          )
        p {{item.title}}
      td $ {{item.price}}
      td
        input(
          v-on:change="setSelectedProductCount(item, $event.target.value)"
          :value="item.count"
        )
      td {{item.size}}
      td {{item.color}}
      td $ {{item.count * item.price}}
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: {
    itemInfo: Array,
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      deleteProduct: 'cart/deleteProduct',
      setProductCount: 'cart/setProductCount'
    }),
    getItem(item, count) {
      return {
        id: item.id,
        size: item.size,
        color: item.color,
        ...count && {
          count: +count
        }
      }
    },
    deleteSelectedProduct(item) {
      const product = this.getItem(item)

      this.deleteProduct(product)
    },

    setSelectedProductCount(item, count) {
      const product = this.getItem(item, count)

      this.setProductCount(product)
    }


  },
  computed: {
    ...mapGetters({
      items: "cart/items"
    })
  },
  components: {},
}
</script>
