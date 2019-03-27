import { withRouter } from 'react-router'

...

class Color extends Component {
  render() {
    const {
      id,
      title,
      color,
      rating,
      timestamp,
      onRemove,
      onRate,
      history } = this.props
    return (
      <section className="color" style={this.style}>
	<h1 ref="title"
            onClick={() => history.push(`/${id}`)}>
	  {title}
        </h1>
	<button onClick={onRemove}>
	  <FaTrash />
	</button>
	<div className="color"
             onClick={() => history.push(`/${id}`)}
             style={{ backgroundColor: color }}>
	</div>
	<TimeAgo timestamp={timestamp} />
	<div>
  	  <StarRating starsSelected={rating}
                      onRate={onRate}/>
	</div>
      </section>
    )
  }
}

export default withRouter(Color)
