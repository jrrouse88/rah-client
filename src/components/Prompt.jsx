import React from 'react';

import '../styles/partials/card.scss';
import '../styles/partials/prompt.scss';

const Prompt = (props) => {
  let classes = 'prompt card';
  return (
    <div className={classes} tabIndex="1">
      <div className="card__back">
        <h1>Rick's<br />Against<br />Humanity</h1>
      </div>
      <div className="card__front card__front--prompt">
        <h1>{props.text}</h1>
      </div>
    </div>
  );
}

export default Prompt;