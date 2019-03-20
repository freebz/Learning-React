// 예제 8-10 팩토리로 스토어 만들기

import storeFactory from "./sotre"

const store = storeFactory()

store.dispatch( addColor("#FFFFFF", "밝은 하양") )
store.dispatch( addColor("#00FF00", "미친 녹색") )
store.dispatch( addColor("#0000FF", "큰 파랑") )
