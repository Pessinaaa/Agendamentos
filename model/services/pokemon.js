const axios = require('axios');
function getPokemon(){
    return axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
}
module.exports = {getPokemon};