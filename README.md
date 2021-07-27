## Um crud de api em Node.js

#### Dependências usadas 

- npm install express

- npm install sequelize

- npm install sequelize-cli -d

- npm install mysql2

- npm install nodemon

  

#### Rotas mapeadas

##### Filmes

GET          [http://localhost:8080/filmes] - Listar todos os filmes

POST       [http://localhost:8080/filmes] - Salvar um filme

PUT         [http://localhost:8080/filmes/'id'] -  Alterar um filme ('id' é o parâmetro a ser passado na url)

DELETE   [http://localhost:8080/filmes/'id'] - Remove um filme ('id' é o parâmetro a ser passado na url) 

GET         [http://localhost:8080/filmes/'id'/expectadores] - Exibe a quantidade de expectadores que viram o filme do id informado



##### Expectadores

GET          [http://localhost:8080/expectadores] - Listar todos os expectadores

POST       [http://localhost:8080/expectadores] - Salvar um expectador

PUT         [http://localhost:8080/expectadores/'id'] -  Alterar um expectador ('id' é o parâmetro a ser passado na url)

DELETE   [http://localhost:8080/expectadores/'id'] - Remove um expectador ('id' é o parâmetro a ser passado na url) 

GET         [http://localhost:8080/expectadores/'id'/filmes] - Exibe a quantidade de filmes que um expectador do id informado viu

PUT         [http://localhost:8080/expectadores/'id'/filmes/'id'] - Marca que o filme do id informado foi visto pelo expectador
