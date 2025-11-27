var listaInformacoes =
    [['Leon', 'lobisomen', 'Assasino', 'leon', ' - 821', 'Lendário', 'Um brawler assassino ágil que causa alto dano a curta distância. Sua habilidade de se camuflar permite aproximações furtivas e eliminações rápidas, tornando-o excelente para flanqueios e emboscadas.'],
    ['Emz', 'Demôniaca', 'Controle', 'emz', ' - 1006', 'Épica', 'Uma brawler focada em dano contínuo e controle de área. Seu spray de perfume corrosivo mantém inimigos afastados enquanto causa dano constante, tornando-a ótima para segurar zonas e empurrar adversários.'],
    ['Mortis', 'Robô', 'Assasino', 'mortis', ' - 830', 'Mítico', 'Assassino extremamente móvel que avança com ataques rápidos de curto alcance, ideal para emboscadas e fuga após eliminar alvos.'],
    ['Rico', 'Soberano', 'Atirador', 'rico', ' - 1124', 'Rara', 'O Rico é um brawler do tipo “Tiro Preciso” e de raridade Super-Raro. Ele tem com pouca vida e dano moderado, mas ele é único por conta do seu ataque e super, ele usa balas que podem ricochetear nas paredes e continuar percorrendo o mapa.'],
    ['Griff', 'Recordista', 'Atirador', 'griff', ' - 1146 - TOP 152° BR', 'Épica', 'Brawler de médio alcance focado em dano explosivo com moedas que se espalham, forte tanto de perto quanto de longe.'],
    ['Bibi', 'Thor', 'Lutadora', 'bibi', ' - 1019', 'Épica', 'Brawler corpo a corpo com alto impacto, capaz de empurrar inimigos com seu ataque carregado e causar grande dano com sua bolha.'],
    ['Gale', 'Comerciante', 'Suporte', 'gale', ' - 792', 'Mítico', 'Brawler de utilidade que usa rajadas de vento para controlar inimigos, empurrar adversários e zonear o campo.'],
    ['Carl', 'Sultão', 'Atirador', 'Carl', ' - 932', 'Super - raro', 'Brawler versátil que arremessa seu picarete ricocheteante e usa sua super para avançar girando e causar dano contínuo.'],
    ['El Primo', 'Rey', 'Tanque', 'elprimo', ' - 780', 'Rara', 'Lutador corpo a corpo resistente, causa alto dano de perto e usa sua super para iniciar confrontos ou se reposicionar.'],
    ['8-Bit', 'Vírus', 'Atirador', '8bit', ' - 558', 'Super - raro', 'Brawler de longo alcance com alto dano, porém baixa mobilidade; sua torreta aumenta o dano de toda a equipe.']];


select_brawlers.onchange = function () {
    var chegou = false
    var nome = ''
    var sobrenome = ''
    var funcao = ''
    var caminho = ''
    var trofeus = ''
    var raridade = ''
    var descricao = ''
    var color = ''
    var valor_select = select_brawlers.value

    for (var i = 0; i < listaInformacoes.length; i++) {
        var atual = listaInformacoes[i]
        if (valor_select == i) {
            nome = atual[0] // Nome
            sobrenome = atual[1] // Sobrenome
            funcao = atual[2] // Função
            caminho = atual[3] // Caminho
            trofeus = atual[4] // Troféus
            raridade = atual[5] // Raridade
            descricao = atual[6] // Descrição

            if (raridade == 'Lendário') {
                color = 'gold'
            } else if (raridade == 'Mítico') {
                color = 'red'
            } else if (raridade == 'Épica') {
                color = 'purple'
            } else if (raridade == 'Rara') {
                color = 'green'
            } else if (raridade == 'Super - raro') {
                color = 'darkgreen'
            }

            i = listaInformacoes.length
        }

    }
    box.innerHTML =
        `<div class="cima">
        <div class="personagem">
            <div class="titulo">${nome} ${sobrenome}</div>
            <img src="./assets/imgs_select/${caminho}/image.png" class="img_perso">
        </div>
        <div class="direita">
            <div class="trofeus">
                <div class="titulo">Troféus</div>
                <div class="box_num">
                    <img src="./assets/icon/trofeu_icon.png" alt="" class="icon_trofeu">
                    <div class="num">${trofeus}</div>
                </div>
            </div>
            <div class="funcao">
                <p>Função:</p>
                <div class="tipo_funcao"> ${funcao}</div>
            </div>
            <div class="box_poderes">
                <img src="./assets/imgs_select/${caminho}/hipercarga.png" alt="" class="um">
                <img src="./assets/imgs_select/${caminho}/estrela.png" alt="" class="dois">
                <img src="./assets/imgs_select/${caminho}/acessorio.png" alt="" class="dois">
                <div class="engrenagens">
                    <img src="./assets/imgs_select/${caminho}/engrenagem1.png" alt="" class="tres">
                    <img src="./assets/imgs_select/${caminho}/engrenagem2.png" alt="" class="tres">
                </div>
            </div>
            <div class="raridade">
                <p style="color: white;">
                    Raridade: <p class = "raridadeColor" style="color:${color}"> ${raridade} </p>
                </p>
            </div>
        </div>
    </div>
    <div class="baixo">
        <div class="titulo">
            Descrição:
        </div>
        <div class="box">
            <p>${descricao}</p>
        </div>
    </div>`;
}

function salvarFavorito() {

    var personagemId = Number(select_brawlers.value) + 1; // + 1 pois começa em 0 

    var usuarioId = sessionStorage.ID_USUARIO;

    if (personagemId == undefined || usuarioId == undefined) {
        conteudoMensagem.innerHTML = `<p>Certifique-se que está logado e que selecionou algum personagem</p><br>`
        chamarModal()
        return;
    } 
        fetch("/favoritos/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                personagemId: personagemId,
                usuarioId: usuarioId
            })
        }).then(function (resposta) {
            console.log("Resposta da API:", resposta);

            if (resposta.ok) {
                conteudoMensagem2.innerHTML = `<p>Seu personagem foi favoritado com sucesso</p><br>`
                chamarModal2()
            } else {

                resposta.json().then(jsonErro => {

                    alert(`Erro ao salvar favorito: ${jsonErro}`);
                }).catch(() => {

                    alert(`Erro ao salvar favorito. Status: ${resposta.status}`);
                });
            }
        }).catch(function (erro) {
            console.log(`#ERRO: ${erro}`);
            alert("Erro de conexão com o servidor. Verifique a rede ou a rota da API.");
        });
    }


function redirecionar() {
    setTimeout(() => {
        window.location = "./dashboard/dashboard.html";
    });
}












