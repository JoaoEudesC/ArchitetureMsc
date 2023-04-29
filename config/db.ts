import config from "config"
import mongoose from "mongoose"




async function connect(){
    const MONGODB_URI = config.get<string> ("MONGODB_URI")
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Connection succesfull")
    } catch (error) {
        console.log("Não foi possivel conectar " + error)
        process.exit(1) //Caso a conexão não seja estabelecida ele não vai seguir adiante ele vai da stop no app
    }
}


export default connect;
