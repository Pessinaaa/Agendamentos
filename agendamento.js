(async () => {
    const database = require('./model/services/bd');
    const medico = require('./model/entities/medico');
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();
const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view/' ));
app.use(express.static(path.join(__dirname, '/view/')));
app.use(express.static('view'));
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var consign = require('consign');
consign().include('controller/routes', ).into(app);
app.listen(8081, function(){
    console.info("Servidor funcionando");
})