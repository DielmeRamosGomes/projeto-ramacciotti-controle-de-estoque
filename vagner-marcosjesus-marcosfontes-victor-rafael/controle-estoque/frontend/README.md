# Controle de Estoque - Frontend

Este projeto é uma aplicação web para controle de estoque de uma loja online, desenvolvida com React no frontend. A aplicação permite que usuários se cadastrem, façam login, e gerenciem produtos e vendedores.

## Estrutura do Projeto

- **src/**: Contém todos os arquivos de código-fonte da aplicação.
  - **components/**: Componentes reutilizáveis da aplicação.
    - `ProdutoForm.js`: Formulário para cadastro de produtos.
    - `ProdutoList.js`: Componente para exibir a lista de produtos.
    - `VendedorForm.js`: Formulário para cadastro de vendedores.
    - `VendedorList.js`: Componente para exibir a lista de vendedores.
    - `UsuarioForm.js`: Formulário para cadastro de usuários.
    - `LoginForm.js`: Componente para o login de usuários.
  - **pages/**: Páginas da aplicação.
    - `ProdutosPage.js`: Página que exibe a lista e o formulário de produtos.
    - `VendedoresPage.js`: Página que exibe a lista e o formulário de vendedores.
    - `UsuariosPage.js`: Página que exibe a lista e o formulário de usuários.
  - `App.js`: Componente principal que configura as rotas da aplicação.
  - `index.js`: Ponto de entrada da aplicação React.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do frontend:
   ```
   cd controle-estoque/frontend
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```
A aplicação estará disponível em `http://localhost:3000`.

## Funcionalidades

- Cadastro de usuários.
- Login de usuários.
- Cadastro e gerenciamento de produtos.
- Cadastro e gerenciamento de vendedores.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie suas alterações através de um pull request.

## Licença

Este projeto está licenciado sob a MIT License.