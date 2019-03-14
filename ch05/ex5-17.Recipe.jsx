// 예제 5-17 리팩토링한 Recipe 컴포넌트

import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, instructions, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="조리 절차"
                  steps={steps} />
  </section>

export default Recipe
