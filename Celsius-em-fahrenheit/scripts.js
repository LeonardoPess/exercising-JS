/* ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit
  e faça a transfomação de uma unidade para outra

  C = (f - 32) * 5/9
  F = C * 9/5 + 32

*/

// verify function
// toggle it

class ToggleDegree {
  constructor(degrees) {
    this.degrees = degrees;
  }

  handleDegree(degree) {
    if (degree.includes("C")) {
      let value = degree.replace("C", "");
      this.toFahrenheit(value);
    } else if (degree.includes("F")) {
      let value = degree.replace("F", "");
      this.toCelsius(value);
    } else {
      throw new Error("Not found this degree")
    }
  }

  toCelsius(value) {
    console.log((value - 32) * 5 / 9 + "C");
  }

  toFahrenheit(value) {
    console.log(value * 9 / 5 + 32 + "F");
  }

  init() {
    try {
      this.degrees.forEach((degree) => {
        this.handleDegree(degree);
      });
    } catch (error) {
      alert(error.message)
    }
  }
}

// Just put your degree on array
// Ending in C if it is Celsius
// Or ending in F if it is fahrenheit
// To convert each other
const toggleDegree = new ToggleDegree(["50C","60F", "100C","140F"]);
toggleDegree.init();

