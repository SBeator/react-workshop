import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

const Button = (props) => (
  <div>
    <button onClick={props.onClick}>{props.text}</button>
  </div>
)

const IncreaseButtonContainer = connect(
  state => ({ 
    text: "Click me to increase the number" 
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: INCREMENT })
  })
)(Button)

const DecreaseButtonContainer = connect(
  state => ({
    text: "Click me to decrease the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch({ type: DECREMENT })
  })
)(Button)


class ReduxCounter extends Component {
  constructor() {
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.props.increase()
  }

  render() {
    return (
      <div>
        <p>Redux Counter: {this.props.count}</p>
        <IncreaseButtonContainer />
        <DecreaseButtonContainer />
      </div>
    )
  }
}

const ReduxCounterContainer = connect(
  state => state
)(ReduxCounter)


// Initialize code; 

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = { 
  count: 0 
}

const couterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(couterReducer, initialState)

export default props => (
  <Redux store={store}>
    <ReduxCounterContainer />
  </Redux>
)
