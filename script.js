const numberBtns = document.querySelectorAll(".number");
const expression = document.querySelector(".expression");
let values = "";
let [a, b] = [];
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
      return "";
    case "%":
      if (!expression.innerText.includes("%")) return "%";
      break;
    case "/":
      if (!expression.innerText.includes("/")) return "/";
      break;
    case "+":
      if (!expression.innerText.includes("+")) return "+";
      break;
    case "-":
      if (!expression.innerText.includes("-")) return "-";
      break
    case "*":
      if (!expression.innerText.includes("*")) return "*";
      break
  }
}

function displayCharacter(event) {
  numbers.push(getNumber(event));
  console.log(numbers);
  values = numbers.join("");
  expression.innerText = values;
}

let numbers = [];
numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => displayCharacter(e.target.innerText));
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log(operate());
    operate();
  } else if (e.key == "Backspace") {
    console.log(e.key);
    deleteItem();
  } else {
    console.log(e.key);
    displayCharacter(e.key);
  }
});

function clearDisplay() {
  const AC = document.querySelector(".clear-all");
  AC.addEventListener("click", () => {
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    console.log(numbers);
  });
}
clearDisplay();
function deleteItem() {
  numbers.pop();
  values = numbers.join("");
  expression.innerText = values;
  console.log(numbers);
}

const DEL = document.querySelector(".delete");
DEL.addEventListener("click", () => deleteItem());

deleteItem();

const equate = document.querySelector(".equals");
equate.addEventListener("click", (e) => {
  if (
    numbers[numbers.length - 1] == 0 ||
    numbers[numbers.length - 1] == 1 ||
    numbers[numbers.length - 1] == 2 ||
    numbers[numbers.length - 1] == 3 ||
    numbers[numbers.length - 1] == 4 ||
    numbers[numbers.length - 1] == 5 ||
    numbers[numbers.length - 1] == 6 ||
    numbers[numbers.length - 1] == 7 ||
    numbers[numbers.length - 1] == 8 ||
    numbers[numbers.length - 1] == 9 ||
    numbers[numbers.length - 1] == "%"
  ) {
    operate();
  }
});

function operate() {
  if (numbers.includes("+")) {
    [a, b] = values.split("+");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(add(+a, +b));
    return (expression.innerText = add(+a, +b));
  } else if (numbers.includes("-")) {
    [a, b] = values.split("-");
    numbers.splice(0, numbers.length);
    numbers.push(subtract(+a, +b));
    expression.innerText = "";
    return (expression.innerText = subtract(+a, +b));
  } else if (numbers.includes("*")) {
    [a, b] = values.split("*");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(multiply(+a, +b));
    return (expression.innerText = multiply(+a, +b));
  } else if (numbers.includes("/")) {
    [a, b] = values.split("/");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(divide(+a, +b));
    return (expression.innerText = divide(+a, +b));
  } else if (numbers.includes("%")) {
    [a, b] = values.split("%");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(percent(+a));
    return (expression.innerText = percent(+a));
  }
}

// Simple calculator operations
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