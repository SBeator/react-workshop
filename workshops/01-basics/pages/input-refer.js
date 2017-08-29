import { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this.changeHanlder = this.changeHanlder.bind(this)
  }

  changeHanlder(event) {
    let input = this.refs.myInput
    
    this.setState({
      text: input.value
    })
  }
  render() {
    return (
      <div>
        <input ref="myInput" type="text" onChange={this.changeHanlder} />
        <p>Input: {this.state.text}</p>
      </div>
    )
  }
}

export default Input