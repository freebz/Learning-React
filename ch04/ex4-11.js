// 예제 4-11 key 프로퍼티 추가하기

React.createElement("ul", { className: "ingredients" },
  items.map((ingredient, i) =>
    React.createElement("li", { key: i }, ingredient)
  )
)
