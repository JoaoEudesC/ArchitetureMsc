import { serviceUser } from "../models/modelUser"
import jwt from "jsonwebtoken"


export const authService = {
    login: async (cpf: any): Promise<any> => {
        try {

        const user = await serviceUser.findOne({ cpf: cpf });
        if (!user) {
            return {
            message: "Usuário não encontrado",
            statusCode: 400,
            };
        }

        //Criação de token
        const SECRET = process.env.SECRET;
        if (!SECRET) {
            throw new Error("Secret was not defined");
        }
        const token = jwt.sign({}, SECRET, { expiresIn: "24h" });

        return {
                message: "Login realizado com sucesso!",
                statusCode: 200,
                data: {
                token,
                },
            };
        } catch (error) {
            console.error(error);
            return {
                message: "Erro na criação do token " + error,
                statusCode: 500,
            };
        }
    },
};
