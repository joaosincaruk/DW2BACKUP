import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//Criando o Model(tabela no banco)
const Cliente = connection.define('clientes', {
    // Colunas da tabela
    nome: {
        type: Sequelize.STRING, //tipo do dado
        allowNull: false //se permite vazio
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Cliente.sync({force: false}) // Criando a tabela somente se ainda não existir 
export default Cliente