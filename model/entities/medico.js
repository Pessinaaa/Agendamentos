const database = require('../services/bd');
const Sequelize = require('sequelize');
const Medico = database.define('medico', {
    crm: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: Sequelize.STRING
})
module.exports = Medico;