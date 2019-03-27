describe("Rendering UI", () => {
  it("Defaults properties correctly", () =>
    expect(shallow(<ColorList />).find('p').text())
      .toBe('No Colors Listed. (Add a Color)')
  )

  it("Clicking default rate button does not cause Error", () => {
    mount(<ColorList colors={_testColors} />)
      .find('button.rate')
      .first()
      .simulate('click')
  })

  it("Clicking default remove button does not cause Error", () => {
    mount(<ColorList colors={_testColors} />)
      .find('button.remove')
      .first()
      .simulate('click')
  })
})
