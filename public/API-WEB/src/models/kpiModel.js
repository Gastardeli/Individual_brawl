var database = require("../database/config")

function votosTotais() {

    var instrucaoSql = `
        SELECT 
        COUNT(f.fkPersonagem) AS 'Quantidade de votos'
             FROM
            favoritos AS f;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maisVotado() {
    var instrucaoSql = `
        SELECT 
            p.nome AS 'Mais votado',
            COUNT(f.fkPersonagem) AS 'Quantidade de votos' /* Retirar esse linha para mostrar só o nome*/
        FROM
            personagem AS p
                JOIN /* left  - ADICIONA TODOS OS PERSONAGENS */
            favoritos AS f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.nome
        ORDER BY COUNT(f.fkPersonagem) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function menosVotado() {
    var instrucaoSql = `
       SELECT 
            p.nome AS 'Menos votado',
            COUNT(f.fkPersonagem) AS 'Quantidade de votos'
        FROM
            personagem AS p
                JOIN
            favoritos AS f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.idPersonagem , p.nome
        ORDER BY COUNT(f.fkPersonagem) Asc
        limit 1; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    votosTotais,
    maisVotado,
    menosVotado
};