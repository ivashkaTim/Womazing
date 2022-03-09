<template lang="pug">
  router-link.b-logo(
    :to="to"
  )
    .__image
      img(src='@/assets/images/icons/logo.svg')
    p.__title Womazing
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Logo extends Vue{
  @Prop() to!: string
}
</script>
