import React from 'react';
import './Button.css';

const NumberZero = props => {
  return (
    <div className="number-zero">{props.number.number}</div>
  );
}

export default NumberZero;