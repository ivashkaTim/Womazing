<template lang="pug">
  component.b-title(
    :is="tag"
  )
    slot
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Title extends Vue{
  @Prop({default: 'h2'}) tag!: string
}

</script>
