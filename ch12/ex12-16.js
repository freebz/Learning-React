import { colors } from './reducers'
import {
  createStore, combineReducers, applyMiddleware
} from 'redux'

const clientLogger = store => next => action => {
  let result
  console.groupCollapsed("디스패팅", action.type)
  console.log('이전 상태', store.getState())
  console.log('액션', action)
  result = next(action)
  console.log('다음 상태', store.getState())
  console.groupEnd()
  return result
}

const serverLogger = store => next => action => {
  console.log('\n 서버 액션 디스패칭\n')
  console.log(action)
  console.log('\n')
  return next(action)
}

const middleware = server =>
  (server) ? serverLogger : clientLogger

const storeFactory = (server = false, initialState = {}) =>
  applyMiddleware(middleware)(createStore)(
    combineReducers({colors}),
    initialState
  )

export default storeFactory
