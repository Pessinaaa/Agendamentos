const { response } = require('express');
const medicoRepository =require('../../../model/repositories/medico'); 
module.exports = function (app){

// app.get("/cadastro/medico",  function(req, res){
//        res.render('medico/cadastro');
// });

app.post('/cadastro/medico/edit/salvar', async (req, res) => {
      // var Medico = {nome: req.body.nome,
      // crm: req.body.crm,
      // telefone: req.body.telefone};
      try {
        var medicoCarregado = await medicoRepository.buscarMedicoId(req.body.crm);
        await medicoRepository.salvarOuAtualizarMedico(req.body);
        if(medicoCarregado != null){
          res.json({menssage:'Alterado com sucesso'});
        }else{
          res.json({menssage:'Cadastrado com suceso'});
        }
    } catch (error) {
         console.info(error);
      res.status(500).json({erro:'Erro ao cadastrar'});
    }
});

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

app.delete('/delete/medico/:id', async (req, res) => {
  try {
    var id = req.params.id;
    var medicoCarregado = await medicoRepository.buscarMedicoId(id);
    if(medicoCarregado != null){
      await  medicoRepository.deletarMedico(id);
      res.json({menssage: 'Deletado com sucesso'})
    }else{
      res.status(500).json({erro: 'Médico não encontrado'})
    }
  } catch (err) {
    res.status(400).json({erro: 'Erro ao deletar médico' });
  }
});

app.get('/buscar/medico/:id', async (req, res, next) => {
  try {
    var id = req.params.id;
    const value = await medicoRepository.buscarMedicoId(id);
    if(value != null){
      res.json(value);
    }else{
      res.status(500).json({erro:'Médico não encontrado'});
    }
  } catch (error) {
    res.status(400).json({erro:'Erro ao buscar o médico'});
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


const apiPokemon = require('../../../model/services/pokemon');
app.get('/consumir/api/pokemon/:id', async (req, res, next) => {
    try{
        const retornoDaApi = await apiPokemon.getPokemon();
        // npm i circular-json module
var CircularJSON = require('circular-json');
        res.json(CircularJSON.stringify(retornoDaApi));        
    } catch (error){
        console.info(error);
        res.status(400).json({erro:'Erro ao consumir a api do pokemon'});
    }
});
}