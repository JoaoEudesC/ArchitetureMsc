//Importação do nosso model
import {serviceUser} from "../models/modelUser"
import { transporterGmail } from "../../config/mailler"
import path from "path"
import { Request } from 'express';
import fs from "fs"













//Função getAll que vai ser passada para o usuário, ela não recebe nada de parâmetro, pq ela so vai listar todos os usuários e nºao fazer nada especifico(ele vai pedir ao model uma solicitação de consulta no banco de dados) ou seja , o service vai fazer uma solicitação para o e meu model(Que no caso é o meu schema).
export const getUserService = async () => {
    try {
        const users = await serviceUser.find()
        if(!users){
            return {
                statusCode:400,
                message:"Não foi possivel localizar os usuários"
            }
        }
        return users
    } catch (error) {
        throw new Error("Erro na sua requisição " + error)
    }


}

//Função para cadastrar um usuário no banco de dados
import { ICreateUser } from "../interfaces/IcreateUser"
export const createUserService = async ({name, Email , cpf  }:ICreateUser) =>{
    try {
        const newUser = await new serviceUser({name:name , cpf:cpf , Email:Email })
        
        await newUser.save();

        return newUser
    } catch (error) {
        throw new Error("Erro na sua requisição " + error)
    }

}


//Rota que vai deletar um usuário com base no seu cpf

export const deleteUserService = async (cpf:any) =>{
    try {

        const UserDeleted = await serviceUser.findOneAndDelete({cpf:cpf})
        if(!UserDeleted){
            return {
                statusCode:400,
                message:"User Not Found"
            }
        }
        return UserDeleted


    } catch (error) {
        throw new Error("Erro na sua requisição " + error)
    }
}


//Rota que vai dar update No email ou no nome do usuário
import { IUpdatedUser } from "../interfaces/IupdateUser"
export const updateUserService = async ({Email , name , cpf}:IUpdatedUser) =>{
    try {
        const userCpf = await serviceUser.findOne({cpf})
        if(!userCpf){
            return {
                statusCode:400,
                message:"user Not Found"
            }
        }
        
        const userUpdated = await serviceUser.findOneAndUpdate({cpf: cpf}, {Email:Email , name:name}, {new: true}) //Esse new:true é exatamente , o que vai certificar de que , o antigo documento seja substituido pelo novo, pasei o cpf com chaves distintas, separada do email e name , para avisar que eu vou pesquisar pelo cp
        console.log('Obejto atualizado: ', userUpdated)
        return userUpdated
    } catch (error) {
        throw new Error("Erro na sua requisição " + error)
    }
}


//Rota que vai pegar cada usuário baseado no seu cpf

export const getByCpf = async(cpf:any) =>{
    try {
        const user = await serviceUser.findOne({cpf:cpf})
        if(!user){
            return {
                statusCode:400,
                message:"User not found"
            }
        }
        return user
    } catch (error) {
        throw new Error("Erro ao achar usuário " + error)
    }
}


//Função de upload de avatar
const uploadsFolder = path.resolve(__dirname, '../../uploads');
export const UploadAvatar = async (req: Request, name: string) => {
    try {
        const user = await serviceUser.findOne({ name });
        if (!user) {
            return {
                message:"Nome não correto",
                statusCode:401
            }
        }

        const avatar = req.file;
        if (typeof avatar === "undefined") {
            return {
                message:"Avatar is not defined",
                statusCode:401
            }
        }

        if (user.avatar) {
            const previousAvatar = path.join(uploadsFolder , user.avatar);
            await fs.unlink(previousAvatar, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Arquivo ${previousAvatar} excluído com sucesso`);
                }
            });
        }

        user.avatar = avatar.filename;
        await user.save();

        return {
            message:"Avatar adicionado com sucesso",
            statusCode:200
        };
    } catch (error) {
        throw new Error("Erro no seu serviço " + error);
        
    }
}

