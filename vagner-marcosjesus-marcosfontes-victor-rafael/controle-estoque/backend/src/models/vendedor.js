const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Vendedor = sequelize.define('Vendedor', {
    id_vendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'vendedores',
    timestamps: false
});

module.exports = Vendedor;