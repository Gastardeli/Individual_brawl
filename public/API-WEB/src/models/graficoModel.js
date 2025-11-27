var database = require("../database/config")

function graficoPersonagens() {
    var instrucaoSql = `
       SELECT 
            p.nome AS 'Nome do personagem',
            COUNT(f.fkPersonagem) AS 'Número de votos'
        FROM
            personagem AS p
                LEFT JOIN
            favoritos AS f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoUsuario() {
    var instrucaoSql = `
       SELECT 
            u.nome AS NomeUser,
            COUNT(f.fkUsuario) AS QtdVotos
        FROM
            favoritos AS f
                JOIN
            usuario AS u ON f.fkUsuario = u.id
                JOIN
            personagem AS p ON f.fkPersonagem = p.idPersonagem
        GROUP BY u.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    graficoPersonagens,
    graficoUsuario
};