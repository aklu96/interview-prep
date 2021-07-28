/**
 * Let's practice by making a simple list app as before
 * We'll have a list of up to 8 players with 2 random cards each
 * If you click on either card that player will go to a center screen somewhere
 * you can also add players
 *
 * start with array of players so we can get something on screen
*/

import React from 'react';
import Players from './components/Players';
import AddPlayer from './components/AddPlayer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(player) {
    const { players } = this.state;
    players.push(player);
    this.setState({
      players
    });
  }

  render() {
    const { players } = this.state;
    const { addPlayer } = this;
    return (
      <div>
        <AddPlayer addPlayer={addPlayer} />
        <Players players={players} />
      </div>
    );
  }
}

export default App;
