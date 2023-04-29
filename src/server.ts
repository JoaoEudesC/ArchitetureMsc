import dotenv from "dotenv"
dotenv.config()
import app from "./index"

const PORT = process.env.PORT




app.listen(PORT , () =>{
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
})




