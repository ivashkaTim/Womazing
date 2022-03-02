<template lang="pug">
  section.b-cart
    .container.__container
      .__top
        .__title Корзина
      .__bottom
        cart-table-component(
        :itemInfo="itemInfo"
        )
</template>

<script>
import CartTable from "@/components/blanks/CartTable";

export default {
  props: {},
  data() {
    return {
      itemInfo: ['Товар', 'Цена', 'Количество', 'Размер', 'Цвет', 'Всего']
    }
  },
  methods: {
  },
  computed: {
  },
  components: {
    'cart-table-component': CartTable
  },
}
</script>
