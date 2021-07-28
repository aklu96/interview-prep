import React from 'react';

const Player = (props) => {
  const { player } = props;
  return (
    <div>
      <div>{player.name}</div>
      <div>
        <span>{player.cards[0]}</span>
        <span> </span>
        <span>{player.cards[1]}</span>
      </div>
    </div>
  )
};

export default Player;
