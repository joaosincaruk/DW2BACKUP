// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

// Arrays possuem metodos, por isso ele é entendido no JS como objeto

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos indices \n");

console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

console.log("Exibindo a lista atraves do FOR"); // quando temos listas muito grandes, exibir um item cada é inviável

for (let c in Produtos) {
  console.log(`${Number(c) + 1} - ${Produtos[c]}`); // c representa os indices, ele começa no 0 e percorre até o ultimo item da lista
} // Deixar o Number para converter o c em numero e o +1 pra começar a lista com 1

console.log("Exibindo a lista atraves do forEach");

Produtos.forEach(function (produto) {
  console.log(produto); // pra cada item da lista ele vai printar o produto
});

console.log("Exibindo a lista atraves do forEach Com os indices");

Produtos.forEach((produto, i) => {
  console.log(`${i + 1} - ${produto}`); // pra cada item da lista ele vai printar o produto
});

// metodo de manipulação de vetores 12/03/2024

let vetor = ["Laranja", "Maçã", "Banana"];
console.log(`Nosso vetor é o: ${vetor}`);
vetor[-1] = "Morango";
console.log(`Nosso vetor agora é o: ${vetor}`);

//metodo push: insere um novo elemento no FINAL do vetor

vetor.push("Abacaxi");

console.log(`agora é ${vetor}`);

// Metodo UNSHIFT - insere novo elemento no INICIO do vetor
vetor[0] = "Pera";
console.log(`vetor é ${vetor}`);
vetor.unshift("Laranja");
console.log(`Agora é ${vetor}`);

//Metodo LENGTH - Retorna o numero de elementos no vetor
// se eu crio um select no banco de dados e quero verificar se a lista esta vazia, uso para verificar se há elementos nesse vetor

let numeros = [6, 8, 2, 9, 3, 800, 200];
console.log(`Nossa lista de numeros é ${numeros}`);
console.log(`o numero de elementos do vetor é ${numeros.length}`);

//Metodo SORT - Ordenador de vetor

console.log(`o primeiro elemento da lista de frutas é ${vetor[0]}`);

vetor.sort(); //ordenei aqui
console.log(`Agora o primeiro elemento será: ${vetor[0]}`);
console.log(`Nossa lista ordenada será: ${vetor}`);

// Ordenador de numeros com SORT
console.log(`Nossa lista de numeros é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de numeros ordenadas é ${numeros}`);

//forma correta de usar SORT em numeros para ler as casas corretas:

//ordenando de forma CRESCENTE

console.log(numeros.sort((a, b) => a - b)); // vai verificar se o numero 1 é menor que o 2, se for menor vai jogando pro inicio da lista.

//ordenando de forma DECRESCENTE

console.log(numeros.sort((a, b) => b - a)); // vai verificar se o numero 1 é menor que o 2, se for menor vai jogando pro inicio da lista.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS - NÃO DERIVAM DE CLASSES

// objetos: agrupam valores que possuem propriedades e funções, podendo fazer uma analogia aos objetos do mundo real. Um carro possui
// cor e marca e tambem realiza ações como acelerar e frear

// para declarar o objeto, sintaxe é parecida com a que usamos para declarar arrays, porem usamos { } no lugar de [ ]

//Métodos (ações)
// Lado esquerdo: chaves / lado direito: valores

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freandooooooo ETA PORRA FREIA CARALHO!!!!!!!!!!!!!!!!!");
  },
};



console.log(`O modelo do carro é um ${carro.modelo} G5 1.0 com motor EA113`)
console.log(`A cor dessa bomba abominável de 4 rodas é ${carro.cor}`)
carro.acelerar()
carro.frear()


/////////////////////////////////////////////////////////////////////

const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC bomba que nao roda DOOM"
    
};

console.log(produto);

console.log(`O ${produto.nome} da marca ${produto.marca} custa a bagatela de ${produto.preco}. ${produto.descricao}`)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//ARRAY DE OBJETOS 
const listaProdutos = [{
    nome: "computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
},

{
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Otima velocidade de processamento"
},

{
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Caro, nao compensa o gasto"
}
] 
console.log()
// EXIBINDO o ARRAY de OBJETOS com forEach:

listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Marca: ${produto.marca}`)
    console.log(`Preço: ${produto.preco}`)
    console.log(`Descrição: ${produto.descricao}`)
    console.log()
    
})

//console.tabela
console.table(listaProdutos) 