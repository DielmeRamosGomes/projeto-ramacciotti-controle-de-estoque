const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Produto = sequelize.define('Produto', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    id_vendedor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Vendedores',
            key: 'id_vendedor'
        }
    },
    data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = Produto;