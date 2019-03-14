// 예제 5-6 조리법 앱의 구조

// 데이터는 조리법 객체의 배열이다.
var data = [ ... ]

// 조리법 하나를 표현하는 상태가 없는 함수형으로 컴포넌트다.
const Recipe = (props) => (
  ...
)

// 조리법으로 이루어진 메뉴를 표현하는 상태가 없는 함수형 컴포넌트다.
const Menu = (props) => (
  ...
)

// ReactDOM.render를 호출해서 Menu를 현재의 DOM 안에 랜더링한다.
ReactDOM.render(
  <Menu recipes={data} title="맛있는 조리법" />,
  document.getElementById("react-container")
)
