import { Request, Response } from "express"
import { getUserService, createUserService, deleteUserService , updateUserService ,getByCpf, UploadAvatar  } from "../services/usuario.service"






export const userController = {
    //Rota de teste
    teste:(req:Request , res:Response):void =>{
        const {name} = req.body
        res.status(200).json({
            message:"Teste realizado com sucesso",
            name:name
        })
    },

    //Rota para pegar todos os usuários do banco de dados
    getAll: async (req:Request , res:Response):Promise<void> =>{ //OBS - Todas as funções assicronas não podem receber void, elas devem receber a tipagem Promise<void>, e essa função ela vai vir la do service agora, para dizer se eu posso realizar esta consulta do banco de dados ou não e etc...
        try {
            const user = await getUserService()
            res.status(200).json({
            message:"Todos os usuarios listados",
            data:user
        })
        } catch (error) {
            res.status(500).json({
                message:"Erro na sua requisição " + error,
                statusCode:500
            })
        }


    },

    //Rota para criar um usuário no banco de dados
    createUser: async (req:Request , res:Response):Promise<void> =>{
        try {
            const {name , cpf , Email} = req.body
        const userCreated = await createUserService({name , Email , cpf })

        res.status(201).json({
            message:"Usuário criado com sucesso",
            Data:userCreated
        })
        } catch (error) {
            res.status(500).json({
                message:"Erro na sua requisição " + error,
                statusCode:500
            })
        }
    },

    //Rota que deleta o usuário com base no seu cpf
    deleteUser:async(req:Request , res:Response):Promise<void> =>{
        try {
            const cpf = req.headers.cpf
            const userDeleted = await deleteUserService(cpf)
            res.status(200).json({
            message:"Usuário deletado com sucesso",
            statusCode:200,
            data:userDeleted
        })
        } catch (error) {
            res.status(500).json({
                message:"Erro na sua requisição" + error,
                statusCode:500
            })
        }
    },

    //Rota que vai dar update no usuário, em seu nome ou email
    updateUser:async ( req:Request , res:Response):Promise<void> =>{
       try {
        const cpfUser = req.headers.cpf
        const {name , Email} = req.body


        const updatedUser = await updateUserService({Email:Email , name:name , cpf:cpfUser})
        console.log(`Objeto recebido pelo controlador ` , updatedUser)
        res.status(200).json({
            message:"Usuário atualizado com sucesso",
            statusCode:200,
            data:updatedUser


        })
       } catch (error) {
        res.status(500).json({
            message:"Erro na sua requisição" + error,
            statusCode:500
        })
       }
        
    },

    //Rota que vai pegar cada usuário pelo seu cpf
    getByCpf:async (req:Request , res:Response):Promise<void> =>{
        try {
            const cpfUser = req.headers.cpf
            const user = await getByCpf(cpfUser)
            res.status(200).json({
            message:"Usuário encontrado",
            statusCode:200,
            data:user
        })
        } catch (error) {
            res.status(500).json({
                message:"Erro na sua requisição" + error,
                statusCode:500
            })
        }
    },

    //Rota que permitirá o upload de avatar
    uploadAvatar:async (req:Request , res:Response):Promise<void> =>{
        try {
            const name = req.headers.name as string;
            const result = await UploadAvatar(req, name);
            res.status(200).json({result})
        } catch (error) {
            console.log("Erro no seu serviço " + error);
            res.status(500).json({
                message:"Erro no seu serviço " + error,
                statusCide:500
            });
        }
    }




};








