import express from 'express'
import path from 'path'
import fs from 'fs'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import App from '../components/App'
import storeFactory from '../store'
import initialState from '../../data/initialState.json'

const fileAssets = express.static(
  path.join(__dirname, '../../dist/assets')
)

const serverStore = storeFactory(true, initialState)

serverStore.subscribe(() =>
  fs.writeFile(
    path.join(__dirname, '../../data/initialState.json'),
    JSON.stringify(serverStore.getState()),
    error => (error) ?
      console.log("상태 저장 오류!", error) :
      null
  )
)

const logger = (req, res, next) => {
  console.log(`'${re.url}'에 대한 ${req.method} 요청`)
  next()
}

const addStoreToRequestPipeline = (req, res, next) => {
  req.store = serverStore
  next()
}

const makeClientStoreFrom = store => url =>
  ({
    store: storeFactory(false, store.getState()),
    url
  })

const renderComponentsToHTML = ({url, store}) =>
  ({
    state: store.getState(),
    css: defaultStyles,
    html: renderToString(
      <Provider store={store}>
	<StaticRouter location={url} context={{}}>
	  <App />
	</StaticRouter>
      </Provider>
    )
  })

const buildHTMLPage = ({html, state}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>유니버설 색 관리 앱</title>
    </head>
  <body>
    <div id="react-container">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(state)}
    </script>
    <script src="/bundle.js"></script>
  </body>
  </html>
`

const htmlResponse = compose(
  buildHTMLPage,
  renderComponentsToHTML,
  makeClientStoreFrom(serverStore)
)

const respond = (req, res) =>
  res.status(200).send(htmlResponse(req.url))

export default express()
  .use(logger)
  .use(fileAssets)
  .use(addStoreToRequestPipeline)
  .use(respond)
