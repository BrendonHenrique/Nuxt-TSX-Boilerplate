import { Vue } from "nuxt-property-decorator"

export class VueComponent<P> extends Vue {
  $props!: P
  $theme!: INuxtTSXTheme
}
