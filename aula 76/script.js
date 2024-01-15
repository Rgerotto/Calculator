function createClaculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickBtn();
    },
    clearDisplay() {
      this.display.value = "";
    },
    clearOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    result() {
      let count = this.display.value;
      try {
        count = eval(count);
        if (!count) {
          alert("invalid count");
          return;
        }
        this.display.value = String(count);
      } catch (error) {
        alert("invalid count");
      }
    },

    clickBtn() {
      document.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("btn-num")) {
          this.btnForDisplay(element.innerText);
        }
        if (element.classList.contains("btn-clear")) {
          //here I'm calling the class from html
          this.clearDisplay();
        }
        if (element.classList.contains("btn-del")) {
          this.clearOne();
        }
        if (element.classList.contains("btn-eq")) {
          this.result();
        }
      });
    },
    btnForDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculator = createClaculator();
calculator.start();
