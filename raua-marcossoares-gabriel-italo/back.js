const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rota GET – Buscar dados
app.get('/dados', (req, res) => {
  res.send('Lista de dados');
});

// Rota POST – Criar dado
app.post('/dados', (req, res) => {
  res.send('Dado criado');
});

// Rota PUT – Atualizar dado
app.put('/dados/:id', (req, res) => {
  res.send(`Dado com ID ${req.params.id} atualizado`);
});

// Rota DELETE – Deletar dado
app.delete('/dados/:id', (req, res) => {
  res.send(`Dado com ID ${req.params.id} deletado`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
