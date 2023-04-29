### **\*\*\*\***\*\*\***\*\*\*\*** Aqui neste modulo nos vamos aprender exatamente como utilizar os conceitos de SOLID junto com o conceito de clear ARCHITETURE do uncle bob.

## 1 - Aqui neste arquivo a gente está criando exatamente como seria uma arquitetura msc na prática, ainda não vai ser implementado o conxeito de solid, mas vai ser mais tarde.

## 2 - O service vai funcionar justamente para que eu coloque a função de relacionamento com banco de dados, por exemplo uma função de post de usuários , get e update , é o service que vai ser responsável por se relacionar com o banco de dados, sendo assim , o controller vai ser responsavel por receber esta função e enviar diretamente para o router , realizando a requisição com o res e o request.

## 3 - se futuramente eu quiser alterar o tipo de banco de dados , so será necessário mexer no service, pois o controller, ja vai estar recebendo aquela função, sendo assim é muito mais fácil.

## 4 - Instalação de uma bibilioteca chamada => sucrase (é justamente se voce estiver fazendo um projeto em javascript puro, ele vai mandar utilizar o require, mas se voce prefere utilizar a sintaxe nova do typescript , que é o import no js, utilize esta bibilioteca), não preciso neste caso pq já estou utilizando typescript

## 5 - preciso adicionar um script do nodemon, para que ele possa utilizar esta funcionalidade do export e import nele(nodemon.json){"execMap":{"js":"node -r sucrase/register"}}

## 6 - Aqui neste app e no index.ts e server.ts a gente está utilizando uma adição de classe, porque é orientada a objetos.

## 7 - Configuração do nosso ESLINT, Prettier e EditorConfig => Intalar as extensoes esLint e Prettier e EditorConfig (npm i eslint => npx eslint --init) e responser as perguntas relacionadas as configurações do seu projeto para gerar o arquivo eslint no formato json.

## 8 - Perceba que este arquivo eslintrc.json, foi dado na rocketSeat e é uma bibilioteca em que a gente pode definir algumas regras que a nossa aplicação deve seguir, sendo assim , eu coloquei isso em rules => "class-methods-use-this":"off","camelcase": "off" (Eu estou desabilitando o this , para que e não precise utilizar, quando eu estiver trabalhando com classes) , eu obriguei a desabilitação do camelCase

## 9 - .editorConfig => Clico com o botão direito e seleciono a opção generate editor config.(para ele gerar o arquivo da bibilioteca que a gente baixou) => trim_trailing_whitespace = true

insert_final_newline = true coloquei estes dois em true (Para que ele coloque um ponto e virgula no final do projeto e inserir uma nova linha , ou seja, tirar o espaço em branco do projeto.)

## 10 - ligando o eslint com o prettier => (npm i prettier , npm i prettier eslint-config-prettier , npm i prettier eslint-plugin-prettier)

## 11 - Temos que gerar um arquivo que se chama .prettierrc (e passo algumas configurações neste arquivo como a utilização de aspas simples e )

## 12 - a partir de agora treinar fazer as apis com orientação a objetos através de classes.

###### **\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\*** LIGAÇÃO DA APLICAÇÃO COM O BANCO DE DADOS

## 1 - Existe uma extensão chamda mongodb => Essa extensão permite que a gente ligue a nossa aplicação com o mongodb atlas e condiga ver as nossas criações de base de dados e documentos

## 2 - Então perceba que no meu service eu faço as validações e tudo , e nos middlewares tbm , o meu controller so tem que receber a função e montar a requisição.

## +++++++++++++++ Maneiras de trabalhar com o throw newError ou utilizar o return do obejto no service para retornar o status Code e a mensagem necessária:

## 1 - A resposta da requisição voce retorna controller , porém a excessão que é feita no service caso não encontro o usuário por exemplo, codigo "400", voce pode criar um middleware de error igual fizemos no "ignite" e substituir o throw por essa sua classe , mas tbm é possivel fazer igual nos fizemos neste projeto que seria o retorno de um obejto com essas determinadas informações como , se não achar o usuário (return no service, um obejto com o statusCode e a message) estes metodos possuem mais efeito na utilização da arquitetura "limpa" ou na arquitetura "msc" , na mvc , como a função de logica de negocio é feito direto no controller não tem necessidade de fazer isso , basta utilizar o req e o res diretamente lá , ja que as validações e excessoes são feitas diretamente no controllador.

## 2 - Repare que temos a função que cria o token que fica no "auth.service.ts" e que fica no authController.ts, essas duas partes são responsaveis somente por criar esse token, se o usuário for cadastrado no banco ou seja , ele vai passar uma credencial que ele passou no cadastro, se bater, ele vai ter esse token gerado em seguida ele vai poder acessar rotas privadas com esse token, que são rotas que são passadas o middleware de veirificação de token , o usuário vai passar esse token, e poderá acessar as funcionalidades dessa rota privada.

## 3 - Consegui concluir a rota de upload mas fazendo ela direto no controller , o proximo passo vai ser dividir esse codigo em service e controller

## 4 - é preciso verificar se o espaço no "split" do token bearer no middlware está correto , por isso é so um espaço assim " ", se der dois espaçoes ele dar erro.

## Separação de responsabilidades:

## 1 - O último passo feito foi a separação das responsabilidades, separei o arquivo de upload.ts que estava com a função inteira no router , a logica e a requisição e a configuração do multer, separei o multer em um arquivo separado e dividi essa função entre controller , service , router para respeitar a arquitetura do projetp.

## 2 - Prestar muita ataenção no caminho das pastas quando for utilizar a função unlink , pq no config

## 3 - Um boa pratica é colocar throw new error no catch , ou retornar um objeto com uma mensagem , para que caso aconteça algum erro mostre na resposta da requisição e não somente no console.

## 4 - Boa prática, colocar tanto o controller quanto o service dentro de um "try" , "catch" para ter acesso a informações de erro melhor , para caso aconteça um erro voce ter acesso melhor , se for no controller enviei o erro com um res , se for no service, utilize um throw new error ou então retorne um obejeto com as informações que voce deseja enviar como erro no catch.
