var listaInformacoes = 
[['Leon', 'lobisomen', 'Assasino', 'leon', ' - 821', 'Um brawler assassino ágil que causa alto dano a curta distância. Sua habilidade de se camuflar permite aproximações furtivas e eliminações rápidas, tornando-o excelente para flanqueios e emboscadas.'],
['Emz', 'Demôniaca', 'Controle', 'emz', ' - 1006', 'Uma brawler focada em dano contínuo e controle de área. Seu spray de perfume corrosivo mantém inimigos afastados enquanto causa dano constante, tornando-a ótima para segurar zonas e empurrar adversários.'],
['Mortis', 'Robô', 'Assasino', 'mortis', ' - 830','Assassino extremamente móvel que avança com ataques rápidos de curto alcance, ideal para emboscadas e fuga após eliminar alvos.'],
['Rico', 'Soberano', 'Atirador', 'rico', ' - 1124','Assassino extremamente móvel que avança com ataques rápidos de curto alcance, ideal para emboscadas e fuga após eliminar alvos.'],
['Griff', 'Recordista', 'Atirador', 'griff', ' - 1146 - TOP 152° BR','Brawler de médio alcance focado em dano explosivo com moedas que se espalham, forte tanto de perto quanto de longe.'],
['Bibi', 'Thor', 'Lutadora', 'bibi', ' - 1019','Brawler corpo a corpo com alto impacto, capaz de empurrar inimigos com seu ataque carregado e causar grande dano com sua bolha.'],
['Gale', 'Comerciante', 'Suporte', 'gale', ' - 792','Brawler de utilidade que usa rajadas de vento para controlar inimigos, empurrar adversários e zonear o campo.'],
['Carl', 'Sultão', 'Atirador', 'Carl', ' - 932','Brawler versátil que arremessa seu picarete ricocheteante e usa sua super para avançar girando e causar dano contínuo.'],
['El Primo', 'Rey', 'Tanque', 'elprimo', ' - 780','Lutador corpo a corpo resistente, causa alto dano de perto e usa sua super para iniciar confrontos ou se reposicionar.'],
['8-Bit', 'Vírus', 'Atirador', '8bit', ' - 558','Brawler de longo alcance com alto dano, porém baixa mobilidade; sua torreta aumenta o dano de toda a equipe.']];


select_brawlers.onchange = function () {
    var chegou = false
    var nome = ''
    var sobrenome = ''
    var funcao = ''
    var caminho = ''
    var trofeus = ''
    var descricao = ''
    var valor_select = select_brawlers.value

    for (var i = 0; i < listaInformacoes.length; i++) {
        var atual = listaInformacoes[i]
        if (valor_select == i) {
            nome = atual[0] // Nome
            sobrenome = atual[1] // Sobrenome
            funcao = atual[2] // Função
            caminho = atual[3] // Caminho
            trofeus = atual[4] // Troféus
            descricao = atual[5] // Descrição

            chegou = true
        }
        if (chegou) {
            i = listaInformacoes.length
        }
    }
    box.innerHTML = 
    `<div class="cima">
        <div class="personagem">
            <div class="titulo">${nome} ${sobrenome}</div>
            <img src="../assets/imgs_select/${caminho}/image.png" class="img_perso">
        </div>
        <div class="direita">
            <div class="trofeus">
                <div class="titulo">Troféus</div>
                <div class="box_num">
                    <img src="../assets/icon/trofeu_icon.png" alt="" class="icon_trofeu">
                    <div class="num">${trofeus}</div>
                </div>
            </div>
            <div class="funcao">
                <p>Função:</p>
                <div class="tipo_funcao"> ${funcao}</div>
            </div>
            <div class="box_poderes">
                <img src="../assets/imgs_select/${caminho}/hipercarga.png" alt="" class="um">
                <img src="../assets/imgs_select/${caminho}/estrela.png" alt="" class="dois">
                <img src="../assets/imgs_select/${caminho}/acessorio.png" alt="" class="dois">
                <div class="engrenagens">
                    <img src="../assets/imgs_select/${caminho}/engrenagem1.png" alt="" class="tres">
                    <img src="../assets/imgs_select/${caminho}/engrenagem2.png" alt="" class="tres">
                </div>
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
    </div>`
}












