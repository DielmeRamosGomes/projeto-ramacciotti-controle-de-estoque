const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vendedor = sequelize.define('Vendedor', {
  id_vendedor: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  data_cadastro: DataTypes.DATE,
  ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
});
module.exports = Vendedor;
