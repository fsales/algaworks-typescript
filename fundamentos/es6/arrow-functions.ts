const precos = [10, 23, 19, 40, 50];

// sem arrow functions
const valorEmReias = precos.map(function (preco) {
  return `R$ ${preco} ,00`
});
console.log(valorEmReias);

// com arrow functions
const precoEmReaisA = precos.map(preco => { return `R$ ${preco} ,00`; });
console.log(precoEmReaisA);

const precoEmReaisA2 = precos.map(preco => `R$ ${preco} ,00`);
console.log(precoEmReaisA2);

const acimaDeVinte = precos.filter(preco => preco > 20).map(preco => `R$ ${preco} ,00`);
console.log(acimaDeVinte);
