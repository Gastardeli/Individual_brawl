var favoritosModel = require("../models/favoritoModel");

function adicionar(req, res) {
    // 1. Recupera os dados enviados pelo Front-end (via req.body)
    var personagemId = req.body.personagemId;
    
    // **IMPORTANTE PARA CONTEXTO ACADÊMICO:**
    // Assumimos que o ID do usuário está no corpo da requisição (req.body.usuarioId)
    // Se você usa token/sessão, este valor deve ser pego de 'req.usuario.id' ou similar.
    var usuarioId = req.body.usuarioId; 
    
    // 2. Validação dos Parâmetros
    if (personagemId == undefined || usuarioId == undefined) {
        res.status(400).send("É necessário fornecer o ID do Usuário e o ID do Personagem!");
        return;
    }

    // 3. Chamada ao Model (camada de interação com o BD)
    favoritosModel.inserir(usuarioId, personagemId).then(function(resultado){
        // Sucesso na inserção. Status 201 é ideal para criação de recurso.
        res.status(201).send("Personagem favoritado com sucesso!"); 
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao salvar o favorito.", erro.sqlMessage);
        // Em caso de erro (ex: FK inválida), retorna o erro SQL 500
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    adicionar,
}