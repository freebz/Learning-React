// 예제 7-2 HIddenMessage 컴포넌트

const Letter = XRegExp('\\pL', 'g')    // 유니코드 문자 클래스 (\pL), global 옵션

class HiddenMessage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hidden: typeof props.hide === "boolean" ? props.hide : true
    }
  }

  render() {
    const { children } = this.props
    const { hidden } = this.state
    return (
      <p>
	{(hidden) ?
	  children.replace(Letter, "x") :
	  children
	}
      <p>
    )
  }
}
