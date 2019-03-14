// 예제 5-3 JSX와 Array.map() 사용하기

<ul>
  {this.props.ingredients.map((ingredient, i) =>
    <li key={i}>{ingredient}</li>
  )}
</ul>
