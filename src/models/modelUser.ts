import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        
        name:{
            type:String,
            required: true
        },
        cpf:{
            type:String,
            required:true,
            
        },
        Email:{
            type: String,
            required: true,
            
        },
        avatar:{
            type:String,
            required:false
        }
    },
    {timestamps: true}
)



export const serviceUser = mongoose.model("services" , userSchema)