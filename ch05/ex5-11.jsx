// 예제 5-11 완전한 Recipe 컴포넌트

const Recipe = ({ name, ingredients, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <ul className="ingredients">
      {ingredients.map((ingredient, i) =>
	<li key={i}>{ingredient.name}</li>
      )}
    </ul>
    <section className="instructions">
      <h2>조리 절차</h2>
      {steps.map((step, i) =>
	<p key={i}>{step}</p>
      )}
    </section>
  </section>
