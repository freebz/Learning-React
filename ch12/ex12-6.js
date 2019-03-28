const Star = ({ selected=false, onClick=f=>f }) =>
  React.createElement(
    "div",
    {
      className: selected ? "star selected" : "star",
      onClick: onClick
    }
  )
