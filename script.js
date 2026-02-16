const numberBtns = document.querySelectorAll(".number");
const expression = document.querySelector(".expression");
let values = "";
let [a, b] = [];
function getNumber(e) {
  switch (e.target.innerText) {
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
      return ".";
    case "%":
      return "%";
    case "÷":
      return "/";
    case "+":
      return "+";
    case "—":
      return "-";
    case "X":
      return "*";
  }
}

let numbers = [];
numberBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    numbers.push(getNumber(e));
    console.log(numbers);
    values = numbers.join("");
    expression.innerText = values;
  });
});

function displayClear() {
  const AC = document.querySelector(".clear-all");
  AC.addEventListener("click", () => {
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    console.log(numbers);
  });
}
displayClear();

function deleteItem() {
  const DEL = document.querySelector(".delete");
  DEL.addEventListener("click", () => {
    numbers.pop();
    values = numbers.join("");
    expression.innerText = values;
    console.log(numbers);
  });
}

deleteItem();
const equate = document.querySelector(".equals");
equate.addEventListener("click", (e) => operate());

function operate() {
  if (numbers.includes("+")) {
    [a, b] = values.split("+");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(add(+a,+b));
    return (expression.innerText = add(+a, +b));
  } else if (numbers.includes("-")) {
    [a, b] = values.split("-");
    numbers.splice(0, numbers.length);
    numbers.push(subtract(+a,+b));
    expression.innerText = "";
    return (expression.innerText = subtract(+a, +b));
  } else if (numbers.includes("*")) {
    [a, b] = values.split("*");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(multiply(+a,+b));
    return (expression.innerText = multiply(+a, +b));
  } else if (numbers.includes("/")) {
    [a, b] = values.split("/");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(divide(+a,+b));
    return (expression.innerText = divide(+a, +b));
  } else if (numbers.includes("%")) {
    [a, b] = values.split("%");
    numbers.splice(0, numbers.length);
    expression.innerText = "";
    numbers.push(percent(+a));
    return (expression.innerText = percent(+a));
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