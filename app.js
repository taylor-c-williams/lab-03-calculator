// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

// reference needed DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addXInput, addYInput, addButton, addResult);
// set event listeners 

addButton.addEventListener('click', ()=> {
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);
    const sum = add(x,y);
    
    addResult.textContent = sum;
});

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
