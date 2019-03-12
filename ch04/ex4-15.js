// 예제 4-15 상태가 없는 함수형 컴포넌트 만들기

const IngredientsList = props =>
  React.createElement("ul", {className: "ingredients"},
    props.items.map((ingredient, i) =>
      React.createElement("li", { key: i }, ingredient)
    )
  )
