<template lang="pug">
  .b-call
    .__image(
      v-if="image"
    )
      img(src='@/assets/images/icons/call.svg')
    link-components(
      tag="a"
      href="tel:+74958235412"
      view="secondary"
      size="s"
    ).__number +7 (495) 823-54-12
</template>

<script lang="ts">
import Link from "@/components/UI/Link.vue";
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
    components: {
    'link-components': Link,
  }
})

export default class Call extends Vue{
  @Prop({default:true}) image!: boolean
}

</script>
