import { Component } from 'react'

class Text extends Component {
  render() {
    return <p style={{ color: this.props.color }}>Text: {this.props.children}</p>
  }
}

const ColorfulTexts = (props) => (
  <div>
    <Text color="red" children="Red text"></Text>
    <Text color="green" children="Green text" />
    <Text color="orange">Orange text</Text>
    <p>Normal text</p>
    <p style={{ color: 'grey' }}>Grey normal text</p>
  </div>
)

export default ColorfulTexts