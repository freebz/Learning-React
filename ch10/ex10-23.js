afterEach(() => jest.resetAllMocks())

it("dispatches a REMOVE_COLOR action", () => {
  wrapper.find('ColorListMock')
    .props()
    .onRemove('f9005b4e-975e-433d-a646-79df172e1dbb')

  expect(_store.dispatch.mock.calls[0][0])
    .toEqual({
      id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
      type: 'REMOVE_COLOR'
    })
})

it("dispatches a RATE_COLOR action", () => {
  wrapper.find('ColorListMock')
    .props()
    .onRate('58d9caee-6ea6-4d7b-9984-65b145031979', 5)

  expect(_store.dispatch.mock.calls[0][0])
    .toEqual({
      id: "58d9caee-6ea6-4d7b-9984-65b145031979",
      type: "RATE_COLOR",
      rating: 5
    })
})
