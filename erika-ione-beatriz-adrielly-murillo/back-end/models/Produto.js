const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = sequelize.define('Produto', {
  id_produto: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  descricao: DataTypes.TEXT,
  data_cadastro: DataTypes.DATE,
  preco_unitario: DataTypes.DECIMAL(10, 2),
  ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
});
module.exports = Produto;
