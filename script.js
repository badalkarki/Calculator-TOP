const numberBtns = document.querySelectorAll(".number");
function getNumber() {
  numberBtns.forEach((numBtn) => {
    numBtn.addEventListener("click", (e) => {
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
      }
    });
  });
}

function getOperator() {
    const operatorBtn = document.querySelectorAll(".")
}