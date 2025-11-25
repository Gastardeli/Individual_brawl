var express = require("express");
var router = express.Router();

var favoritosController = require("../controllers/favoritoController");

router.post("/cadastrar", function (req, res) {
    favoritosController.adicionar(req, res);
});

module.exports = router;