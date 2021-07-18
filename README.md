# API para lista de tarefas
Essa API utiliza NodeJS + Sequelize + Sqlite para criar o CRUD (Create, Read, Update e Delete) de uma aplicação para listagem de tarefas.

## Instalação do Express e Sequelize

```
$ npm init

$ npm install --save express

$ npm install -- save sequelize

$ npm install -D sequelize-cli

$ npm install --save sqlite3

$ npx sequelize init 
```

Diretórios:

* **config** - Configuração do banco de dados 
* **migrations** - Mudanças estruturais no banco de dados
* **models** - São referências com as tabelas do banco de dados
* **seeders** - Dados iniciais para o banco

## Criação de modelos e migrações 
Comandos Sequelize-cli:

```
$ npx sequelize-cli model:generate --name=Postagens --attributes post:string,likes:integer

$ npx sequelize-cli db:migrate
```