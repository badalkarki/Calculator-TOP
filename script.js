const numberBtns = document.querySelectorAll(".number");
const expression = document.querySelector(".expression");
let operators = document.querySelectorAll(".operator");

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
  }
}

function getOperator(e) {
  switch (e.target.innerText) {
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
    expression.innerText = numbers.join("");
  });
});

// let sign = [];
operators.forEach((operator) => {
  // console.log(operator);
  operator.addEventListener("click", (e) => {
    // sign.push(getOperator(e));
    // console.log(sign);
    expression.innerText = getOperator(e);
  });
});
