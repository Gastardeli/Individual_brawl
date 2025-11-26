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

function maisVotado(){
    var instrucaoSql = `
        SELECT 
            p.nome AS 'Mais votado',
            COUNT(f.fkPersonagem) AS 'Quantidade de votos' 
        FROM
            personagem AS p
                JOIN 
            favoritos AS f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.nome
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function menosVotado(){
    var instrucaoSql = `
       SELECT 
            p.nome AS 'Menos votado',
            COUNT(f.fkPersonagem) AS 'Quantidade de votos'
        FROM
            personagem AS p
                JOIN
            favoritos AS f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.idPersonagem , p.nome
        HAVING COUNT(f.fkPersonagem) > 0 
        ORDER BY p.nome ASC
        LIMIT 1; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    votosTotais,
    maisVotado,
    menosVotado
};