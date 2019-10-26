import React, { Component } from 'react';
import WebFont from 'webfontloader';
// import socketIOClient from 'socket.io-client';

import Prompt from './components/Prompt';

import './styles/partials/board.scss';
import './styles/global.scss';

WebFont.load({
  google: {
    families: ['Staatliches']
  }
});

// var socket;


class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: 'http://localhost:3001/',
      prompt: 'Where do I find Dr. Bloom?',
      numPlayers: 4
    }
    // socket = socketIOClient(this.state.endpoint);
  }

  setCard = newCard => {
    this.setState({ prompt: newCard });
  }

  setPlayers = () => {
    const playerNames = ['Rick', 'Morty', 'Summer', 'Jerry'];
    const number = this.state.numPlayers
    for(let i = 0; i < number; i++) {
      let title = document.createElement('h1');
      title.innerText = playerNames[i];
      title.classList.add('player-name');
      title.classList.add('player-name-'+i);
      document.querySelector('.board').appendChild(title)
    }
  }

  componentDidMount() {
    // socket.on('connect', () => {
    //   socket.emit('join', 'this is from the client')
    //   socket.on('set_card', this.setCard)
    // })
    this.setPlayers();
  }

  // componentWillUnmount() {
  //   socket.emit('disconnect', 'bye bye');
  // }

  render() {
    return (
      <div className="board">
        <Prompt
          text = {this.state.prompt}
        />
      </div>
    );
  };
}

export default App;
