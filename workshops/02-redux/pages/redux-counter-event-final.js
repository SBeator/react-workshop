import { Component } from 'react'
import { createStore } from 'redux'
const INCREMENT = 'INCREMENT'

const couterReducer = (state = { count : 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const initialState = {
  count: 0
}

const store = createStore(couterReducer, initialState)

export default class ReduxCounter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.clickHandler = this.clickHandler.bind(this)
  }
  
  shouldComponentUpdate(nextState, nextProps) {
    return nextState.count !== this.state.count
  }

  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ 
        count: state.count
      })
    })
  }

  clickHandler() {
    store.dispatch({ type: INCREMENT })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >Redux Counter: {this.state.count}</button>
      </div>
    )
  }
}
