const express = require("express");
const app = express();
var consign = require('consign');
consign().include('rest/controller/routes').into(app);
app.use(express.urlencoded({extend: true}));
app.use(express.json());
app.listen(8081, function(){
    console.info("API funcionando");
})