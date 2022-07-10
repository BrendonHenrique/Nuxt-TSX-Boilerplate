/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import NuxtTSXTheme from "~/config/theme"

export default (_, inject) => {
  inject("theme", NuxtTSXTheme)
}
