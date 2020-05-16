// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 20.99;

// string
let empresa: string = 'Cap';

// templete string
let anoCriacao: number = 2019;
const nomeEmpresaAno = `Empresa ${empresa} - fundação ${anoCriacao}`;

// arrays
let notas: number[] = [8.5, 7, 8];

// tuple
let alunos: [string, number] = ['Ana', 10];
console.log(alunos[0]);

// enum
enum Cor { Verde, Amarelo, Azul };
let corFundo: Cor = Cor.Verde;

// any
let algo: any = 4;
algo = 'teste';

// void
function alert():void{};

// null e undefined
let u: undefined = undefined;
let n: null = null;



