class Funcionario{
  nome: string;
  salario: number;

  constructor(nome, salario){
    this.nome = nome;
    this.salario = salario;
  }

  pagarImposto (taxa:number = 7.5){
    console.log(`pagando ${this.salario * taxa / 100} de imposto.`);
  }
}

class Secretario extends Funcionario{}

class Executivo extends Funcionario{
  pagarImposto(taxa:number = 27.5){
    super.pagarImposto(taxa);
  }
}

let sarah = new Secretario("Sarah", 2000);
sarah.pagarImposto();

let jose = new Secretario("jose", 2000);
jose.pagarImposto(0.5);


// interface
interface Pessoa{
  idade: number;
  sexo?: string;
}

//function imprimeIdade(pessoa:{ idade: number}) {
function imprimeIdade(pessoa:Pessoa) {
  console.log(pessoa.idade);
}
let p = {nome: 'Fábio', idade: 10};
imprimeIdade(p);