<template lang="pug">
  .b-form
    h4.__title {{title}}
    .__inputs
      input-component.__input(
        v-for="(field,key) in fields"
        :value="field.value"
        v-on:input="onInput(key,$event)"
        :type="field.type"
        :placeholder="field.placeholder"
        :error="field.error"
      )
</template>

<script>
import Input from "@/components/UI/Input";

export default {
  props: {
    title: String,
    fields: Object,
  },
  data() {
    return {}
  },
  methods: {
      onInput(key, value){
        this.$emit('update:fields', {
          ...this.fields,
        [key]:{
            ...this.fields[key],
            value
        }

        })
      },
  },
  computed: {},
  components: {
    'input-component': Input
  },
}
</script>
