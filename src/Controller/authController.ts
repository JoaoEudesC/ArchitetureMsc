import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  login: async (req: Request, res: Response): Promise<void> => {
    try {
      const { cpf } = req.headers;

      const authResult = await authService.login(cpf);

      res.status(authResult.statusCode).json({
        message: authResult.message,
        token: authResult.data,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        statusCode: 500,
        message: "Erro na criação do token " + error,
      });
    }
  },
};


//Repare que ao fazer um service posso acessar as propriedades passados nele nele acessando através de um objeto igual foi feito aqui, retornando a mensagem e o token




//Repare que ao fazer um service posso acessar as propriedades passados nele nele acessando através de um objeto igual foi feito aqui, retornando a mensagem e o token

