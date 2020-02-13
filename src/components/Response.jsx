import React from 'react';

import '../styles/partials/card.scss';
import '../styles/partials/response.scss';

const Response = (props) => {
  let classes = 'card response';
  let styles = 'color:#fff;';
  return (
    <div tabIndex={props.index}>
      {/* <div className="card__back card__back--response">
        <h1>Rick's<br />Against<br />Humanity</h1>
      </div> */}
      {/* <div className="card__front">
        <p>{props.text}</p>
      </div> */}
      <div style={{color: '#fff',padding:'20px'}}>
        {props.text}
      </div>
    </div>
  );
}

export default Response;