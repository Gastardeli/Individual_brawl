var favoritosModel = require("../models/favoritoModel");

function adicionar(req, res) {
 
    var personagemId = req.body.personagemId;
    
    var usuarioId = req.body.usuarioId; 
    

    if (personagemId == undefined || usuarioId == undefined) {
        res.status(400).send("É necessário fornecer o ID do Usuário e o ID do Personagem!");
        return;
    }


    favoritosModel.inserir(usuarioId, personagemId).then(function(resultado){
        res.status(201).send("Personagem favoritado com sucesso!"); 
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao salvar o favorito.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    adicionar,
}