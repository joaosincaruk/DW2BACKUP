//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express"); // importação de modulo - require == nativo do node / import do js

// carregando mmetodo principal do express
const app = express(); // iniciando o express

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// CONFIGURANDO A VIEW ENGINE EJS 
app.set('view engine', 'ejs')

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
//metodo .get cria uma rota na aplicação

app.get("/", (req, res) => {
    res.send("<h1>Bem-Vindo ao meu primeiro site em Node.js!</h1> <br> <p>Iniciando estudos com Node.js!</p>");
});

// ROTA PERFIL
// :nome -> parâmetro obrigatorio
// :nome? -> parâmetro opcional 

app.get("/perfil/:nome?", (req, res) => {
    const nome = req.params.nome //coletando o parametro da rota e gravando na variável // res.send("<h1> Perfil do Usuário </h1>")
    if(nome){
        res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`)
    }else{
        res.send("<h2>Faça login para acessar o seu perfil!</h2>")
    }
    


});

// ROTA PRODUTOS
app.get("/produtos", (req, res) => {
    res.render("produtos")
})


//rota raiz só deixar a barra, se fosse produtos ficaria "/produtos"
// req -> trata a requisição
// res -> trata a resposta
















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Iniciando o servidor da aplicação
// Porta 8080

// O método Listen do Express inicia um servidor
app.listen(8080, function (error) {
  //parametro: porta; função para verificar se deu erro
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
}); //parametro: porta; função para verificar se deu erro
