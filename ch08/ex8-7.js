// 예제 8-7 color 리듀서를 사용해 만든 스토어

import { createStore } from 'redux'
import { color } from './reducers'

const store = createStore(color)

console.log( store.getState() ) // {}
