<template lang="pug">
  .b-call
    .__image(
      v-if="image"
    )
      img(src='@/assets/images/icons/call.svg')
    link-components(
      view="secondary"
      size="s"
    ).__number +7 (495) 823-54-12
</template>

<script>
import Link from "@/components/UI/Link";

export default {
  props: {
    image:{
      default: false,
      type: Boolean,
    }
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    'link-components': Link,
  },
}
</script>
