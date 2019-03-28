import thunk from 'redux-thunk'


const middleware = server => [
  (server) ? serverLogger : clientLogger,
  thunk
]

const storeFactory = (server = false, initialState = {}) =>
  applyMiddleware(...middleware(server))(createStore)(
    combineReducers({colors}),
    initialState
  )

export default storeFactory
