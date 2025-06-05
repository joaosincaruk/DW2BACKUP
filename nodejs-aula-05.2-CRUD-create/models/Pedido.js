import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define('pedidos', {
    numero: {
          type: Sequelize.INTEGER, //tipo do dado
          allowNull: false //se permite vazio
      },
  
    valor:{
          type: Sequelize.DOUBLE,
          allowNull: false
      },
})

Pedido.sync({force: false})

export default Pedido