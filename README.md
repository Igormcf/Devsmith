# Trybesmith

## Sobre o projeto:

Neste projeto, criei uma loja de itens medievais, no formato de uma `API`, utilizando `Typescript`. Desenvolvi todas as camadas da aplicação `(Models, Service e Controllers)`, sendo possível, através dos `endpoints`, realizar um `CRUD` com o banco de dados no `MySQL`. Ainda, utilizei as bibliotecas `Joi` e `Json Web Token (JWT)` para as devidas validações e autenticação com a chave `token`, respectivamente.

## Orientações para a Execução:

<details>
  <summary><strong>Com Docker</strong></summary><br />
  
  - Execute o serviço `node` com o comando `docker-compose up -d`, para inicializar o container `trybesmith` e outro chamado `trybesmith_db`.
  - Rode o comando `docker exec -it trybesmith bash` para acessar o terminal interativo do container.
  - Instale as dependências com `npm install` .
</details>

<details>
  <summary><strong>Localmente</strong></summary><br />
  
  - Necessário o `node` instalado.
  - Instale as dependências com `npm install`.
</details>
