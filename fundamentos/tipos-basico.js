// boolean
let estaPago = true;
// number
let idade = 20;
let valor = 20.99;
// string
let empresa = 'Cap';
// templete string
let anoCriacao = 2019;
const nomeEmpresaAno = `Empresa ${empresa} - fundação ${anoCriacao}`;
// arrays
let notas = [8.5, 7, 8];
// tuple
let alunos = ['Ana', 10];
console.log(alunos[0]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
;
let corFundo = Cor.Verde;
// any
let algo = 4;
algo = 'teste';
// void
function alert() { }
;
// null e undefined
let u = undefined;
let n = null;
