export const rateColor = id =>
  (dispatch, getState) => {
    dispatch({ type: "RANDOM_RATING_STARTED" })
    setInterval(() =>
      dispatch({
	type: "RATE_COLOR",
	id,
	rating: Math.floor(Math.random()*5)
      }),
      1000
    )
  }

...

store.dispatch(
  rateColor("f9005b4e-975e-433d-a646-79df172e1dbb")
)
