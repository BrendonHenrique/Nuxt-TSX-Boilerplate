import path from "path"
import { chakraConfig } from "./config/theme"

const baseURL = (process.env.VUE_APP_BASE_URL || "/").trim()

const transition = {
  name: "transition",
  mode: "out-in",
  css: false,

  beforeEnter(el) {
    this.$anime.set(el, {
      opacity: 0
    })
  },

  enter(el, done) {
    this.$anime({
      targets: el,
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutSine",
      complete: done
    })
  },

  leave(el, done) {
    this.$anime({
      targets: el,
      opacity: [1, 0],
      duration: 500,
      easing: "easeInOutSine",
      complete: done
    })
  }
}

export default {
  publicPath: baseURL,
  router: {
    base: baseURL
  },
  publicRuntimeConfig: {
    baseURL
  },
  /**
   * Headers of the page
   */
  target: "static",
  head: {
    title: "Nuxt TSX Boilerplate",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href:
          "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.google.com/specimen/M+PLUS+Rounded+1c"
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" }
    ]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: "#102A45", throttle: 0 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-free/css/all.css",
    "./static/styles/transitions.scss",
    "./static/styles/global.scss"
  ],

  chakra: {
    ...chakraConfig
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/axios.js", mode: "client"},
    { src: "./plugins/theme.js" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "nuxt-animejs"
  ],

  layoutTransition: transition,

  pageTransition: transition,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/chakra
    "@chakra-ui/nuxt",
    // https://go.nuxtjs.dev/emotion
    "@nuxtjs/emotion",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "pt",
      name: "Nuxt TSX Boilerplate",
      short_name: "NuxtTSXBoilerplate",
      start_url: `${baseURL}`,
      display: "fullscreen",
      theme_color: "#102A45",
      icons: [
        {
          src: `${baseURL}app/pwa-icons/icon016x016.png`,
          sizes: "16x16",
          type: "image/png"
        }
      ]
    },
    workbox: {
      cacheNames: "pwa-project",
      cachingExtensions: "./plugins/workbox.js",
      cacheOptions: {
        directoryIndex: baseURL
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /**
     * You can extend webpack config here
     */
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }]
      ]
    },
    extend(config) {
      config.resolve.alias["@"] = path.resolve(__dirname, ".")

      config.node = {
        fs: "empty",
        net: "empty",
        tls: "empty"
      }
    }
  }
}
