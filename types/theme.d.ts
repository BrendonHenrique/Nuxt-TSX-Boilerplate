declare interface INuxtTSXTheme {
  breakpoints: string[],
  colors: {
    primary: string,
    primary2: string,
    gradient: string,
    secondary: string,
    secondary2: string,
    secondary3: string,
    secondary4: string,
    secondary5: string,
    white: string,
    black: string,
    "text-dark-gray": string,
    "text-light-gray": string,
    warning: string,
    success: string,
    error: string,
  },
  space: {
    px: string,
    0: string,
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
    8: string,
    10: string,
    12: string,
    16: string,
    20: string,
    24: string,
    32: string,
    40: string,
    48: string,
    56: string,
    64: string,
  },
  sizes: {
    full: string,
    "3xs": string,
    "2xs": string,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
    "2xl": string,
    "3xl": string,
    "4xl": string,
    "5xl": string,
    "6xl": string,
  },
  zIndices: {
    auto: string,
    hide: number,
    base: number,
    docked: number,
    dropdown: number,
    sticky: number,
    banner: number,
    overlay: number,
    modal: number,
    popover: number,
    skipLink: number,
    toast: number,
    tooltip: number,
  },
}

declare interface StyledNuxtTSXTheme {
  theme: INuxtTSXTheme
}
