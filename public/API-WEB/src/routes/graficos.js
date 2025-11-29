var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController.js"); 

router.get("/plotarGrafico/:idItem", function (req, res) {
    graficoController.plotarGrafico(req, res);
});

module.exports = router;