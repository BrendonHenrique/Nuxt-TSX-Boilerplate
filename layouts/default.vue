<template>
  <NuxtTSXThemeProvider>
    <Nuxt />
  </NuxtTSXThemeProvider>
</template>

<script>
import NuxtTSXThemeProvider from "@/config/theme/provider"

export default {
  name: "App",
  components: {
    NuxtTSXThemeProvider
  }
}
</script>
