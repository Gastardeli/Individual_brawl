
var kpiModel = require("../models/kpiModel");

function plotarKpi(req, res) {
  
    kpiModel.votosTotais()
        .then(function (resultadoVotos) {
          
            kpiModel.maisVotado()
                .then(function (resultadoMaisVotado) {
      
                    kpiModel.menosVotado()
                        .then(function (resultadoMenosVotado) {
                
                            res.status(200).json({
                                votosTotais: resultadoVotos,
                                maisVotado: resultadoMaisVotado,
                                menosVotado: resultadoMenosVotado
                            });
                        }).catch(function (erro) {
                            console.log(erro);
                            res.status(500).json(erro.sqlMessage);
                        });
                }).catch(function (erro) {
                    console.log(erro);
                    res.status(500).json(erro.sqlMessage);
                });
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });

}

module.exports = {
    plotarKpi,
};