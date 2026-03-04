const numberBtns = document.querySelectorAll(".numbers");
let expression = document.querySelector(".expression");
const operators = document.querySelectorAll(".operators");
let num1 = "";
let num2 = "";
let operator = "";
//
function getNumber(event) {
  switch (event) {
    case "9":
      return 9;
    case "8":
      return 8;
    case "7":
      return 7;
    case "6":
      return 6;
    case "5":
      return 5;
    case "4":
      return 4;
    case "3":
      return 3;
    case "2":
      return 2;
    case "1":
      return 1;
    case "0":
      return 0;
    case ".":
      if (!expression.innerText.includes(".")) return ".";
    default:
      return "";
  }
}
function displayFirstNumber(number) {
  firstDigitsArr.push(getNumber(number));
  num1 = firstDigitsArr.join("");
  console.log("num1 is " + num1);
  expression.innerText = num1;
}
function displaySecondNumber(number) {
  secondDigitsArr.push(getNumber(number));
  num2 = secondDigitsArr.join("");
  console.log("num2 is " + num2);
  expression.innerText = num2;
}

let firstDigitsArr = [];
let secondDigitsArr = [];
numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    operator == ""
      ? displayFirstNumber(e.target.innerText)
      : displaySecondNumber(e.target.innerText);
    // console.log(num1, typeof num1);
  });
});

function getOperator(event) {
  switch (event) {
    case "%":
      return "%";
    case "/":
      return "/";
    case "+":
      return "+";
    case "-":
      return "-";
    case "*":
      return "*";
    default:
      return "";
  }
}
function displayOperator(sign) {
  operator = getOperator(sign);
  console.log("operator is: " + operator);
  expression.innerText = num1 + operator;
}

operators.forEach((operator) => {
  operator.addEventListener("click", (e) =>
    displayOperator(e.target.innerText),
  );
});

function clearDisplay() {
  const AC = document.querySelector(".clear-all");
  AC.addEventListener("click", () => {
    firstDigitsArr = [];
    secondDigitsArr = [];
    num1 = "";
    operator = "";
    num2 = "";
    expression.innerText = "";
  });
}
clearDisplay();

function deleteItem() {
  const DEL = document.querySelector(".delete");
  DEL.addEventListener("click", () => {
    if (num2 == "") {
      operator == "" ? firstDigitsArr.pop() : (operator = "");
      console.log(firstDigitsArr);
      num1 = firstDigitsArr.join("");
      console.log(num1);
      expression.innerText = num1 + operator;
    } else {
      secondDigitsArr.pop();
      console.log(secondDigitsArr);
      num2 = secondDigitsArr.join("");
      console.log(num2);
      expression.innerText = num2;
    }
  });
}
deleteItem();

// document.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     console.log(operate());
//     operate();
//   } else if (e.key == "Backspace") {
//     console.log(e.key);
//     deleteItem();
//   } else {
//     console.log(e.key);
//     displayCharacter(e.key);
//   }
// });

const equate = document.querySelector(".result");
equate.addEventListener("click", (e) => {
    operate();
});

function operate() {
  if (operator == "+") {
    expression.innerText = "";
    firstDigitsArr.splice(0, firstDigitsArr.length, add(+num1, +num2));
    secondDigitsArr = [];
    // console.log(firstDigitsArr, secondDigitsArr);
    // console.log(firstDigitsArr.join());
    num1 = firstDigitsArr.join();
    // console.log(`num 1 is ${num1} and num2 is ${num2}`);
    return (expression.innerText = firstDigitsArr.join());
  }
   else if (operator =="-") {
    expression.innerText = "";
    firstDigitsArr.splice(0, firstDigitsArr.length, subtract(+num1, +num2));
    secondDigitsArr = [];
    num1 = firstDigitsArr.join();
    return (expression.innerText = firstDigitsArr.join());
  } 
  else if (operator =="*") {
    expression.innerText = "";
    firstDigitsArr.splice(0, firstDigitsArr.length, multiply(+num1, +num2));
    secondDigitsArr = [];
    num1 = firstDigitsArr.join();
    return (expression.innerText = firstDigitsArr.join());
  } 
  else if (operator =="/") {
    expression.innerText = "";
    firstDigitsArr.splice(0, firstDigitsArr.length, divide(+num1, +num2));
    secondDigitsArr = [];
    num1 = firstDigitsArr.join();
    return (expression.innerText = firstDigitsArr.join());
  } 
  else if (operator =="%") {
    expression.innerText = "";
    firstDigitsArr.splice(0, firstDigitsArr.length, percent(+num1));
    num1 = firstDigitsArr.join();
    return (expression.innerText = firstDigitsArr.join());
  }
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function percent(a) {
  return a / 100;
}
