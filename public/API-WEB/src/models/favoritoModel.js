
var database = require("../database/config");

/**
 * @param {number} usuarioId 
 * @param {number} personagemId 
 * @returns {Promise<object>} 
 */
function inserir(usuarioId, personagemId) {

    var instrucaoSql = `
        INSERT INTO favoritos VALUE
        ( DEFAULT, '${usuarioId}', '${personagemId}', CURRENT_TIMESTAMP);
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
};