import React from 'react';
import Player from './Player';

const Players = (props) => {
  const { players } = props;
  return (
    <div>
      {players.map((player) => <Player key={player.name} player={player} />)}
    </div>
  )
};

export default Players;
