# JavaScript Function with Unexpected Null Behavior

This repository demonstrates a common subtle bug in JavaScript related to null value handling and how to fix it.

## Bug Description
The `foo` function is designed to add two numbers. However, it incorrectly treats the number 0 as null, leading to unexpected results when one of the inputs is 0.

## Bug Solution
The solution involves explicitly checking for both null and 0 to correctly handle cases where one or both arguments are 0 or null.

## How to run the code
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` to see the buggy and fixed code respectively.
3. Run `node bug.js` and `node bugSolution.js` in your terminal to observe the output differences.
