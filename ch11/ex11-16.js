export const Color = connect(
  (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetials)
