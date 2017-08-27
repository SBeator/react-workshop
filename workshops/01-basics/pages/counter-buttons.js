import { Component } from 'react'

const Counter = (props) => (
  <div>
    <button onClick={props.clickHandler}>{props.text}</button>
  </div>
)

class CounterList extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.increace = this.increace.bind(this)
  }

  increace() {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <Counter clickHandler={this.increace} text="First counter" />
        <Counter clickHandler={this.increace} text="Second counter" />
        <Counter clickHandler={this.increace} text="Click me!" />
      </div>
    )
  }
}

export default CounterList