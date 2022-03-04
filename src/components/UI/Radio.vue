<template lang="pug">
  .b-radio
    .__list
      label.__item(
        v-for="item in items"
      )
        input(
          :type="item.type"
          :name="item.name"
          :value="item.value"
          :checked="activeRadio === item.value"
          v-on:click="$emit('click', item.value)"
        )
        p.__text {{item.text}}
</template>

<script>
export default {
  props: {
    items: Object,
    activeRadio: Number
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {},
}
</script>
