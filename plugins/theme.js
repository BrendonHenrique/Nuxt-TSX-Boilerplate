/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import KippTheme from "~/config/theme"

export default (_, inject) => {
  inject("theme", KippTheme)
}
