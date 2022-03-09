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

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {RadioItem} from "@/types/components/UI/Radio";

@Component
export default class Radio extends Vue{
  @Prop() items!: Record<string, RadioItem>
  @Prop() activeRadio!: number
}

</script>
