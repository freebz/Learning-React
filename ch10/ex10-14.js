it("invokes onClick", () => {

  const _click = jest.fn()

  shallow(<Star onClick={_click} />)
    .find('div.star')
    .simulate('click')

  expect(_click).toBeCalled()

})
