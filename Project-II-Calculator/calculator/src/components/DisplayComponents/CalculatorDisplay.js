import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionDisplay from '../ButtonComponents/ActionButton';
import NumberZero from '../ButtonComponents/NumberZero';
import ClearButton from '../ButtonComponents/ClearButton';



const NumberZ = {
  number: 0
}

const DisplayClear = {
  clear: 'clear'
}

const NumberObj = [
  { number: 1},
  { number: 2},
  { number: 3},
  { number: 4},
  { number: 5},
  { number: 6},
  { number: 7},
  { number: 8},
  { number: 9},
 
];



const ActionsObj = [
  {action: '÷'}, 
  {action: 'x'}, 
  {action: '-'}, 
  {action: '+'}, 
  {action: '='} 
];

function CalculatorDisplay() {



  return (
    
    <div className="display-full" >
      <div className="display-calc">0</div>
      <div className="button-display">

        <div className="number-display">
            <ClearButton clear={DisplayClear}  />
            {NumberObj.map(NewNumber => (
            <NumberButton number={NewNumber} />
            ))}
            <NumberZero number={NumberZ} />  
        </div>

        <div className="action-display" >
             {ActionsObj.map(NewAction => (
            <ActionDisplay action={NewAction} />
             ))}
        </div>
      </div>
    </div>
  );
             
  
}

export default CalculatorDisplay;
