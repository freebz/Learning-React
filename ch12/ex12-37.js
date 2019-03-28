export const addColor = (title, color) =>
  ({
    type: "ADD_COLOR",
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
  })

...

store.dispatch(addColor("jet", "#000000"))
