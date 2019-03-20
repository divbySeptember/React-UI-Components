import React from 'react';
import './Button.css';

const ClearButton = props => {
  return (
    <div className="clear-button">{props.clear.clear}</div>
  );
}

export default ClearButton;