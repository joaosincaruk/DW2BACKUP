import express from "express"
import MoviesController from "./controllers/MoviesControllers.js"
import connetction from "./config/sequelize-config.js"

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false}))
app.use("/", MoviesController)

connetction.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")

}).catch((error)=>{
    console.log(error)
})

connetction.query(`CREATE DATABASE IF NOT EXISTS movies;`).then(()=>{
    console.log("O banco de dados está criado!")
}).catch(error => {
    console.log(error)
})

const port = 8080
app.listen(port, (error)=>{
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    } else { 
        console.log(`Servidor inciado em http://localhost:${port}`)
    }
})