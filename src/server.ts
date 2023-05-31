import dotenv from "dotenv"
dotenv.config()
import { app } from "."
import express from "express"
app.use(express.json())

const PORT = process.env.PORT




app.listen(PORT , () =>{
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
})




