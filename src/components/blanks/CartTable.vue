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
          @click="deleteProduct(item)"
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
          @input="item.count"
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
    return {
    }
  },
  methods: {
    ...mapActions({
      deleteProduct: 'cart/deleteProduct',
      changeCount: 'cart/changeCount'
    }),
  },
  computed: {
    ...mapGetters({
      items: "cart/items"
    })
  },
  components: {},
}
</script>
