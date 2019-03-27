import ColorList from './ColorList'

const mapStateToProps = state =>
  ({
    colors: [...state.colors].sort(sortFunction(state.sort))
  })

const mapDispatchToProps = dispatch =>
  ({
    onRemove(id) {
      dispatch(removeColor(id))
    },
    onRate(id, rating) {
      dispatch(rateColor(id, rating))
    }
  })

export const Colors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList)
