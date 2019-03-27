import AddColorForm from './AddColorForm'
import SortMenu from './SortMenu'
import ColorList from './ColorList'

const App = ({ store }) =>
  <div className="app">
    <SortMenu sotre={store} />
    <AddColorForm store={store} />
    <ColorList store={store} />
  </div>

export default App
