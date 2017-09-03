import { Component } from 'react'
import { createStore } from 'redux'
import { Provider as Redux, connect } from 'react-redux'

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
        <button onClick={this.clickHandler} >Redux Counter: {this.props.count}</button>
      </div>
    )
  }
}

const ReduxCounterContainer = connect(
  state => state,
  dispatch => ({
    increase: () => store.dispatch({ type: INCREMENT })
  })
)(ReduxCounter)


// Initialize code; 

const INCREMENT = 'INCREMENT'

const initialState = { count: 0 }

const couterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
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
