import React from 'react'

import HelloWorld from './HelloWorld.jsx'
import Foo from './Foo.jsx'
import Baz from './Baz.jsx'

class Application extends React.Component {

  constructor(props) {
    super(props)

    this.changeColour = this.changeColour.bind(this)

    this.state = {
      colour: 'red'
    }
  }

  changeColour() {
    this.setState({
      colour: 'blue'
    })
  }

  render() {

    const sidebarThing = <Foo text='Could be a sidebar with other things?'>
        <p>A list of things in Foo?</p>
        <Baz things={[
          'one',
          'two',
          'three',
          <Foo text="A component passed in a part of a list!" />
        ]} />
      </Foo>
    const someOtherThing = <Foo text='another thing' />
    const anotherExampleThing = <Foo text='Reusing a component for the child?' />
    const colorStyle = {
      color: this.state.colour
    }

    return (
      <div>
        <p>This is the "main application", responsible for handling all the state & methods</p>
        <HelloWorld 
          header="This is a sub application that represents the values from the main application"
          sidebar={sidebarThing}
          someOtherPlaceholder={someOtherThing}>
         
          <h2>A Child of HelloWorld</h2>
          <p>I can even use markup in here as I please, this way I can use values like favourite colour: <span style={colorStyle}>{this.state.colour}</span>{this.state.colour === 'red' && <button onClick={this.changeColour}>Change to blue</button>} from the main application without having to pass as props</p>
          
          {anotherExampleThing}

        </HelloWorld>
      </div>
    )
  }
}

export default Application




