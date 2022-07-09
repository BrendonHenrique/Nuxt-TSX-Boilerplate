/* eslint-disable no-console */
import Vue from "vue"

export default Vue.extend({
  data: () => ({
    foo: "foo"
  }),
  computed: {
    getFoo() {
      return this.foo
    }
  },
  watch: {
    foo() {
      console.log("foo is changed")
    }
  }
})
