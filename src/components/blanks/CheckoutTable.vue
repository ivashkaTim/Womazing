<template lang="pug">
  table.b-table-total
    tr
      td.__title(
        v-for="tableTitle in tableTitles"
      ) {{tableTitle}}
    tr(
      v-for="item in items"
    )
      td {{item.title}}
      td {{item.count}}
      td {{item.size}}
      td {{item.color}}
      td $ {{item.count * item.price}}
    tr.__total
      td(
        colspan=4
      ) Подытог:
      td ${{cost}}
    tr.__total
      td(
        colspan=4
      ) Итого:
      td ${{discountCost}}
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";
import {CartProduct} from "@/store/modules/cart/mutations";

@Component
export default class CheckoutTable extends Vue{
  @Prop() tableTitles!: string[]
  @Prop() items!: CartProduct[]
  @Prop() cost!: number | string
  @Prop() discountCost!: number | string
}

</script>
