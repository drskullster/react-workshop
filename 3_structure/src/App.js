import React, {Component} from 'react';

const HelloWorld = (props) => {
  const uselessVariable = `dear ${props.name}`;
  return (
    <div>Hello :) {uselessVariable} !</div>
  )
};

class App extends Component {
  handleClick(e) {
    this.setState({
      clickCount: this.state.clickCount
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click me</button>
      </div>
    );
  }
}

export default App;
