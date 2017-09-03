import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const DOUBLE = 'DOUBLE'
const RESET = 'RESET'

const Button = (props) => (
  <div>
    <button onClick={props.onClick}>{props.text}</button>
  </div>
)

const incrementAction = { type: INCREMENT }
const IncreaseButtonContainer1 = connect(
  state => ({
    text: "Click me to increase the number"
  }),
  dispatch => ({
    onClick: () => store.dispatch(incrementAction)
  })
)(Button)

// 
const incrementActionThunk = () => (incrementAction)
const IncreaseButtonContainer2 = connect(
  state => ({
    text: "Click me to increase the number by thunk"
  }),
  dispatch => ({
    onClick: () => store.dispatch(incrementActionThunk())
  })
)(Button)

// 
const incrementActionAsyncThunk = (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAction)
  }, 1000)
}
const IncreaseButtonContainer3 = connect(
  state => ({
    text: "Click me to increase the number in 2s by thunk"
  }),
  dispatch => ({
    onClick: () => incrementActionAsyncThunk(store.dispatch)
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
        <IncreaseButtonContainer1 />
        <IncreaseButtonContainer2 />
        <IncreaseButtonContainer3 />
      </div>
    )
  }
}

const ReduxCounterContainer = connect(
  state => state
)(ReduxCounter)


// Initialize code; 

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
    case DOUBLE:
      return {
        count: state.count * 2
      }
    case RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(couterReducer)

export default props => (
  <Redux store={store}>
    <ReduxCounterContainer />
  </Redux>
)
