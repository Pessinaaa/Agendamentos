const Sequelize = require('sequelize');
const database = require('../services/bd');
const Paciente = database.define('paciente', {
    cpf: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rg: Sequelize.INTEGER,
    endereco: Sequelize.STRING,
    telefone: Sequelize.STRING
})
module.exports = Paciente;