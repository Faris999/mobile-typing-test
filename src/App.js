import React, {Component} from 'react';
import './App.css';
import getIndices from './helper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      userText: '',
      right: '',
      normal: '',
      wrong: '',
      errors: 0
    };
    this.handleUserTextChange = this.handleUserTextChange.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount() {
    fetch('text.txt')
      .then(response => response.text())
      .then(text => this.setState({text, normal: text}));
  }

  handleUserTextChange(e) {
    const userText = e.target.value;
    this.setState(state => {
      let newState = {}
      newState.userText = userText
      const {right, wrong} = getIndices(state.text, userText)
      newState.right = state.text.slice(0, right)
      newState.wrong = state.text.slice(right, wrong)
      if (newState.wrong.length > state.wrong.length) {
        newState.errors = state.errors + 1
        console.log(newState.errors)
      }
      newState.normal = state.text.slice(wrong)
      return newState
    });
  }

  handleBackspace(e) {
    if (e.keyCode === 8) {
      e.preventDefault()
      console.log('delete')
    }
  }

  render() {
    return (
      <div className="app">
        <p ref={this.ref}>
          <span className="right">{this.state.right}</span>
          <span className="wrong">{this.state.wrong}</span>
          <span className="normal">{this.state.normal}</span>
        </p>
        <input 
          type="text"
          value={this.state.userText}
          onChange={this.handleUserTextChange}
          onKeyDown={this.handleBackspace}/>
      </div>
    );
  }

}

export default App;
