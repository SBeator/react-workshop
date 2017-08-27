import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    })
  }

  render() {
    return <button onClick={this.handleClick}>Count: {this.state.count}</button>
  }
}

export default Counter