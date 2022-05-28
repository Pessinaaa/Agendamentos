const Sequelize = require('sequelize');
const database = require('../services/bd');
const Consulta = require('./consulta');
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
Paciente.hasMany(Consulta, {foreignKey:
    {name: 'id_paciente', allowNull: false}})
module.exports = Paciente;