const ConsultaRepository = require('../entities/consulta');
//const inserirConsulta = await ConsultaRepository.create(ConsultaRepository);
async function inserirConsulta(value){
    return await ConsultaRepository.create(value);
}
async function buscarTodasConsultas(){
    return await ConsultaRepository.findAll();
}
async function buscarConsultaId(value){
    return await ConsultaRepository.findByPk(value);
}
async function salvarOuAtualizarConsulta(value){
    return await ConsultaRepository.upsert(value);
}
async function deletarConsulta(value){
    return await ConsultaRepository.destroy({ where: { id: value }});
}

module.exports = {inserirConsulta, buscarConsultaId, buscarTodasConsultas, salvarOuAtualizarConsulta, deletarConsulta};