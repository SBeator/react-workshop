import { Component } from 'react'

class Lifecyle extends Component {
  constructor() {
    super()
    
    // this.state = {...}
    // this.props = {...}
  }

  componentWillMount() {
    // if(this.props.xxx) {
    //   ...
    // }
  }

  componentDidMount() {
    // window.addEventListener(...)
  }

  componentWillUnmount() {
    // window.removeEventListener(...)
  }

  render() {
    return (
      <div>
        <pre>
        {`
class Lifecyle extends Component {
  constructor() {
    super()
    
    // this.state = {...}
    // this.props = {...}
  }

  componentWillMount() {
    // if(this.props.xxx) {
    //   ...
    // }
  }

  componentDidMount() {
    // window.addEventListener(...)
  }

  componentWillUnmount() {
    // window.removeEventListener(...)
  }

  render() {
    // dosomething
    return <div>...</div>
  }
}
        `}
        </pre>
      </div>
    )
  }
}


export default Lifecyle

