const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Vendedor = require('./Vendedor');
const Produto = require('./Produto');
Produto.belongsTo(Vendedor, { foreignKey: 'id_vendedor' });
module.exports = { sequelize, Usuario, Vendedor, Produto };
