import { mount } from "@vue/test-utils"
import Button from "@/components/KippButton/index.tsx"

describe("<Button />", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Button)
    expect(wrapper.vm).toBeTruthy()
  })
})
