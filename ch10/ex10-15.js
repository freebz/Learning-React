import { mount } from 'enzyme'
import Expandable from '../../../src/components/HOC/Expandable'

describe("Expandable Higher-Order Component", () => {

  let props,
      wrapper,
      ComposedComponent,
      MockComponent = ({collapsed, expandCollapse}) =>
        <div onClick={expandCollapse}>
          {(collapsed) ? 'collapsed' : 'expanded'}
        </div>

  describe("Rendering UI", ... )

  describe("Expand Collapse Functionality", ... )

})
