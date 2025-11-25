// Importa o arquivo de configuração e execução do BD
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
    // Retorna a Promise para que o Controller possa usar o .then().catch()
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
};