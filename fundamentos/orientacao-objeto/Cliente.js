var Sexo;
(function (Sexo) {
    Sexo["Masculino"] = "Masculino";
    Sexo["Feminino"] = "Feminino";
})(Sexo || (Sexo = {}));
;
class Cliente {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar() {
        return `Olá, eu sou o ${this.nome} e tenho ${this.idade} anos - sexo ${this.sexo}`;
    }
}
let joao = new Cliente("João", 25, Sexo.Masculino);
console.log(joao.apresentar());
