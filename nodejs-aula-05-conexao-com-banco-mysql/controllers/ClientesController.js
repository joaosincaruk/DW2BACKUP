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


export default router;