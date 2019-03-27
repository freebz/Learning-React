import { HashRouter } from 'react-router-dom'

...

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('react-container')
)
