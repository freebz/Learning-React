// 예제 6-3 상태가 없는 함수형 컴포넌트

const Summary = ({ ingredients, steps, title }) => {
  return <div className="summary">
    <h1>{title}</h1>
    <p>
      <span>재료 {ingredients} 종류 |</span>
      <span>총 {steps} 단계 </span>
    </p>
  </div>
}

Summary.propTypes = {
  ingredients: React.PropTypes.number,
  steps: React.PropTypes.number,
  title: (props, propName) =>
    ... (title 검증 코드 생략)
}

Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: "[무제]"
}
