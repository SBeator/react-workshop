import { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    }, 1000);
  }

  render() {
    return <div>Count: {this.state.count}</div>
  }
}

export default Counter