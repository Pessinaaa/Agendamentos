const PacienteRepository = require('../entities/paciente');
//const inserirPaciente = await PacienteRepository.create(PacienteRepository);
async function inserirPaciente(value){
    return await PacienteRepository.create(value);
}
async function buscarTodosPacientes(){
    return await PacienteRepository.findAll();
}
async function buscarPacienteId(value){
    return await PacienteRepository.findByPk(value);
}
async function salvarOuAtualizarPaciente(value){
    return await PacienteRepository.upsert(value);
}
async function deletarPaciente(value){
    return await PacienteRepository.destroy({ where: { cpf: value }});
}

module.exports = {inserirPaciente, buscarPacienteId, buscarTodosPacientes, salvarOuAtualizarPaciente, deletarPaciente};