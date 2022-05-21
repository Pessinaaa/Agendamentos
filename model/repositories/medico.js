const MedicoRepository = require('../entities/medico');
//const inserirMedico = await MedicoRepository.create(MedicoRepository);
async function inserirMedico(value){
    return await MedicoRepository.create(value);
}
async function buscarTodosMedicos(){
    return await MedicoRepository.findAll();
}
async function buscarMedicoId(value){
    return await MedicoRepository.findByPk(value);
}
async function salvarOuAtualizarMedico(value){
    return await MedicoRepository.upsert(value);
}
async function deletarMedico(value){
    return await MedicoRepository.destroy({ where: { crm: value }});
}

module.exports = {inserirMedico, buscarMedicoId, buscarTodosMedicos, salvarOuAtualizarMedico, deletarMedico};