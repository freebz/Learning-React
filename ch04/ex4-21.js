// 예제 4-21 IngredientsList로 팩토리 만들기

const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
  React.createElement('ul', null,
    list.map((ingredient, i) =>
      React.createElement('li', {key: i}, ingredient)
    )
  )

const Ingredients = React.createFactory(IngredientsList)

const list = [
  "연어 500그램",
  "잣 1컵",
  "버터 상추 2컵",
  "옐로 스쿼시 1개",
  "올리브 오일 1/2컵",
  "마늘 3쪽"
]

render(
  Ingredients({list}),
  document.getElementById('react-container')
)
