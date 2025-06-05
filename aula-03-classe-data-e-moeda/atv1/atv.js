



//JOÃO VICTOR SINCARUK VIEIRA - DSM2 //

// 1)

class Heroi{
constructor(Nome, Vida, Velocidade, Forca){
    this.Nome = Nome;
    this.Vida = Vida;
    this.Velocidade = Velocidade;
    this.Forca = Forca;
}

correr(){
    return `está correndo!`
}

andar(){
    return `está andando!`
}
atacar(){
    return `está atacando!`
}
defender(){
    return `está defendendo!`
}


}

const HomemAranha = new Heroi()
HomemAranha.Nome = "Homem Aranha"
HomemAranha.Vida = 2000
HomemAranha.Velocidade = 3000
HomemAranha.Forca = 3500
HomemAranha.Teia = 1


console.log(`O ${HomemAranha.Nome} ${HomemAranha.correr()}`)

HomemAranha.SentidoAranha = function() {
    return " está sentido perigo!"
}

console.log(`O ${HomemAranha.Nome} ${HomemAranha.SentidoAranha()}`)

const SuperHomem = new Heroi()
SuperHomem.Nome = "Super Homem"
SuperHomem.Vida = 100000
SuperHomem.Velocidade = 10000
SuperHomem.Forca = 50000
SuperHomem.PodeVoar = 1

SuperHomem.VisaoCalor = function(){
    return "Está usando Visão de Calor"
}

console.log(`O ${SuperHomem.Nome} ${SuperHomem.VisaoCalor()}` )

const Batman = new Heroi()
Batman.Nome = "Batman"
Batman.Vida = 3000
Batman.Velocidade = 2500
Batman.Forca = 5000
Batman.Esconder = 1

Batman.Inverstigar = function(){
    return "Está investigando um crime"
}

console.log(`O ${Batman.Nome} ${Batman.Inverstigar()}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2)

const manipularData = () => {
    let dataAtual = new Date();
    
    let novaData = new Date(
        dataAtual.getFullYear() + 1, // Adiciona 1 ano
        dataAtual.getMonth() + 2, // Adiciona 2 meses
        dataAtual.getDate() + 3 // Adiciona 3 dias
    );
    
    let dia = String(novaData.getDate()).padStart(2, '0');
    let mes = String(novaData.getMonth() + 1).padStart(2, '0'); 
    let ano = novaData.getFullYear();
    
    console.log(`${dia}/${mes}/${ano}`);
};

manipularData();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3

const converterSalario = (salario) => {
    const taxaDolar = 0.176;
    const taxaEuro = 0.16;

    const salarioDolar = salario * taxaDolar;
    const salarioEuro = salario * taxaEuro;

    const formatarMoeda = (valor, moeda) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: moeda });
    };

    console.log(`Salário em reais: ${formatarMoeda(salario, 'BRL')}`);
    console.log(`Convertido para dólar: ${formatarMoeda(salarioDolar, 'USD')}`);
    console.log(`Convertido para euro: ${formatarMoeda(salarioEuro, 'EUR')}`);
};

converterSalario(5000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const formatarNome = (nome) => {
    const nomeMaiusculo = nome.toUpperCase();
    const nomeMinusculo = nome.toLowerCase();
    const quantidadeLetras = nome.length;

    console.log(`Nome em maiúsculas: ${nomeMaiusculo}`);
    console.log(`Nome em minúsculas: ${nomeMinusculo}`);
    console.log(`Quantidade de letras: ${quantidadeLetras}`);
};

formatarNome("João Victor");
