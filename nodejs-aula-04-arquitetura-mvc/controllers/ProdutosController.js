import express from "express"
const router = express.Router()
// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
    // Coletando o parâmetro da rota
  
  // Array com lista de produtos
  const produtos = [
    {nome: "Celular Motorola E22", Preço: 1200, categoria: "Eletroportateis"},
    {nome: "Tablet Samsung", Preço: 900, categoria: "Eletrônicos"},
    {nome: "Notebook Lenovo", Preço: 3200, categoria: "Computadores"},
    {nome: "Fone Bluetooth", Preço: 150, categoria: "Periféricos"},
  ];
  
  
    res.render("produtos", {
      // Enviando as variáveis para a página
      produtos: produtos,
    });
  });

  // Exportando o módulo
export default router; 
  