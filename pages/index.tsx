/* eslint-disable no-console */
import Vue from "vue"
import { Component, Watch } from "nuxt-property-decorator"
import { NuxtTSXComponent } from "@/components/NuxtTSXComponent"
import { axios } from "@/store"
import MixinExample from "@/mixins/example"
import { alignType, Typography, TypographyOptions } from "@/components/Typography"

@Component({
  mixins: [MixinExample]
})
export default class Home extends Vue {
  private reactiveProperty: string = ""

  mounted() {
    console.log("Home Page is mounted!")
  }

  get computedData() {
    return this.reactiveProperty + " is a reactive property"
  }

  @Watch("reactiveProperty")
  onReactivePropertyChange(reactiveProperty) {
    console.log(reactiveProperty + "tracking reactiveProperty!")
  }

  render() {
    return (
      <NuxtTSXComponent 
        isActive={axios.isAxiosOnLoading}
        {
          ...{
            on: {
              click: (ev: MouseEvent) => { 
                console.log(ev)
              }
            }
          }
        }
      >
        <Typography 
          textAlign={"center" as alignType}
          as={"h1-regular" as TypographyOptions}
          fontColor="white"
        >
          Index Page Slot 
        </Typography>
      </NuxtTSXComponent>
    )
  }
}
