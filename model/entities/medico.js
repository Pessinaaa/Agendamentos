const database = require('../services/bd');
const Sequelize = require('sequelize');
const Consulta = require('./consulta');
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
Medico.hasMany(Consulta, {foreignKey:
    {name: 'id_Medico', allowNull: false}})
module.exports = Medico;