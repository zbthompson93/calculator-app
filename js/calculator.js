// The first step is to declare constants for each button and variables for the display
// Number buttons
const ZERO = document.querySelector("#zero");
var zero;
const ONE = document.querySelector("#one");
var one;
const TWO = document.querySelector("#two");
var two;
const THREE = document.querySelector("#three");
var three;
const FOUR = document.querySelector("#four");
var four;
const FIVE = document.querySelector("#five");
var five;
const SIX = document.querySelector("#six");
var six;
const SEVEN = document.querySelector("#seven");
var seven;
const EIGHT = document.querySelector("#eight");
var eight;
const NINE = document.querySelector("#nine");
var nine;
const DECIMAL = document.querySelector("#decimal");
var decimal;

// Action buttons
const ADD = document.querySelector("#add");
const SUBTRACT = document.querySelector("#subtract");
const MULTIPLY = document.querySelector("#multiply");
const DIVIDE = document.querySelector("#divide");
const EQUAL = document.querySelector("#equal");
const CLEAR = document.querySelector("#clear");
const DELETE = document.querySelector("#delete");

// Display variables
var action;
var answer = "";
var equation;
var result;

// Number Button Functions
// Defines the zero variable and adds it to the answer string. Then displays the answer string.
function zeroKey() {
  zero = "0";
  answer = answer + zero;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the one variable and adds it to the answer string. Then displays the answer string.
function oneKey() {
  one = "1";
  answer = answer + one;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the two variable and adds it to the answer string. Then displays the answer string.
function twoKey() {
  two = "2";
  answer = answer + two;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the three variable and adds it to the answer string. Then displays the answer string.
function threeKey() {
  three = "3";
  answer = answer + three;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the four variable and adds it to the answer string. Then displays the answer string.
function fourKey() {
  four = "4";
  answer = answer + four;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the five variable and adds it to the answer string. Then displays the answer string.
function fiveKey() {
  five = "5";
  answer = answer + five;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the six variable and adds it to the answer string. Then displays the answer string.
function sixKey() {
  six = "6";
  answer = answer + six;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the seven variable and adds it to the answer string. Then displays the answer string.
function sevenKey() {
  seven = "7";
  answer = answer + seven;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the eight variable and adds it to the answer string. Then displays the answer string.
function eightKey() {
  eight = "8";
  answer = answer + eight;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the nine variable and adds it to the answer string. Then displays the answer string.
function nineKey() {
  nine = "9";
  answer = answer + nine;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Defines the decimal variable and adds it to the answer string. Then displays the answer string.
function decimalKey() {
  decimal = ".";
  answer = answer + decimal;
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Action Button Functions
// Adds an adding symbol to the answer string and displays in in the calculation box
function addKey() {
  //document.querySelector("#result-display").innerHTML = "+";
  action = "+";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Adds a subtracting symbol to the answer string and displays in in the calculation box
function subtractKey() {
  //document.querySelector("#result-display").innerHTML = "-";
  action = "-";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Adds a multiplying symbol to the answer string and displays in in the calculation box
function multiplyKey() {
  //document.querySelector("#result-display").innerHTML = "*";
  action = "*";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Adds a dividing symbol to the answer string and displays in in the calculation box
function divideKey() {
  //document.querySelector("#result-display").innerHTML = "/";
  action = "/";
  answer = answer + action;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Uses the eval() function to evaluate the answer string as an equation. Then displays the answer in the result/calculation box
function equalKey() {
  result = eval(answer);
  document.querySelector("#result-display").innerHTML = result;
  equation = answer + "=" + result;
  document.querySelector("#calculation-display").innerHTML = equation;
  answer = result;
}

// Clear and Delete Functions
// Resets answer, action, and result to zero
function clearKey() {
  document.querySelector("#result-display").innerHTML = "0";
  document.querySelector("#calculation-display").innerHTML = "0";
  answer = "";
  action = "";
  result;
}

// Deletes the last item in the answer string and returns the new answer
function deleteKey() {
  var length = answer.length - 1;
  answer = answer.slice(0, length);
  document.querySelector("#result-display").innerHTML = answer;
  document.querySelector("#calculation-display").innerHTML = answer;
}

// Function Calls
ZERO.onclick = zeroKey;
ONE.onclick = oneKey;
TWO.onclick = twoKey;
THREE.onclick = threeKey;
FOUR.onclick = fourKey;
FIVE.onclick = fiveKey;
SIX.onclick = sixKey;
SEVEN.onclick = sevenKey;
EIGHT.onclick = eightKey;
NINE.onclick = nineKey;
DECIMAL.onclick = decimalKey;

ADD.onclick = addKey;
SUBTRACT.onclick = subtractKey;
MULTIPLY.onclick = multiplyKey;
DIVIDE.onclick = divideKey;
EQUAL.onclick = equalKey;

CLEAR.onclick = clearKey;
DELETE.onclick = deleteKey;
