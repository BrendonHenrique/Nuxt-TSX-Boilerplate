import { mount } from "@vue/test-utils"
import NuxtTSXComponent from "@/components/NuxtTSXComponent/index.tsx"

describe("<NuxtTSXComponent />", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Button)
    expect(wrapper.vm).toBeTruthy()
  })
})
