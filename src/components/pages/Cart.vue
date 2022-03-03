<template lang="pug">
  section.b-cart
    .container.__container
      .__top
        .__title Корзина
      .__center
        cart-table-component.__table(
          :itemInfo="itemInfo"
        )
      .__bottom
        .__discount
          input.__discount-input(
            v-model="promoCode"
            @input="onInput"
            placeholder="Введите купон"
          )
          button-component.__discount-button(
            view="primary-ghost"
            size="l"
            @click="promo"
            :disabled="!promoCode"
          ) Применить купон
        p.__error(
          v-if="promoError"
        ) Купон не действует!
        button-component(
          view="primary-ghost"
          size="l"
          @click="clearCart"
          :disabled="!items.length"
        ) Очистить корзину
      .__send-cart
        .__total
          p.__cost Подытог: ${{cost}}
          p.__discount-cost Итог: ${{discountCost}}
        button-component(
          tag="router-link"
          href="/checkout"
          view="primary"
          size="l"
          :disabled="!items.length"
        ) Оформить заказ


</template>

<script>
import CartTable from "@/components/blanks/CartTable";
import Button from "@/components/UI/Button";
import {mapActions, mapGetters} from "vuex";

export default {
  props: {},
  data() {
    return {
      itemInfo: ['Товар', 'Цена', 'Количество', 'Размер', 'Цвет', 'Всего'],
      promoCode: '',
      promoError: false,
    }
  },
  methods: {
    ...mapActions({
      clearCart: 'cart/clearItems',
      checkPromo: 'cart/checkPromo',
    }),
    onInput() {
      this.promoError = false
    },
    async promo(){
      this.promoError = !(await this.checkPromo(this.promoCode))
      this.promoCode=''
    },
  },
  computed: {
    ...mapGetters({
      discountCost: 'cart/discountCost',
      cost: 'cart/cost',
      items: 'cart/items',
    }),
  },

  components: {
    'cart-table-component': CartTable,
    'button-component': Button,
  },
}
</script>
