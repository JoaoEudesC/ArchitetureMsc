//Importação de módulos
import express from "express"

//Importação do router da aplicação
import router from "./router/UserRouter"





//Construção de classes para que eu consiga colocar o servidor a rodar com as informações que eu quero passar Como por exemplo o middleware para utilizar json e a chamada do router.
class app {
    server: any;

    constructor() {
      this.server = express();
      this.middlewares();
      this.router();
    }

    private middlewares() {
      this.server.use(express.json());
    }

    router() {
      this.server.use("/Users", router);
    }
  }




//Importação da ligação com o banco de dados
import connect from "../config/db";
connect()



//A porta que o servidor vai estar rodando
export default new app().server














