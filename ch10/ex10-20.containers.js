import ColorList from './ui/ColorList'

export const Colors = connect(
  state =>
    ({
      colors: [...state.colors].sort(sortFunction(state.sort))
    }),
  dispatch =>
    ({
      onRemove(id) {
	dispatch(removeColor(id))
      },
      onRate(id, rating) {
	dispatch(rateColor(id, rating))
      }
    })
)(ColorList)
