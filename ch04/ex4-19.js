// 예제 4-19 번호가 붙지 않은 리스트를 DOM 팩토리를 사용해 만들기

ReactDOMFactories.ul({"className": "ingredients"},
  ReactDOMFactories.li(null, "연어 500그램"),
  ReactDOMFactories.li(null, "잣 1컵"),
  ReactDOMFactories.li(null, "버터 상추 2컵"),
  ReactDOMFactories.li(null, "옐로 스쿼시 1개"),
  ReactDOMFactories.li(null, "올리브 오일 1/2컵"),
  ReactDOMFactories.li(null, "마늘 3쪽")
)
