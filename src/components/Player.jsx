import React from 'react';

import Response from './Response';
import '../styles/partials/player.scss';

const Player = (props) => {
  const classes = `player player--${props.index}`;
  return (
    <div className={classes}>
      <h1 className='player__name'>{props.name}</h1>
      <div className='player__holder'>
        {props.cards.map(card => {
          return <Response
                    text={card}
                    index={props.cards.indexOf(card)}
                    key={props.cards.indexOf(card)}
                  />
        })}
      </div>
    </div>
  );
}

export default Player;