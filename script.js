const numberBtns = document.querySelectorAll(".number");
const expression = document.querySelector(".expression");
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
    expression.innerText = numbers.join("");
  });
});

function displayClear() {
  const AC = document.querySelector(".clear-all");
  AC.addEventListener("click", () => {
    expression.innerText = "";
    numbers.splice(0, numbers.length);
    console.log(numbers);
  });
}
displayClear();
