// 예제 4-16 props 인자를 구조 분해하기

const IngredientsList = ({items}) =>
  React.createElement("ul", {className: "ingredients"},
    items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  )
