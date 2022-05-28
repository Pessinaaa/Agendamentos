const database = require('../services/bd');
const Sequelize = require('sequelize');
const Consulta = database.define('consulta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    }})
module.exports = Consulta;