import { Component } from "nuxt-property-decorator"
import Vue from "vue"
import { ThemeProvider } from "vue-styled-components"
import { CThemeProvider, CReset } from "@chakra-ui/vue"
import NuxtTSXTheme from "."

@Component({})
export default class NuxtTSXThemeProvider extends Vue {
  render() {
    return (
      <CThemeProvider>
        <ThemeProvider theme={NuxtTSXTheme}>
          <CReset />
          {this.$slots.default}
        </ThemeProvider>
      </CThemeProvider>
    )
  }
}
