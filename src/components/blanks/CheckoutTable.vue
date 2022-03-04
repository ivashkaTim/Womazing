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

<script>

export default {
  props: {
    tableTitles: Array,
    items: Array,
    cost: [Number, String],
    discountCost: [Number, String]
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
}
</script>
