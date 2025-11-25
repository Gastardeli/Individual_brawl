var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController.js"); 

a.
router.get("/plotarKpi", function (req, res) {
    kpiController.plotarKpi(req, res);
});


module.exports = router;