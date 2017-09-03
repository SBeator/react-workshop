
class: middle center
# Redux
---
# Homework Review

```js
const TodoMVC = props => (
  <Container>
    <Header>
      <Filters />
    </Header>
    <TodoList>
      <TodoItem>
        <Status />
        <Text />
        <TextEditor />
      </TodoItem>
      {...}
    </TodoList>
    <Footer />
  </Container>
)
```
???
- Dynamic use input
- Shared data cross components
---
class: middle
layout: false
# Redux
- State Management
- Predictable State
---
# Why redux

https://css-tricks.com/learning-react-redux/

http://redux.js.org/

---
layout: false
.center[
![](http://christianhall.me/redux-101/img/redux-unidir-ui-arch.jpg)
]
---

# Redux Store and Reducer

```js
import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
const store = createStore(counterReducer)
store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch({ type: 'INCREMENT' })

```

http://localhost:3000/redux-counter-timer

---

# Practice
- Use click event to dispatch 'INCREMENT' action

From:
http://localhost:3000/redux-counter-event

Example:
http://localhost:3000/redux-counter-event-final
---

# React Redux
- Provider
- connect

```js
import { Provider as Redux, connect } from 'react-redux'

const initialState = { count: 0 }

const store = createStore(counterReducer, initialState)
const App = props => <div>Redux Counter: {props.count}</div>
const ConnectedApp = connect(state => state)(App)

ReactDom.render(
  <Redux store={store}>
    <ConnectedApp />
  </Redux>
, rootDom)

```

http://localhost:3000/react-redux-counter-event

---

# Dispath action anywhere

http://localhost:3000/react-redux-counter-buttons

---
# Practice
## Add new action to the counter

- Two new button:
  - Click to double the number
  - Click to reset the number

From:
http://localhost:3000/react-redux-counter-new-events-final

Example:
http://localhost:3000/react-redux-counter-new-events-final

---
layout: true
# Thunk
---

## A thunk is a function that wraps an expression to delay its evaluation.

```js
let x = 1 + 2;

let foo = () => 1 + 2;
```
---

```js
const incrementAction = { type: 'INCREMENT' }

const incrementActionThunk = () => ({ type: 'INCREMENT' })

const incrementActionAsyncThunk = (dispatch) => {
  setTimeout(() => {
    dispatch(incrementAction)
  }, 1000)
}
```

http://localhost:3000/react-redux-thunk

---
layout: false
.center[
![](http://christianhall.me/redux-101/img/redux-unidir-ui-arch.jpg)
]

---
layout: true
# Redux Middleware
---

## Use Redux Thunk in Middleware

```js
({ dispatch, getState }) => next => action => {
  // Do something with action

  return next(action);
};

```

Example:

```js
const logger = ({ dispatch, getState }) => next => action => {
  console.log('action type', action.type);
  next(action)
}

const store = createStore(couterReducer, applyMiddleware(thunk, logger))
```

http://localhost:3000/react-redux-middleware

---

## Logger and Dev Tool
- https://github.com/evgenyrodionov/redux-logger
- https://github.com/gaearon/redux-devtools
- https://github.com/zalmoxisus/redux-devtools-extension

http://localhost:3000/react-redux-counter-debugger

---
layout: false
class: center middle
# Questions

---
layout: false
# Homework
## Improve your TodoMVC with Redux
- Map and manage your state to Redux
- Save your state in localStorage

---
class: center middle
# Thanks
