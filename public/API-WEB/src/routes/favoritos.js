var express = require("express");
var router = express.Router();

// Importando o nosso Controller
var favoritosController = require("../controllers/favoritoController");

// Rota POST: Recebe os IDs do usuário e do personagem para salvar o favorito.
// O endpoint completo será: POST /favoritos/cadastrar
router.post("/cadastrar", function (req, res) {
    // Chama a função 'adicionar' no Controller
    favoritosController.adicionar(req, res);
});

module.exports = router;