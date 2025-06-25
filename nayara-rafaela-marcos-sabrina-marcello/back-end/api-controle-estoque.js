//npm install mysql12
//npm install express
//npm install cors

import express from 'express'
import Produto from './Produto.js'
import Conexao from 'conexao.js'
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
    const conexao = new Conexao('localhost', 3306, "root", '', "loja_online")
    const pool = await conexao.conectar();
    const connection = await pool.getConnection()
    return connection
} 
app.get("/listarprodutos", (req, res) => {
     app.json
});
 









