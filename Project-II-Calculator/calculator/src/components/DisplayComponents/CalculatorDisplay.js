import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionDisplay from '../ButtonComponents/ActionButton';
import NumberZero from '../ButtonComponents/NumberZero';
import ClearButton from '../ButtonComponents/ClearButton';



const NumberZ = {
  number: 0
}

const NumberOne = {
  number: 1
}

const NumberTwo = {
  number: 2
}

const NumberThree = {
  number: 3
}

const NumberFour = {
  number: 4
}

const NumberFive = {
  number: 5
}

const NumberSix = {
  number: 6
}

const NumberSeven = {
  number: 7
}

const NumberEight = {
  number: 8
}

const NumberNine = {
  number: 9
}

const NumberDiv = {
  action: '÷'
}

const NumberMult = {
  action: 'x'
}

const NumberSub = {
  action: '-'
}

const NumberPlus = {
  action: '+'
}

const NumberEqual = {
  action: '='
}

const DisplayClear = {
  clear: 'clear'
}


function CalculatorDisplay() {
  return (
    <div className="display-full">
      <div className="display-calc">0</div>
      <div className="button-display">
        <div className="number-display">
          <ClearButton clear={DisplayClear}/>
          <NumberButton number={NumberSeven}/>
          <NumberButton number={NumberEight}/>
          <NumberButton number={NumberNine}/>
          <NumberButton number={NumberFour}/>
          <NumberButton number={NumberFive}/>
          <NumberButton number={NumberSix}/>
          <NumberButton number={NumberOne}/>
          <NumberButton number={NumberTwo}/>
          <NumberButton number={NumberThree}/>
          <NumberZero number={NumberZ}/>
        </div>
        <div className="action-display">
          <ActionDisplay action={NumberDiv} />
          <ActionDisplay action={NumberMult} />
          <ActionDisplay action={NumberSub} />
          <ActionDisplay action={NumberPlus} />
          <ActionDisplay action={NumberEqual} />
        </div>
      </div>
    </div>
  );
}

export default CalculatorDisplay;
