<template lang="pug">
  .b-card-product(
    v-on:click="$emit('click')"
  )
    .__image
      img(
        :src="`images/shop/${product.image}.png`"
        )
    h3.__title {{product.title}}
    p.__price $ {{product.price}}
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
  },
  components: {},
}
</script>
