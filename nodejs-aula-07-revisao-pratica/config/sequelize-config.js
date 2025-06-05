import Sequelize from "sequelize";

const connetction = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "movies",
    timezone: "-03:00",
});
export default connetction