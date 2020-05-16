enum Sexo {Masculino ='Masculino', Feminino='Feminino'};

class Cliente{
  nome: string;
  idade: number;
  sexo: Sexo  

  constructor(nome:string, idade, sexo:Sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  apresentar() {
    return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos - sexo ${this.sexo}`;
  }
}

let joao: Cliente = new Cliente("João", 25, Sexo.Masculino);
console.log(joao.apresentar());