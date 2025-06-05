//Comentario em JS
/* comentario em bloco
...
*/

//Declaraçao de variaveis no JS
//CONST -  LET - VAR
//CONST nao muda valor, LET valor muda mas nao redeclara, VAR altera
//evitar o uso de var por segurança
//no escopo GLOBAL, const nao pode ser alterada

const nome = "João"; // precisa de valor inicial, por isso deu erro antes de declarar
let Nome; // permite iniciar a variavel vazia
//const nome = "Pedro" //Resulta em erro, pois nome ja foi declarado

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor

const message = "Hello, World! Iniciando estudos em JS";
console.log(message);

// typeof - esse comando exibe o tipo da variável

const estado = "SP"; // declaração com const sempre precisa ter um valor inicial
const idade = 18;
let endereco; // let nao precisa declarar valor no começo necessariamente

console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);

//o JS é uma linguagem de tipagem dinêmica e tipagem fraca

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES NO JAVASCRIPT //

function minhaFuncao() {}

console.log(typeof minhaFuncao);

//FUNÇÃO SIMPLES

function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

//FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro -> é um dado que a função recebe
// Argumento -> é um dado que é enviado para a função

function saudacao(nome) {
  // esse é o parametro, o que a função recebe
  console.log("Olá, bem vindo " + nome);

  //usando template string - usar crase
  console.log(`Olá, bem vindo ${nome}`);

  // ${} - placeholder - feito pra concatenar uma variavel numa string
}
saudacao("João"); // argumento, valor que estou enviando

// FUNÇÃO COM MAIS DE UM PARÂMETRO

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`a soma dos 2 numeros foi ${resultado}`);
}

let n1 = 6;
let n2 = 20;
soma(n1, n2);

// FUNÇÃO COM RETORNO

function Soma(n1, n2) {
  // retornar pra mim só o resultado
  return n1 + n2;
}
console.log(`A soma dos 2 numeros foi ${Soma(2, 6)}`);

// FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANONIMA

let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`o dobro do numero é ${dobro(15)}`);

// ARROW FUNCTION COM PARAMETRO UNICO

// FUNÇÃO FLECHA

const Dobro = x => { // com parametro unico posso excluir os parâmetros
    return x*2

}
console.log(`função dobro com Arrow Function. Resultado: ${dobro(20)}`)

// ARROW FUNCTION COM MAIS DE UM PARAMETRO

const calc = (num1, operador, num2) =>{
    return eval(`${num1} ${operador} ${num2}`)

}
console.log(`O resultado do calculo é ${calc(6, '*', 6)}.`)

// SIMPLIFICANDO ARROW FUNCTION COM APENAS 1 RETORNO

const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${Calc(5, '*', 5)}`)

//IIFE 
// FUNÇÂO IMEDIATA

const life = (function(){
    console.log("Estou sendo executada automaticamente sem chamar")

})()

// IIFE COM PARAMETRO
const start = (function(app){
    console.log(`Executando imediatamente o app ${app}`)
}
)("WhatsApp")

// git add 
// git commit -m  "@user"
// git push