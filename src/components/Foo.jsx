import React from 'react'

export default (props) => (
  <div>
    <p>Hello this is foo {props.text}</p>
    {props.children}
  </div>
)
