var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController.js"); 

router.get("/plotarGraficios", function (req, res) {
    graficoController.plotarGraficos(req, res);
});


module.exports = router;