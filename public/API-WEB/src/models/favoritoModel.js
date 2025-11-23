// Importa o arquivo de configuração e execução do BD
var database = require("../database/config");

/**
 * Insere a dupla (ID do Usuário, ID do Personagem) na tabela associativa 'favoritos'.
 * * @param {number} usuarioId - ID do usuário.
 * @param {number} personagemId - ID do personagem.
 * @returns {Promise<object>} O resultado da execução da query no BD.
 */
function inserir(usuarioId, personagemId) {
    // 💡 Montando a instrução SQL para inserção.
    // Usamos fkUser e fkPerso como nomes de colunas conforme o seu cenário de FKs.
    // Estamos concatenando strings, seguindo o padrão do seu exemplo.
    var instrucaoSql = `
        INSERT INTO favoritos VALUE
        ('${usuarioId}', '${personagemId}', CURRENT_TIMESTAMP);
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // Retorna a Promise para que o Controller possa usar o .then().catch()
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir,
};