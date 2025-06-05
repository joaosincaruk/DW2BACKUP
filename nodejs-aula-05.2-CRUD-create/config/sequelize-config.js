// Importar biblioteca Sequelize

import  Sequelize  from "sequelize";

// Criando os dados de conexão com o banco de dados:
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    //Comentar a linha abaixo NA PRIMEIRA EXECUÇÃO DO PROJETO - Descomentar depois de ter criado o banco
    database: 'sistemaloja',
    timezone: "-03:00"
})

export default connection; 