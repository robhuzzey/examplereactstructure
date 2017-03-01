import React from 'react'

export default (props) => (
  <div>
    <h1>{props.header}</h1>
    <div>{props.sidebar}</div>
    <p>Some content in Hello World COmponent</p>

    <div>{props.someOtherPlaceholder}</div>

    <div>{props.children}</div>
  </div>
)
