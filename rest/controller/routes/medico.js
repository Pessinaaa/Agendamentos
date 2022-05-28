const medicoRepository =require('../../../model/repositories/medico'); 
module.exports = function (app){

// app.get("/cadastro/medico",  function(req, res){
//        res.render('medico/cadastro');
// });

// app.post('/cadastro/medico/edit/salvar', async (req, res) => {
//     var Medico = {nome: req.body.nome,
//         crm: req.body.crm,
//         telefone: req.body.telefone}; 
//       try {
//       await medicoRepository.salvarOuAtualizarMedico(Medico);
//            res.redirect('../../../lista/medico');
//     } catch (error) {
//          console.info(error);
//       res.render('medico/error', {mensagem: 'Erro no cadastrado' });
     
//     }
// });

app.post('/cadastro/medico/salvar', async (req, res) => {
  var Medico = {nome: req.body.nome,
        crm: req.body.crm,
        telefone: req.body.telefone}; 
    try {
        await medicoRepository.inserirMedico(Medico);
         res.redirect('../../../../lista/medico');   
    } catch (error) {
      res.status(400).json({erro: 'Erro no cadastro do médico' });
    }
});

app.get('/delete/medico/:id', async (req, res) => {
  try {
    var id = req.params.id;
    await  medicoRepository.deletarMedico(id);
    res.redirect('../../lista/medico');
  } catch (err) {
    res.status(400).json({erro: 'Erro ao deletar médico' });
  }
});

app.get('/edit/medico/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    const value = await medicoRepository.buscarMedicoId(id);
    res.json(value);
  } catch (err) {
    console.info(err);
    res.status(400).json( {erro:'Erro ao editar o médico'});
    next(err);
  }
});

app.get('/lista/medico', async (req, res, next) => {
   try {
     const docs = await medicoRepository.buscarTodosMedicos();
     res.json(docs);
   } catch (err) {
       console.info(err);
       res.status(400).json( {erro:'Erro ao listar os médicos'});
   }
});
}