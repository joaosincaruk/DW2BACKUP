// Importando o pacote do Express.js
const express = require("express");
// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// CONFIGURANDO A VIEW ENGINE - EJS
app.set("view engine", "ejs");

//CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'))


// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisão
// RES -> Trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA DE PERFIL
app.get("/perfil", (req, res) => {
  res.render("perfil");
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  // Coletando o parâmetro da rota
  const produto = req.params.produto

// Array com lista de produtos
const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']


  res.render("produtos", {
    // Enviando as variáveis para a página
    produto : produto,
    produtos: produtos
  });
});

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
