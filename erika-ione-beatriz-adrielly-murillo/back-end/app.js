const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const usuarioRoutes = require('./routes/usuarios');
const vendedorRoutes = require('./routes/vendedores');
const produtoRoutes = require('./routes/produtos');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/usuarios', usuarioRoutes);
app.use('/vendedores', vendedorRoutes);
app.use('/produtos', produtoRoutes);
sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
