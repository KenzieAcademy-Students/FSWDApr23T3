function addNums(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return false;

  return Number(num1) + Number(num2);
}

// Steps:
// 1. Define the inputs
// 2. Define the expected output
// 3. Pass the inputs into the function
// 4. Test the result against the expected output

// BASIC UNIT TESTING WITH console.assert
// Write tests for expected outcomes
const test1Num1 = 5;
const test1Num2 = 10;
const test1Expected = 15;
const test1Actual = addNums(test1Num1, test1Num2);

console.assert(
  test1Expected === test1Actual,
  `Test 1: Passing 2 numbers. Expected - ${test1Expected} | Actual - ${test1Actual}`
);

// As well as unexpected
const test2Num1 = "banana";
const test2Num2 = 10;
const test2Expected = false;
const test2Actual = addNums(test2Num1, test2Num2);

console.assert(
  test2Expected === test2Actual,
  `Test 2: Passing a string of a word and a number. Expected - ${test2Expected} | Actual - ${test2Actual}`
);

const test3Num1 = 7;
const test3Num2 = "7";
const test3Expected = 14;
const test3Actual = addNums(test3Num1, test3Num2);

console.assert(
  test3Expected === test3Actual,
  `Test 3: Passing a number and a string number. Expected - ${test3Expected} | Actual - ${test3Actual}`
);

const test4Expected = false;
const test4Actual = addNums();

console.assert(
  test4Expected === test4Actual,
  `Test 4: Passing no arguments. Expected - ${test4Expected} | Actual - ${test4Actual}`
);
