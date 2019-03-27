describe("Expand Collapse Functionality", () => {

  let instance

  beforeAll(() => {
    ComposedComponent = Expandable(MockComponent)
    wrapper = mount(<ComposedComponent collapsed={false}/>)
    instance = wrapper.instance()
  })

  it("renders the MockComponent as the root element", () => {
    expect(wrapper.first().is(MockComponent))
  })

  it("starts off expanded", () => {
    expect(instance.state.collapsed).toBe(false)
  })

  it("toggles the collapsed state", () => {
    instance.expandCollapse()
    expect(instance.state.collapsed).toBe(true)
  })

})
