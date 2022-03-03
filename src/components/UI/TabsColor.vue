<template lang="pug">
  .b-tabs-colors
    .__button(
      v-for="item in list"
      :style="{'background-color': item.color}"
      v-on:click ="changeActiveItem(item)"
      :class="isActive(item)"
    )
</template>

<script>
export default {
  props: {
    list:Array,
  },
  data() {
    return {
      activeItem: 0
    }
  },
  methods: {
    isActive(item) {
      return this.activeItem === item.id ? 'is-active' : null
    },
    changeActiveItem(item) {
      this.activeItem = item.id
      this.$emit('click',item)
    }
  },
  computed: {},
  components: {},
}
</script>
