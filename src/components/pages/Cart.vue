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
          input-component.__discount-input(
            v-model="promoCode"
            @input="onInput"
            placeholder="Введите купон"
            :error.sync="promoError"
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

<script lang="ts">
import CartTable from "@/components/blanks/CartTable.vue";
import Button from "@/components/UI/Button.vue";
import Input from "@/components/UI/Input.vue";

import {Component, Vue} from "vue-property-decorator";
import {Action, Getter} from "@/decorators";
import {ActionCartCheckPromo, ActionCartClearItems} from "@/store/modules/cart/actions";
import {CartProduct} from "@/store/modules/cart/mutations";


@Component({
  components: {
    'cart-table-component': CartTable,
    'button-component': Button,
    'input-component': Input
  }
})

export default class Cart extends Vue {

  @Action('cart/clearItems') clearCart!: ActionCartClearItems
  @Action('cart/checkPromoReturn') checkPromo!: ActionCartCheckPromo

  @Getter('cart/discountCost') discountCost!: number
  @Getter('cart/cost') cost!: number
  @Getter('cart/items') items!: CartProduct[]

  itemInfo: string[] = ['Товар', 'Цена', 'Количество', 'Размер', 'Цвет', 'Всего']
  promoCode: string = ''
  promoError: boolean = false

  onInput() {
    this.promoError = false
  }

  async promo() {
    this.promoError = !(await this.checkPromo(this.promoCode))
    this.promoCode = ''
  }
}
</script>
