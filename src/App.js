import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
        friends: [],
        picture: '',
        name: '',
    }
  }

  updatePicture(value) {
    this.state.picture = value // DON'T EVER DO THAT OR BAD THINGS
    this.setState({
      picture: value,
    })
  }

  updateName(value) {
    this.setState({ name: value })
  }

  render() {
    return (
      <div>
        <span>Picture:</span>
        <input onChange={event => {
          this.updatePicture(event.target.value)}
        } value={this.state.picture} />

        <span>Name:</span>
        <input onChange={event => this.updateName(event.target.value)} value={this.state.name}/>

        <button>Add Friend</button>
        <div>
          State: {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;