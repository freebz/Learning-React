describe("Rendering UI", () => {

  it("Defaults properties correctly", () =>
    expect(shallow(<ColorList />).find('p').text())
      .toBe('No Colors Listed. (Add a Color)')
  )

})
