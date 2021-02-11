/* ### Sistema de gastos familiar

Crie um objeto que possuirá duas propriedades, ambas do tipo array:
array:
  * receitas: [] +
  * despesas: [] -

Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com saldo 
positivo ou negativo, seguido do valor do saldo

*/

class RendaFamiliar {
  constructor(receitas, despesas ) {
    this.receitas = receitas;
    this.despesas = despesas;
  }

  handleReceitas() {
    let receitasValue = 0;
    this.receitas.forEach((receita) => {
      receitasValue += receita;
    });
    return receitasValue;
  }

  handleDespesas() {
    let despesasValue = 0;
    this.despesas.forEach((despesas) => {
      despesasValue += despesas;
    });
    return despesasValue;
  }

  total() {
    return this.handleReceitas() - this.handleDespesas();
  }

  init() {
    console.log(this.total());
  }
}

let family = {
  incomes: [1800, 200, 460, 160],
  expenses: [230, 100, 300, 50, 90, 30, 400],
}

const rendaFamiliar = new RendaFamiliar(family.incomes, family.expenses);
rendaFamiliar.init();

