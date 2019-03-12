// 예제 4-5 번호가 붙지 않은 리스트를 리액트 엘리먼트로 표현하기

React.createElement(
  "ul",
  null,
  React.createElement("li", null, "연어 500그램"),
  React.createElement("li", null, "잣 1컵"),
  React.createElement("li", null, "버터 상추 2컵"),
  React.createElement("li", null, "옐로 스쿼시 1개"),
  React.createElement("li", null, "올리브 오일 1/2컵"),
  React.createElement("li", null, "마늘 3쪽")
)
