const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = sequelize.define('Usuario', {
  id_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  senha: DataTypes.STRING,
  data_cadastro: DataTypes.DATE,
  ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
});
module.exports = Usuario;
