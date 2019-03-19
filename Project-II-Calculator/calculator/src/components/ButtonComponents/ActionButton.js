import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className="action-button">{props.action.action}</div>
  );
}

export default ActionButton;
