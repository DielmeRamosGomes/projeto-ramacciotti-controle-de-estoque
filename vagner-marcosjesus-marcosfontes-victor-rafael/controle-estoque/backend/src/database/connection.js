const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('loja_online', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // ou 'postgres', 'sqlite', 'mssql'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;