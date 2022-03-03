<script>
export default {
  props: {
    href: String,
  },
  computed: {
    linkAttrs() {
      return {
        ...this.tag === 'router-link' && {
          to: this.href
        },
        ...this.tag === 'a' && {
          href: this.href
        },
        is: this.tag
      }
    },
  },
}
</script>
