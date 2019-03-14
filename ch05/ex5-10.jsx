// 예제 5-10 리팩토링한 메뉴 컴포넌트

const Menu = ({ title, recipes }) =>
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) =>
	<Recipe key={i} {...recipe} />
      )}
    </div>
  </article>
