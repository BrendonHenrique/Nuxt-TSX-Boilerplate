import { Component, Prop } from "nuxt-property-decorator"
import PropAcessor, { TypographyOptions } from "./prop-acessor"
import { VueComponent } from "@/config/vue-component"

type alignType =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "justify-all"
  | "match-parent";

type textDecorationType =
  | "auto"
  | "blink"
  | "dashed"
  | "dotted"
  | "double"
  | "underline"
  | "overline"
  | "line-through"
  | "initial"
  | "inherit"
  | "revert"
  | "solid"
  | "wavy";

type TypographyProps = {
  as: TypographyOptions;
  fontColor?: string;
  fontWeight?: number;
  lineHeight?: number;
  textAlign?: alignType;
  hasCursor?: boolean;
  textDecoration?: textDecorationType;
}


@Component({})
export class Typography extends VueComponent<TypographyProps> {
  @Prop(String) as!: TypographyOptions
  @Prop(String) fontColor!: string
  @Prop(Number) fontWeight!: number
  @Prop(Number) lineHeight!: number
  @Prop(String) textAlign!: alignType
  @Prop(String) textDecoration!: textDecorationType
  @Prop(Boolean) hasCursor!: boolean

  get getFontColor() {
    return (
      this.$theme.colors[this.fontColor] ||
      this.fontColor ||
      this.$theme.colors["text-dark-gray"]
    )
  }

  render(h) {
    const { as, fontSize, lineHeight, fontWeight } = {
      ...PropAcessor()[this.as]
    }

    const getLineHeight = () => {
      if (this.lineHeight) {
        return this.lineHeight + "px"
      } else {
        return lineHeight
      }
    }

    return h(
      as,
      {
        style: {
          textAlign: this.textAlign,
          fontSize,
          lineHeight: getLineHeight(),
          fontWeight: this.fontWeight || fontWeight,
          color: this.getFontColor,
          cursor: this.hasCursor && "pointer",
          textDecoration: this.textDecoration
        }
      },
      this.$slots.default
    )
  }
}

export { TypographyOptions, alignType, textDecorationType} 
