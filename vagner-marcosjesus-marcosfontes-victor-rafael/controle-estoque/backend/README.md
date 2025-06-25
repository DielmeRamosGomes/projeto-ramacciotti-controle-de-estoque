# Controle de Estoque - Backend

Este é o backend do projeto Controle de Estoque, desenvolvido com Node.js e Express. O sistema é responsável por gerenciar o controle de estoque de uma loja online, permitindo a manipulação de produtos, usuários e vendedores.

## Estrutura do Projeto

- **src/**: Contém todo o código fonte do backend.
  - **controllers/**: Controladores que gerenciam as requisições e respostas da API.
    - `produtoController.js`: Funções para manipulação de produtos.
    - `usuarioController.js`: Funções para manipulação de usuários.
    - `vendedorController.js`: Funções para manipulação de vendedores.
  - **models/**: Modelos que definem a estrutura dos dados.
    - `produto.js`: Modelo para produtos.
    - `usuario.js`: Modelo para usuários.
    - `vendedor.js`: Modelo para vendedores.
  - **routes/**: Define as rotas da API.
    - `produtoRoutes.js`: Rotas para produtos.
    - `usuarioRoutes.js`: Rotas para usuários.
    - `vendedorRoutes.js`: Rotas para vendedores.
  - **database/**: Configuração da conexão com o banco de dados.
    - `connection.js`: Estabelece a conexão com o banco de dados relacional (loja_online).
  - `app.js`: Inicializa a aplicação Express e configura middleware.
  - `server.js`: Inicia o servidor e escuta requisições.

## Funcionalidades

- Cadastro de usuários e login.
- Cadastro, atualização e listagem de produtos.
- Marcação de produtos como inativos.
- Cadastro, listagem e atualização de vendedores.
- Listagem de produtos por data de cadastro e por vendedor.

## Como Executar

1. Clone o repositório.
2. Navegue até a pasta `backend`.
3. Instale as dependências com `npm install`.
4. Inicie o servidor com `npm start`.

## Dependências

- Express
- Mongoose (ou outro ORM/ODM para o banco de dados)
- Body-parser
- Cors

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License.