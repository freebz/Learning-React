// 예제 4-7 리액트 엘리먼트 트리

React.createElement("section", {id: "baked-salmon"},
  React.createElement("h1", null, "구운 연어"),
  React.createElement("ul", {"className": "ingredients"},
    React.createElement("li", null, "연어 500그램"),
    React.createElement("li", null, "잣 1컵"),
    React.createElement("li", null, "버터 상추 2컵"),
    React.createElement("li", null, "옐로 스쿼시 1개"),
    React.createElement("li", null, "올리브 오일 1/2컵"),
    React.createElement("li", null, "마늘 3쪽")
  ),
  React.createElement("section", {"className": "instructions"},
    React.createElement("h2", null, "조리 절차"),
    React.createElement("p", null, "오븐을 350도로 예열한다."),
    React.createElement("p", null, "유리 베이킹 그릇에 올리브 오일을 두른다."),
    React.createElement("p", null, "연어, 마늘, 잣을 그릇에 담는다."),
    React.createElement("p", null, "오븐에서 15분간 익힌다."),
    React.createElement("p", null, "옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다."),
    React.createElement("p", null, "오븐에서 그릇을 꺼내서 15분간 식힌 다음 상추를 곁들여서 내놓는다.")
  )
)
