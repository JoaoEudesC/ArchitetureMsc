import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()





export const tokenVerification = async (req: Request & { user?: { id?: string } }, res: Response, next: NextFunction) => {
    const tokenHeader = req.headers["authorization"]
    const token = tokenHeader && tokenHeader.split(" ")[1]

    if (!tokenHeader) {
      return res.status(400).json({
        statusCode: 400,
        message: "Token missing"
      })
    }

    if (!token) {
      return res.status(401).json({
        statusCode: 401,
        message: "Não autorizado"
      })
    }

    try {
      const SECRET = process.env.SECRET
      if (!SECRET) {
        throw new Error("Secrete was not defined")
      }

      // Verify the token and extract the user ID
       jwt.verify(token, SECRET)

      // Fetch the user from your data source using the user ID

      next()
    } catch (error) {
      res.status(500).json({
        statusCode: 500,
        message: "Token inválido " + error
      })
    }
  }



//Perceba nessa nova maneira de verificar o token do usuário , já que é para upload e não login é melhor colocando o id payload do usuário no token, para que o usuário só precise passar o token para executar o upload. não faz sentido o usuário para fazer um upload em sua conta que já foi cadastrada e está logada , ter que passar uma credencial de novo, a não ser que seja pra fazer login.
//Sendo assim o melhor é enviar o id do usuário junto com a verificação do token, pq é uma chave primária única , mas tbm poderia ser o cpf ou qualquer outra chave unica que a gente possui , neste caso eu escolhi o id.
//Por conta deste erro eu tive que colocar neste caso o id do usuário como opcional, mas eu tbm poderia passar uma função englobando o findById e colocando ele como obrigatório, resolveria tbm., mas optei pela opção que escreve menos código.
