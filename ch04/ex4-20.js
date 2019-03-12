// 예제 4-20 팩토리와 map 함께 사용하기

var items = [
  "연어 500그램",
  "잣 1컵",
  "버터 상추 2컵",
  "옐로 스쿼시 1개",
  "올리브 오일 1/2컵",
  "마늘 3쪽"
]

var list = ReactDOMFactories.ul(
  { className: "ingredients" },
  items.map((ingredient, key) =>
    ReactDOMFactories.li({key}, ingredient)
  )
)

ReactDOM.render(
  list,
  document.getElementById('react-container')
)
