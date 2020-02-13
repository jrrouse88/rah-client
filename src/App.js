import React, { Component } from 'react';
import WebFont from 'webfontloader';
// import socketIOClient from 'socket.io-client';

import Prompt from './components/Prompt';
import Player from './components/Player';

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
      responses: [
        "Nutrino bomb",
        "Night time takes up half of all time",
        "My little Morties",
        "Holy Crap! Morty, run!",
        "Principal Vagina. No relation",
        "You're like Hitler, but even Hitler cared about Germany or something",
        "Interdimensional Portal Device",
        "Take these seeds and put them waaaaaay up in your butthole",
        "Taut anal cavity",
        "Flim flam",
        "Albert Eindouche",
        "Megaseeds dissolving in your anal cavity",
        "It's a lot like inception, except it'll make sense",
        "Tiny RIIIIIIIIICK!!!",
        "Pickle Riiiiiiiiiiick!!!",
        "Scary Terry, the legally safe knock of of an 80s horror character",
        "Garmanarnar",
        "Schezuan sauce",
        "Caaaaaan do",
        "I'm Mr Meseeks, look at me",
        "An amusement park inside a human body",
        "Pirates of the Pancreas",
        "The Sphincter Dam",
        "People on the internet who are only turned on by cartoons of japanese teenagers",
        "Interdimensional cable",
        "A stuffed teddy bear that poops spider webs",
        "A sex robot",
        "A mexican space armada with weapons made from tomatoes",
        "Slippery stair",
        "Rapey jellybean",
        "Shmeckles",
        "Wubba Lubba Dub Duuuuuuub!!!!",
        "Shonies",
        "Herpy Herpson High School",
        "Preying Mantis insect people",
        "Cronenburg Morty",
        "Roofie juice serum",
        "Space AIDS",
        "Beauty cream that makes ugly women beautiful, but also makes the blind",
        "King Flippy Nips",
        "Beating the shit out of leash yanking dog owners and spitting on them"
      ],
      numPlayers: 4,
      players: []
    }
    // socket = socketIOClient(this.state.endpoint);
  }

  shuffle = array => {
    var i = Math.floor(Math.random() * array.length);
    return array[i];
  }

  dealResponseCards = (players) => {
    players.map(player => {
      player.cards = [];
      let cachedResponses  = this.state.responses;
      for(let i = 0; i < 5; i++) {
        player.cards.push(this.shuffle(cachedResponses));
        cachedResponses.splice(cachedResponses.indexOf(cachedResponses[i]),1)
        this.setState({responses: cachedResponses});
      }
      return player;
    })
  }

  setCard = newCard => {
    this.setState({ prompt: newCard });
  }

  setPlayers = () => {
    const players = [{name: 'Rick'}];
    this.dealResponseCards(players);
    this.setState({players})
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
    const { players } = this.state;
    return (
      <div className="board">
        <Prompt
          text = {this.state.prompt}
        />
        {players.map(player => {
          return(
            <Player
              name={player.name}
              cards={player.cards}
              index={players.indexOf(player)}
              key={players.indexOf(player)}
            />
          )
        })}
      </div>
    );
  };
}

export default App;
