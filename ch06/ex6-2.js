// 예제 6-2 ES6 클래스

class Summary extends React.Component {
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
	<h1>{title}</h1>
	<p>
	  <span>재료 {ingredients} 종류</span> |
	  <span>총 {steps} 단계 </span>
	</p>
      </div>
    )
  }
}

Summary.propTypes = {
  ingredients: Proptypes.number,
  steps: Proptypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error("제목(title)은 문자열이어야 합니다.") :
      (props[propName].length > 20) ?
        new Error("제목은 20자 이내여야 합니다.") :
        null
}

Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: "[무제]"
}
