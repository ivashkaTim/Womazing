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

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {Action, Getter} from "@/decorators";
import {CartProduct} from "@/store/modules/cart/mutations";
import {ActionCartDeleteProduct, ActionCartSetProductCount} from "@/store/modules/cart/actions";

@Component
export default class CartTable extends Vue {

  @Prop() itemInfo!: string[]
  @Action('cart/deleteProduct') deleteProduct!: ActionCartDeleteProduct
  @Action('cart/setProductCount') setProductCount!: ActionCartSetProductCount
  @Getter("cart/items") items!: CartProduct[]



    deleteSelectedProduct(item: CartProduct) {
      this.deleteProduct(item)
    }

    setSelectedProductCount(item: CartProduct, count: number) {
      this.setProductCount({...item, count})
    }
}

</script>
