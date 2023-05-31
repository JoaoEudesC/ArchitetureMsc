//Importação de módulos
import express from "express"
export const app = express()

//Importação do router da aplicação
import router from "./router/UserRouter"
app.use(express.json())





//Construção de classes para que eu consiga colocar o servidor a rodar com as informações que eu quero passar Como por exemplo o middleware para utilizar json e a chamada do router.





//Importação da ligação com o banco de dados
import connect from "../config/db";
connect()
app.use("/Users" ,router )



//A porta que o servidor vai estar rodando















