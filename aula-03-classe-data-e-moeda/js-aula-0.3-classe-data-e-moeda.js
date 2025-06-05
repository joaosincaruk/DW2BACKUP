//constructor: fabrica da classe - dizer quais os atributos que os objetos que partem dessa classe vão ter

// CLASSE - Molde
//Objetos - herdam características dessa classe

//
// nome de classe iniciar com letra maiuscula (boa pratica)
class Carro {
  //atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //metodos
  buzinar() {
    return "Beep! Beep!";
  }
}


// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}`)

// Instância carroEsportivo
const carroEsportivo = new Carro()
carroEsportivo.marca = "Volkswagen"
carroEsportivo.modelo = "Voyage 1.0"
carroEsportivo.ano = "2010"
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}`)

//adicionando um novo atributo
carroEsportivo.corNeon = "Azul"

//adicionando um novo método
carroEsportivo.turbo = function(){
    return "Vruuuuuuuuuuuuuuuuummmmmm - queimou a junta do cabeçote"
}

console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)

//////////////////////////////////////////// MANIPULANDO DATAS NO JAVASCRITP /////////////////////////////////////////////

// Date(): Classe nativa do JS

const datatual = new Date() // objeto datatual herda todos os comandos da classe date
console.log(typeof(datatual))

//Pegando o dia atual 
const dia = datatual.getDate()
console.log(`Hoje é dia ${dia}`)  

//Pegando o mes atual
const mes = datatual.getMonth()+1
console.log(`Estamos no mes ${mes}`)

//Pegando o ano atual
const ano = datatual.getFullYear()
console.log(`Estamos no ano ${ano}`)


//ADICIONANDO MESES, DIAS E ANOS NA DATA ATUAL

//ADICIONAR 10 DIAS NA DATA ATUAL
datatual.setDate(datatual.getDate() +10)
console.log(`daqui 10 dias será ${datatual.getDate()} `)


//ADICIONAR 3 MESES A DATA ATUAL
datatual.setMonth(datatual.getMonth()+3)
console.log(`Daqui 3 meses será mês ${datatual.getMonth()+1}`)

//ADICIONAR 2 ANOS A DATA ATUAL

datatual.setFullYear(datatual.getFullYear()+2)
console.log(`Daqui a 2 anos, estaremos em ${datatual.getFullYear()}`)



///////////////////// MANIPULAÇÃO DE MOEDA //////////////////////


let salario = 2500.30 
console.log(salario)

//mostrando casas decimais: 
console.log(salario.toFixed(2))

//ocultando as casas decimais
console.log(salario.toFixed(0))

//alterando marcador da casa decimal
console.log(salario.toFixed(2).replace('.', ','))

//Formatação de moedas
//Mostrando o salario em BRL (R$)

console.log(salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))


//Mostrando o salario em DOLAR (USD)
console.log(salario.toLocaleString("en", {style: "currency", currency: "USD"}))

//CONVERTENDO REAL PRA DOLAR
const salariodolar = salario * 0.176

console.log(salariodolar.toLocaleString("en", {style: "currency", currency: "USD"}))



console.log(salario.toLocaleString("pt-br", {style: "currency", currency: "EUR"}))


/////////////////////////////  FORMATAÇÃO DE STRING  ////////////////////////////


const nome = "João Victor"

//ALTERNANDO PARA MAIUSCULA
console.log(nome.toUpperCase())

//ALTERNANDO PARA MINUSCULA
console.log(nome.toLowerCase())

//CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)

//REMOVENDO ESPAÇOS 

const novonome = nome.replace(/\s/g, "")
console.log(novonome)
console.log(novonome.length)