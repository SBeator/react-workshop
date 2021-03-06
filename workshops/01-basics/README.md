class: middle center
# Basics of React

---
# Before React

- ES6
- JSX

---

# ES6
## Const and let
```js
const pi = 3.1415;
pi = 2; // throw exception

let x = 1;
var y = 1;
if (true) {
  let x = 2;
  var y = 2;
  console.log('x in if:' + x); // x in if:2
  console.log('y in if:' + y); // y in if:2
}

console.log('x out if:' + x); // x out if:1
console.log('y out if:' + y); // y out if:2

```

---
# ES6
## class
```js
class Person {
  say() {
    console.log('I am a Person.');
  }
}
class Man extends Person {
  say() {
    console.log('I am a Man.');
  }
}
class MyComponent extends React.Component {
  constructor(props) {

  }
}
```
---
# ES6
## Arrow Function
```js
const double = x => x * 2
const double = function(x) {
  return x * 2;
}

const add = (a, b) => a + b
const add = function(a, b) {
  return a + b;
}

const increase = x => {
  x++;
  return x;
}
const increase = function(x) {
  x++;
  return x;
}

```

---
layout: false

# JSX
## Javascript Syntax for XML
```jsx
<div>Hello world</div>

<div className="my-class" id={getId()} style={{color: 'red'， fontSize: 20}}>
  {getMessage()}
</div>

class MyComponent extends React.Component {
  getHeader() {
    return <div>Header</div>
  }
  render() {
    return <div>Hello {this.getHeader()}</div>
  }
}
```

- Use {} for js code
- class -> className
- use object for style

---
class: middle center

# Questions?

---

# Prepare code
## Clone the sample code from github and start the server

- `git clone git@github.com:SBeator/react-workshop.git`
- `cd workshops/01-basics`
- `npm install`
- `npm start`
- Open http://localhost:3000/ in browser to see the list of examples

## Copy code with node_nodules

- Copy code from xxxx
- unzip it
- `cd workshops/01-basics`
- `npm start`
- Open http://localhost:3000/ in browser to see the list of examples

---
# Hello world
## Component
```js
class HellWorld extends Component {
  render() {
      return (<div>Hello world!</div>);
  }
}
```
http://localhost:3000/hello-world-component

## Pure function
```js
const HellWorld = (props) => <div>Hello world!</div>;
```
http://localhost:3000/hello-world-purefunction

---
# Props
## The properties for the component
```js
const Text = (props) => <p style={{ color: props.color }}>Text: {props.text}</p>;



const ColorfulTexts = (props) => (
  <div>
      <Text color="red" text="Red text" />
      <Text color="green" text="Green text" />
      <Text color="orange" text="Orange text" />
  </div>
)
```
http://localhost:3000/colorful-text
- Readonly
- Have to be passed from parent

---
# Practice
## Try create a "User" component from this template

```js
const User = (props) => <p>...</p>;

const UserList = (props) => (
  <div>
    <User /> // Xingxin, 25
    <User /> // Zhaoyu, 18
    <User /> // Shihao, 30
  </div>
)

export default UserList
```
Make sure the output are 3 users like this:
```html
I am Xingxin, I am 25 year old
I am Zhaoyu, I am 18 year old
I am Shihao, I am 30 year old
```
Start:
http://localhost:3000/user

Example:
http://localhost:3000/user-final 
---

# Props in component

Use `this.props` to refer the props
```js
class Text extends Component {
  render() {
    return <p style={{ color: this.props.color }}>Text: {this.props.text}</p>
  }
}
```
http://localhost:3000/colorful-text-component

The same with the pure function one:  
http://localhost:3000/colorful-text
---

# State

```js
class Counter extends Component {
  state = {
    count: 0
  }

  constructor(props) {
    super(props)

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
```

http://localhost:3000/counter-timer

- Initial state at beginning
- Use `this.setState()` to change state
- This is just an example, don't follow the same way in real code

---
# Event

```js
class Counter extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.handleClick}>Count: {this.state.count}</button>
  }
}
```
http://localhost:3000/counter-click

- Use **Arrow Function** to define event hander function
- Refer this page for all events:  
  https://facebook.github.io/react/docs/events.html 

---
# An example to combine these features
## props, state, event

http://localhost:3000/counter-buttons

---
# Pratice
## Number controllers
- Show a number (default is 0)
- Four buttons to control the number
  - Click to increase by 1
  - Click to decrease by 1
  - Click to double the number
  - Click to reset to 0

Start: 
http://localhost:3000/number-controller

Example:
http://localhost:3000/number-controller-final

---
# Refs

```js
class Input extends Component {
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
```

- Add attribute "ref" in element
- Use this.refs.[name] to refer the element
- Try to avoid use "refs" in code

http://localhost:3000/input-refer

---
# Array in elements

- Array of JSX element can be used in JSX
- Add "key" attribute for array element

http://localhost:3000/user-final-array  
http://localhost:3000/counter-buttons-array

---
# Lifecycle

.center[
![](https://cdn-images-1.medium.com/max/2000/1*cEWErpe-oY-_S1dOaT1NtA.jpeg)
]

---
# Lifecycle

##Example
Make sure the increase method will only be ran when the component is mounted
http://localhost:3000/counter-time-lifecycle

## Reference
https://facebook.github.io/react/docs/react-component.html

---
# Think in react

https://reactjs.org/docs/thinking-in-react.html
https://chenyitian.gitbooks.io/react-docs/content/docs/thinking-in-react.html

---
class: center middle
# Questions

---
# Homework

## Implement a TodoMVC
- Pure React
  - State
  - Props
  - Refs
  - Event
- No style required
- No DOM operation

http://todomvc.com/