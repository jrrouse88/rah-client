import React from 'react';

import '../styles/partials/prompt.scss';

const Prompt = (props) => {
  return (
    <div className="prompt">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Prompt;