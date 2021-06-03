// IMPORT MODULES under test here:
// import { add } from '../calculatons.js';
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    const expected = 7;
    const actual = subtract(10, 3);
    expect.equal(actual, expected);
});

