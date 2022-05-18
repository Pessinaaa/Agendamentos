const MedicoRepository = require('../entities/medico');
//const inserirMedico = await MedicoRepository.create(MedicoRepository);
async function inserirMedico(){
    return await MedicoRepository.create(MedicoRepository);
}
async function buscarTodosMedicos(){
    return await MedicoRepository.findAll();
}
async function buscarMedicoId(value){
    return await MedicoRepository.findByPk(value);
}
async function salvarOuAtualizarMedico(MedicoRepository){
    return await MedicoRepository.save();
}
async function deletarMedico(value){
    return await MedicoRepository.destroy({ where: { crm: value}})
}

module.exports = {inserirMedico, buscarMedicoId, buscarTodosMedicos, salvarOuAtualizarMedico, deletarMedico};