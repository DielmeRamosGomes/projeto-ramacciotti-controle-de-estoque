//npm install mysql12
//npm install express
//npm install cors

import express from 'express'
import Produto from './Produto.js'
import Conexao from './Conexao.js'
import cors from 'cors'

const app = express();
//const cors = cors();

//use middleware cors
app.use (cors(
    {
     origin: 'http://localhost:5173'
    })
);

//Middleware para analisar a requisição como JSON
app.use(express.json());

let lista_produtos = [];

async function usarConexao() {
    const conexao = new Conexao('localhost', 3306, "root", '', "loja_online");
    const pool = await conexao.conectar();
    const connection = await pool.getConnection();
    return connection;
} 
app.get("/listarprodutos", (req, res) => {
     usarConexao()
     .then(connection => {
        return connection.query('SELECT * FROM loja_online.Produto');
     })
     .then(([rows]) => {
        res.json(rows);
     })
     .catch(error => {
        console.error('Error ao listar produtos', error);
        res.status(500).json({error: 'Erro ao listar produtos'});
     });
});

app.post('/cadastrarproduto', async (req, res) => {
    let {id_produto, nome, descricao, id_vendedor, data_cadastro, preco_unitario, ativo} = req.body;

    if (!id_produto || !nome || !descricao || !id_vendedor || !data_cadastro || !preco_unitario || ativo === undefined){
        return res.status(400).json({message: 'Todos os campos são obrigatórios'});
    }
    let novoProduto = new Produto(id_produto, nome, descricao, id_vendedor, data_cadastro, preco_unitario, ativo);
    lista_produtos.push(novoProduto);
    try {
        const connection = await usarConexao();
        const [rows] = await connection.query('INSERT INTO loja_online.Produto(id_produto, nome, descricao, id_vendedor, data_cadastro, preco_unitario, ativo) Values(?, ?, ?, ?, ?, ?, ?);',
        [id_produto, nome, descricao, id_vendedor, data_cadastro, preco_unitario, ativo]        
        );
        console.log(rows);
        connection.release();
        res.status(201).json({message: 'Produto cadastrado com sucesso', produto: novoProduto});
    
    } catch (error) {
        console.error('Erro ao inserir produto:', error);
        res.status(500).json({error: 'Erro ao inserir o produto no banco de dados'});
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando: http://localhost:${PORT}/listarprodutos`);
});
 









