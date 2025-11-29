const ENDPOINT = '/kpis/plotarKpi';

function buscarDadosKpi() {
    fetch(ENDPOINT, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados dos KPIs recebidos: ${JSON.stringify(resposta)}`);

                    popularKpis(resposta);
                });
            } else {
                console.error('Nenhum dado de KPI encontrado ou erro na API');

                document.querySelector('#votostotais .dados').textContent = "Erro";

            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ KPI: ${error.message}`);

            document.querySelector('#votostotais .dados').textContent = "Erro de rede";

        });
}


function popularKpis(data) {
    var totalVotos = data.votosTotais[0]['Quantidade de votos'];

    document.querySelector('#votostotais .dados').innerHTML = totalVotos;

    var maisVotadoNome = data.maisVotado[0]['Mais votado'];
    var maisVotadoVotos = data.maisVotado[0]['Quantidade de votos'];
    document.querySelector('#maisvotado .nome').innerHTML = maisVotadoNome;
    document.querySelector('#maisvotado .dados').innerHTML = maisVotadoVotos;

    var menosVotadoNome = data.menosVotado[0]['Menos votado'];
    var menosVotadoVotos = data.menosVotado[0]['Quantidade de votos'];
    document.querySelector('#menosvotado .nome').innerHTML = menosVotadoNome;
    document.querySelector('#menosvotado .dados').innerHTML = menosVotadoVotos;
}


document.addEventListener('DOMContentLoaded', (event) => {
    buscarDadosKpi();
});
