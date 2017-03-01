import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main.jsx'

(() => {
  ReactDOM.render(
    <Main header="A main application" />,
    document.getElementById('application')
  )
})()

