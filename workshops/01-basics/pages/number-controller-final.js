import { Component } from 'react'

const Controller = (props) => (
  <div>
    <button onClick={props.clickHandler}>{props.text}</button>
  </div>
)

class NumberController extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.increace = this.increace.bind(this)
    this.decrease = this.decrease.bind(this)
    this.double = this.double.bind(this)
    this.reset = this.reset.bind(this)
  }

  increace() {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  decrease() {
    let newCount = this.state.count - 1
    this.setState({
      count: newCount
    })
  }

  double() {
    let newCount = this.state.count * 2
    this.setState({
      count: newCount
    })
  }

  reset() {
    let newCount = 0
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div>
        <p>Number: {this.state.count}</p>
        <Controller clickHandler={this.increace} text="Click to increase by 1" />
        <Controller clickHandler={this.decrease} text="Click to decrease by 1" />
        <Controller clickHandler={this.double} text="Click to double the number" />
        <Controller clickHandler={this.reset} text="Click to reset the number" />
      </div>
    )
  }
}

export default NumberController