// 예제 6-4 AddColorForm

import { Component } from 'react'
import { render } from 'react-dom'

class AddColorForm extends Component {
  render() {
    return (
      <form onSubmit={e=>e.preventDefault()}>
	<input type="text"
               placeholder="색 이름..." required/>
	<input type="color" required/>
	<button>추가</button>
      </form>
    )
  }
}
