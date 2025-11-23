create database brawl;
use brawl;


CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50),
    cpf char(11)
);


CREATE TABLE funcao (
    idFuncao INT PRIMARY KEY AUTO_INCREMENT,
    nomeFuncao VARCHAR(50),
    CONSTRAINT chkFuncao CHECK (nomeFuncao IN ('Assasino' , 'Controle',
        'Atirador',
        'Lutadora',
        'Suporte',
        'Tanque')),
    descricaoFunc VARCHAR(300)
);

CREATE TABLE personagem (
    idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    trofeus INT,
    descricao VARCHAR(300),
    raridade VARCHAR(30),
    CONSTRAINT chkRaridade CHECK (raridade IN ('Lendário' , 'Épica',
        'Mítico',
        'Rara',
        'Super - raro')),
    fkFuncao INT,
    FOREIGN KEY (fkFuncao)
        REFERENCES funcao (idFuncao)
);



CREATE TABLE favoritos (
	idFavorito int auto_increment,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario)
        REFERENCES usuario (id),
    fkPersonagem INT,
    FOREIGN KEY (fkPersonagem)
        REFERENCES personagem (idPersonagem),
    PRIMARY KEY (idFavorito, fkUsuario , fkPersonagem),
    dtVoto DATETIME
);

insert into funcao values 
(default,'Assasino','Esses lutadores conseguem encurtar a distância entre eles e seus alvos muito rapidamente. No entanto, sua baixa saúde significa que eles precisam confiar em habilidades evasivas e astúcia para sobreviver na batalha.'),
(default,'Atirador','Esses lutadores podem lançar projéteis por cima de obstáculos, como se estivessem fazendo uma entrega mortal.'),
(default,'Controle','Esses lutadores se concentram em dominar o mapa. Sua dependência de ataques em área significa que eles realmente conseguem se manter firmes e até mesmo conquistar o território.'),
(default,'Lutadora','Os lutadores vêm em todos os formatos e tamanhos, e trazem estilos de luta únicos para a batalha. Seja dominando confrontos corpo a corpo ou causando dano mortal à distância, todos desempenham um papel vital e são designados a uma Classe de Lutador específica.'),
(default,'Suporte','Esses Brawlers podem ser de grande ajuda! Sua capacidade de curar ou fortalecer aliados com habilidades em batalha pode facilmente influenciar o resultado de uma partida.'),
(default,'Tanque','Esses lutadores têm muita vida, então eles aguentam um ou dois golpes.');


insert into personagem values 
(default, 'Leon', 821 ,'Um brawler assassino ágil que causa alto dano a curta distância. Sua habilidade de se camuflar permite aproximações furtivas e eliminações rápidas, tornando-o excelente para flanqueios e emboscadas.','Lendário', 1 ),
(default, 'Emz', 1006,'Uma brawler focada em dano contínuo e controle de área. Seu spray de perfume corrosivo mantém inimigos afastados enquanto causa dano constante, tornando-a ótima para segurar zonas e empurrar adversários.', 'Épica',3 ),
(default, 'Mortis', 830,'Assassino extremamente móvel que avança com ataques rápidos de curto alcance, ideal para emboscadas e fuga após eliminar alvos.' ,'Mítico', 1 ),
(default, 'Rico',1124 ,'O Rico é um brawler do tipo “Tiro Preciso” e de raridade Super-Raro. Ele tem com pouca vida e dano moderado, mas ele é único por conta do seu ataque e super, ele usa balas que podem ricochetear nas paredes e continuar percorrendo o mapa.','Rara', 2),
(default, 'Griff',1146 ,'Brawler de médio alcance focado em dano explosivo com moedas que se espalham, forte tanto de perto quanto de longe.','Épica', 2),
(default, 'Bibi',1019 ,'Brawler corpo a corpo com alto impacto, capaz de empurrar inimigos com seu ataque carregado e causar grande dano com sua bolha.','Épica', 6),
(default, 'Gale	', 792,'Brawler de utilidade que usa rajadas de vento para controlar inimigos, empurrar adversários e zonear o campo.','Mítico', 5),
(default, 'Carl', 932,'Brawler versátil que arremessa seu picarete ricocheteante e usa sua super para avançar girando e causar dano contínuo.','Super - raro', 2),
(default, 'El Primo', 780,'Lutador corpo a corpo resistente, causa alto dano de perto e usa sua super para iniciar confrontos ou se reposicionar.','Rara', 6),
(default, '8-Bit', 558,'Brawler de longo alcance com alto dano, porém baixa mobilidade; sua torreta aumenta o dano de toda a equipe.','Super - raro', 2);

