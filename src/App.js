import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    console.log('this is executed first');
  }

  static getDerivedStateFromProps() {
    console.log('before render');
    return null;
  }

  componentDidMount() {
    console.log('after render');
  }

  //* this is a legacy life cycle method
  // componentWillMount() {
  //   this.state.toggle = false;
  //   console.log(this.state.toggle);
  //   console.log('before render');
  // }

  //* this is a legacy life cycle method
  // componentWillReceiveProps() {
  // console.log('something');
  // }

  state = {
    toggle: true
  }

  // functions don't need to be defined by "function or const" keywords in a Class
  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
        </header>

        {toggle && <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>}
        {/* how to call a function by an event is this.(function) */}
        {/* how to call a function when the component is rendered is this.(function)() */}
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    console.log(this.props);
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
