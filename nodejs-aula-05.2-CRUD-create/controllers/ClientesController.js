import express from "express";
const router = express.Router();

//Importando o Model de CLiente
import Cliente from "../models/Cliente.js"

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes)=>{
    res.render("clientes", {
      clientes: clientes,
    })
  })
  .catch((error)=>{
    console.log(error)
  })
})
    //Promisse: sempre quando estiver manipulando banco de dados



//ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res)=>{
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  //Enviando dados para o banco
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(()=>{
    console.log(`Realizado o cadastro: ${nome} - ${cpf} - ${endereco}.`)
    res.redirect("/clientes")
  }).catch(error =>{
    console.log(error);
  })

})

//ROTA DE EXCLUSÃO DE CLIENTES
router.get("/clientes/delete/:id", (req, res)=>{ //ele precisa da id para excluir, o get para capturar o cliente que vamos apagar
  const id = req.params.id //coletando o parametro id da rota
  Cliente.destroy({
    where:{
      id: id 
    }
  }).then(()=>{
    console.log(`Cliente com a ID: ${id} excluido com sucesso!`)
    res.redirect("/clientes")
  }).catch(error =>{
    console.log(error)
  })
})




export default router;