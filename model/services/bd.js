const Sequelize = require('sequelize');
const sequelize = new Sequelize('agendamento', 'root', 'A8?a*uztR^aq~ku', {dialect: 'mysql', host: 'localhost', port:3306});
module.exports = sequelize