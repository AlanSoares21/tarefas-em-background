# tarefas-em-background

***Atividade desenvolvida durante um Lab do bootcamp Desenvolvimento Node.js da Digital Inovation One***

Foi construído um WebService simples que recebe requisições REST e utiliza um sistema assíncrono de fila para realizar o envio de emails aos usuários que se cadastraram.
  
  O projeto foi originalmente criado pelo instrutor Roberto Alves -> [https://github.com/robertosousa1/](https://github.com/robertosousa1/) 

## Foram utilizados

 - Node.js 
 - Redis Cache (serviço Azure) 
 - bull

## Executando o projeto localmente
Execute o comando `npm install` para instalar as dependências necessárias.
Crie um arquivo .env e preencha ele com as seguintes variáveis de ambiente

    PORT=8080
    
    MAIL_HOST=seuhostemail
    MAIL_PORT=suaportemail
    MAIL_USER=seuuseremail
    MAIL_PASS=suasenhaemail
    
    REDIS_HOST=suaurlhostredis
    REDIS_PORT=suaportadoredis
    REDIS_PASSWORD=suachavedeacesso 
Feito isso, abra dois terminais e execute os seguintes comandos

    npm run start
    npm run queue

Com o servidor corretamente inicializado podemos realizar uma requisição post na url `localhost:8080/users`, passe o seguinte objeto no corpo da requisição:

    {
    	"name":"Um Usuario Qualquer",
    	"email":"algum_email_qualquer@email.com"
    }
Uma mensagem de boas vindas será enviada para o endereço de email especificado no corpo da requisição.