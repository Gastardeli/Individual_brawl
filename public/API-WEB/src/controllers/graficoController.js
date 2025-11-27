

var graficoModel = require("../models/graficoModel");

function plotarGraficos(req, res) {


    graficoModel.graficoPersonagens()
        .then(function (resultadoPersonagens) { 

           
            graficoModel.graficoUsuario()
                .then(function (resultadoUsuarios) { 

              
                    res.status(200).json({
                        graficoPersonagens: resultadoPersonagens, 
                        graficoUsuario: resultadoUsuarios        
                    });

                }).catch(function (erroUsuarios) {
                 
                    console.error("Erro na consulta de usuários:", erroUsuarios);
                    res.status(500).json(erroUsuarios.sqlMessage || "Erro ao buscar dados de usuários.");
                });
        })
        .catch(function (erroPersonagens) {
            console.error("Erro na consulta de personagens:", erroPersonagens);
            res.status(500).json(erroPersonagens.sqlMessage || "Erro ao buscar dados de personagens.");
        });
}

module.exports = {
    plotarGraficos,
};