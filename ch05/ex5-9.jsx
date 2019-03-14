// 예제 5-9 개선: JSX 스프레드 연산자 사용

{props.recipes.map((recipe, i) =>
  <Recipe key={i} {...recipe} />
)}
