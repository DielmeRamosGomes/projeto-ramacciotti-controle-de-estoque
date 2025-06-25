# Controle de Estoque

Este projeto é um sistema de controle de estoque para uma loja online, desenvolvido com Node.js no backend e React no frontend. O objetivo é gerenciar produtos, usuários e vendedores de forma eficiente.

## Estrutura do Projeto

O projeto é dividido em duas partes principais: **backend** e **frontend**.

### Backend

O backend é responsável por gerenciar a lógica de negócios e a interação com o banco de dados. Ele é construído utilizando o framework Express e se conecta a um banco de dados relacional chamado `loja_online`.

#### Estrutura de Pastas

- **src**
  - **controllers**: Contém os controladores para gerenciar as requisições relacionadas a produtos, usuários e vendedores.
  - **models**: Define os modelos para produtos, usuários e vendedores, incluindo esquemas e métodos de interação com o banco de dados.
  - **routes**: Configura as rotas da API e as vincula aos controladores correspondentes.
  - **database**: Estabelece a conexão com o banco de dados.
  - **app.js**: Inicializa a aplicação Express e configura o middleware.
  - **server.js**: Inicia o servidor e escuta as requisições.

### Frontend

O frontend é a interface do usuário, construída com React. Ele permite que os usuários interajam com o sistema, realizando operações como cadastro, login e gerenciamento de produtos e vendedores.

#### Estrutura de Pastas

- **components**: Contém os componentes reutilizáveis, como formulários e listas para produtos, vendedores e usuários.
- **pages**: Define as páginas principais da aplicação, que utilizam os componentes para exibir informações e permitir interações.

## Funcionalidades

- Cadastro e login de usuários.
- Cadastro, atualização e listagem de produtos.
- Marcação de produtos como inativos.
- Cadastro e listagem de vendedores.
- Listagem de produtos por vendedor e por data de cadastro.

## Como Executar o Projeto

1. **Backend**
   - Navegue até a pasta `backend`.
   - Instale as dependências com `npm install`.
   - Inicie o servidor com `npm start`.

2. **Frontend**
   - Navegue até a pasta `frontend`.
   - Instale as dependências com `npm install`.
   - Inicie a aplicação com `npm start`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Para isso, faça um fork do repositório e envie suas alterações através de um pull request.

## Licença

Este projeto está licenciado sob a MIT License.