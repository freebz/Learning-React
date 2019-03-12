// 예제 4-10 배열을 li 엘리먼트로 매핑하기

React.createElement(
  "ul",
  { className: "ingredients" },
  items.map(ingredient =>
    React.createElement("li", null, ingredient)
  )
)
