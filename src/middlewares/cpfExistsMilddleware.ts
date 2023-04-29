import {serviceUser} from "../models/modelUser";
import { Request , Response , NextFunction } from "express";


//Middleware para não deixar cadastrar dois usuários com o mesmo "cpf"
export const CheckingCpf = async (req:Request , res:Response , next:NextFunction) =>{
    const checkingExistingCpf = await serviceUser.findOne({cpf:req.body.cpf})

    if(checkingExistingCpf){
        res.status(422).json({
            statusCode:422,
            message:"Este cpf ja existe"
        })
    }
    else{
        next()
    }
}


//Middleware para verificar se o cpf existe no banco de dados
export const CheckingCpfExistance = async (req:Request , res:Response , next:NextFunction) =>{
    const checkingExistingCpf = await serviceUser.findOne({cpf:req.headers.cpf})

    if(!checkingExistingCpf){
        res.status(400).json({
            statusCode:400,
            message:"User not found"
        })
    }
    else{
        next()
    }
}


export default {CheckingCpf , CheckingCpfExistance}
