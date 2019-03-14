// 예제 5-19 모듈을 사용해서 작성한 index.js 파일

import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from './data/recipes'

window.React = React

render(
  <Menu recipes={data} />,
  document.getElementById("react-container")
)
