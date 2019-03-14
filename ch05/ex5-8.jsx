// 예제 5-8 조리법 데이터 변환하기

<div className="recipes">
  {props.recipes.map((recipe, i) =>
    <Recipe key={i} name={recipe.name}
      ingredients={recipe.ingredients}
      steps={recipe.steps}/>
  )}
</div>
