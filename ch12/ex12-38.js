export const addColor = (title, color) =>
  (dispatch, getState) => {

    setTimeout(() =>
      dispatch({
	type: "ADD_COLOR",
	index: getState().colors.length + 1,
	timestamp: new Date().toString()
	title,
	color
      }),
      2000
    )
  }

...

store.dispatch(addColor("jet", "#000000"))
