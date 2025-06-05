import Sequelize from "sequelize";
import connetction from "../config/sequelize-config.js";

const Movie = connetction.define("movies", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

Movie.sync({ force: false})
export default Movie;