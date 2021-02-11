/* ### Transformar notas escolares 

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

//Verificar o valor da nota
//

class RetornarNotas {
  constructor(notas, ) {
    this.notas = notas;
  }

  handleNota(nota) {
    if (nota >= 90) {
      return "A";
    }else if (nota >= 80 && nota <= 89) {
      return "B";
    }else if (nota >= 70 && nota <= 79) {
      return "C";
    }else if (nota >= 60 && nota <= 69) {
      return "D";
    }else if (nota < 60) {
      return "F";
    }
  }

  init() {
    this.notas.forEach((nota) => {
      console.log(this.handleNota(nota));
    })
  }
}

const notas = new RetornarNotas([10,20,30,40,50,60,70,80,90,100]);
notas.init();
