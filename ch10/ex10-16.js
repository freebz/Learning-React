describe("Rendering UI", () => {
  beforeAll(() => {
    ComposedComponent = Expandable(MockComponent)
    wrapper = mount(<ComposedComponent foo="foo" gnar="gnar"/>)
    props = wrapper.find(MockComponent).props()
  })

  it("starts off collapsed", () =>
    expect(props.collapsed).toBe(true)
  )
  
  it("passes the expandCollapse function to composed component", () =>
    expect(typeof props.expandCollapse)
    .toBe("function")
  )

  it("passes additional foo prop to composed component", () =>
    expect(props.foo)
    .toBe("foo")
  )

  it("passes additional gnar prop to composed component", () =>
    expect(props.gnar)
    .toBe("gnar")
  )

})
