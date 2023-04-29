import { Router } from "express";
const router = Router()




//Importação de middlewares de validação
import { CheckingCpfExistance , CheckingCpf } from "../middlewares/cpfExistsMilddleware";
import {tokenVerification} from "../middlewares/AuthenticationMilddleware"

//Importação de authController
import { authController } from "../Controller/authController";

//Importação do controlller
import {userController} from "../Controller/UserController";



//Rota de teste
router.get("/teste" , userController.teste)

//Rota para listar todos os usuários do banco de dados
router.get("/getAll" , userController.getAll)

//Rota para cadastrar um usuário no banco de dados
router.post("/createUser"   , CheckingCpf, userController.createUser)

//Rota que vai deletar um usuário com base no seu cpf
router.delete("/deleteUser" ,CheckingCpfExistance  ,  userController.deleteUser)

//Rota que vai permitir update do nome e do email do usuário
router.patch("/updateUser" , CheckingCpfExistance , userController.updateUser)

//Rota que vai pegar cada usuário pelo seu cpf
router.get("/getByCpf" , CheckingCpfExistance , userController.getByCpf)

//Rota de login
router.post("/login"  ,authController.login )


//Rota em que o usuário fará um upload de avatar
import { upload } from "../../config/upload";
router.patch("/upload" , tokenVerification , upload.single('avatar'), userController.uploadAvatar )



















//Repare que nessa rota de login eu não precisei utilizar o middleawre de cpf existente, pq eu fiz essa validação já na minha função "autenticateUser" sendo assim , ele já vai veriifcar se aquele "cpf" está cadastrado no meu banco de dados.






















export default router
