import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class LinkOptions extends Vue {

    @Prop({default: 'router-link'}) tag!: string
    @Prop() href!: string

    get linkAttrs() {
        return {
            ...this.tag === 'router-link' && {
                to: this.href
            },
            ...this.tag === 'a' && {
                href: this.href
            },
            is:this.tag
        }
    }
}


