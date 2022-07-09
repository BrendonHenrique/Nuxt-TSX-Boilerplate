/* eslint-disable no-console */
import { VueComponent } from "@/config/vue-component"
import { CButton, CImage, CStack } from "@chakra-ui/vue"
import { NuxtTSXStyledCustomComponent } from "@/components/NuxtTSXComponent/styles"
import { Component, Prop } from "nuxt-property-decorator"

interface NuxtTSXComponentProps {
  isActive: Boolean
}

@Component({})
export class NuxtTSXComponent extends VueComponent<NuxtTSXComponentProps> {
  @Prop(Boolean) readonly isActive!: boolean

  render() {
    return (
      <NuxtTSXStyledCustomComponent isActive={this.isActive}>
        <CStack gap={this.$theme.space[4]}>
          <CImage src="/images/logo.png"/>
          <CButton bg={this.$theme.colors.primary}
          {
            ...{
              on: {
                click: (ev: MouseEvent) => {
                  console.log("firing click event!")
                  this.$emit("click", ev)
                }
              }
            }
          }>
            Click here
          </CButton>
        </CStack>
        {this.$slots.default}
      </NuxtTSXStyledCustomComponent>
    )
  }
}
