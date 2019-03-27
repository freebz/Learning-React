import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import { Colors } from '../../../src/components/containers'

jest.mock('../../../src/components/ui/ColorList')

describe("<Colors /> Container ", () => {

  let wrapper

  const _store = {
    dispatch: jest.fn(),
    subscribe: jext.fn(),
    getState: jext.fn(() =>
      ({
	sort: "SORTED_BY_DATE",
	colors: _testColors
      })
    )
  )

  beforeAll(() => wrapper = mount(
    <Provider store={_store}>
      <Colors />
    </Provider>
  ))

  it("renders three colors", () => {
    expect(wrapper
      .find('ColorListMock')
      .props()
      .colors
      .length
    ).toBe(3)
  })

  it("sorts the colors by date", () => {
    expect(wrapper
      .find('ColorListMock')
      .props()
      .colors[0]
      .title
    ).toBe("tomato")
  })
})
