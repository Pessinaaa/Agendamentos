const medicoRepository = require('../../model/repositories/medico');
const Medico = require('../../model/entities/medico');
module.exports = function(app){
    app.get("/cadastro", function(req, res){
        res.render('medico/cadastro');
    })
}
app.post('/cadastro/medico/edit/salvar', (req, res) => {
    var Medico = {nome: req.body.nome,
        crm: req.body.crm,
        telefone: req.body.telefone};
    try {
        medicoRepository.salvarOuAtualizarMedico(Medico);
        res.render('medico/Sucesso');
    } catch (error) {
        res.render('medico/EditMedico');
    }
});