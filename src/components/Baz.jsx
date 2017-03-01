import React from 'react'

export default (props) => (
  <div>
    <p>This is baz... baz is a list of things... maybe?</p>
    <ul>
      {props.things.map((thing, i) => {
        return <li key={i}>{thing}</li>
      })}
    </ul>
  </div>
)
