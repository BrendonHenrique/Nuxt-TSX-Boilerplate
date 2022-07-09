const NuxtTSXTheme: INuxtTSXTheme = {
  breakpoints: ["30em", "48em", "62em", "80em"],
  colors: {
    primary: "#007ACC",
    primary2: "#002A63",
    gradient: "#002A63",
    secondary: "#3f96b4",
    secondary2: "#8cb6e1",
    secondary3: "#bf6c29",
    secondary4: "#818181",
    secondary5: "#3A3A3A",
    white: "#FFFFFF",
    black: "#000000",
    "text-dark-gray": "#4e4e4e",
    "text-light-gray": "#C9C9C9",
    warning: "#FBC246",
    success: "#00C37D",
    error: "#C31700"
  },
  space: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem"
  },
  sizes: {
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem"
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
}

const chakraConfig = {
  config: {
    autoImport: true
  },
  extendTheme: NuxtTSXTheme
}

export default NuxtTSXTheme
export {
  chakraConfig
}
