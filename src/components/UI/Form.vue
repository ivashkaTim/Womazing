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

<script lang="ts">
import Input from "@/components/UI/Input.vue";
import {Component, Prop, Vue} from "vue-property-decorator";
import {Field} from "@/types/components/UI/Form";

@Component({
  components: {
    'input-component': Input
  }
})
export default class Form extends Vue {
  @Prop() title!: string
  @Prop() fields!: Record<string, Field>

  onInput(key: string | number, value: string) {
    this.$emit('update:fields', {
      ...this.fields,
      [key]: {
        ...this.fields[key],
        value
      }
    })
  }
}
</script>
