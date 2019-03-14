// 예제 5-16 Ingredient 컴포넌트를 활용한 IngredientsList

import Ingredient from './Ingredient'

const IngredientsList = ({ list }) =>
  <ul className="ingredients">
    {list.map((ingredient, i) =>
      <Ingredient Key={i} {...ingredient} />
    )}
  </ul>

export default IngredientsList
