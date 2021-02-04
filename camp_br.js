var teams = [
    '{"team": "São Paulo", "state": "SP"}',
    '{"team": "Corinthians", "state": "SP"}',
    '{"team": "Palmeiras", "state": "SP"}',
    '{"team": "Santos", "state": "SP"}',
    '{"team": "Flamengo", "state": "RJ"}',
    '{"team": "Vasco", "state": "RJ"}',
    '{"team": "Fluminense", "state": "RJ"}',
    '{"team": "Botafogo", "state": "RJ"}',
    '{"team": "Cruzeiro", "state": "MG"}',
    '{"team": "Atletico Mineiro", "state": "MG"}',
    '{"team": "Gremio", "state": "RS"}',
    '{"team": "Internacional", "state": "RS"}',
    '{"team": "Bahia", "state": "BA"}',
    '{"team": "Sport", "state": "PB"}',
]

const object = json => JSON.parse(json);
const onlyTeam = campeonato => campeonato.team;
const onlyState = local => local.state;
resultTeam = teams.map(object).map(onlyTeam);
resultState = teams.map(object).map(onlyState);

//Função para printar o array de JSON no textarea do HTML
function getTeam() {
    var scanText = document.getElementById('teams')
    var i;
    for (i = 0; i < teams.length; i++) {
        scanText.value += `\n\n${resultTeam[i]};${resultState[i]}`;
    }
}

//Funcão que gera os resultados de ida e volta
function gameGoing() {
    var rondaGoing = document.getElementById('combination');
    var rondaBack = document.getElementById('combinationBack');
    var table_champ = document.getElementById('table');
    var i, j;

    var homeTeam = resultTeam;

    //For para gerar as rodadas de forma correta
    for (i = 0; i < 13; i++) {
        const ronda = i + 1;
        homeTeam = homeTeam.sort(() => Math.random() - 0.5) // Variavel que sorteia os times para cada rodada durante o campeonato
        for (j = 0; j < homeTeam.length / 2; j++) {
            var op_Pri = Math.floor(Math.random() * (6 - 0 + 1)) + 0; //Variavel que gera um valor aleatorio para o time da casa no primeiro turno
            var ht_Pri = Math.floor(Math.random() * (6 - 0 + 1)) + 0; //Variavel que gera um valor aleatorio para o time da visitante no primeiro turno
            var op_Sec = Math.floor(Math.random() * (6 - 0 + 1)) + 0; //Variavel que gera um valor aleatorio para o time da casa no segundo turno turno
            var ht_Sec = Math.floor(Math.random() * (6 - 0 + 1)) + 0; //Variavel que gera um valor aleatorio para o time da visitante no segundo turno

            //if para não deixar que dois times joguem mais de uma vez na mesma rodada
            if (homeTeam[teams.length - j - 1] != homeTeam[j] && homeTeam[j] != homeTeam[teams.length - j - 1]) {
                rondaGoing.value += `\n\n${homeTeam[teams.length - j - 1]} [${op_Pri}] vs [${ht_Pri}] ${homeTeam[j]} - ${resultState[teams.length - j - 1]} - Rodada${ronda} `
                rondaBack.value += `\n\n${homeTeam[j]} [${op_Sec}] vs [${ht_Sec}]${homeTeam[teams.length - j - 1]} - ${resultState[j]} - Rodada${ronda + 13} `
            }

            //condicional para retornar todos os times que ganharam
            if (op_Pri > ht_Pri) {
                table_champ.value += `\n\n${homeTeam[teams.length - j - 1]} - Rodada - ${ronda}`
            } else {
                table_champ.value += `\n\n${homeTeam[j]} - Rodada - ${ronda}`
            }
        }
    }
}


