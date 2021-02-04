# Campeonato de futebol
___
 ### <span style="color:purple">*O Projeto:*</span>
 * *<span style="color:gray">**Campeonato de futebol de pontos corridos, com 14 times, possuindo turno e returno**</span>*

 ### <span style="color:purple">*Regras do algoritimo:*</span>
 1. <span style="Gray">*Cada time tem que ter seu estado já pré definido EX: Corinthinas;SP*</span>

 2. <span style="Gray">*Exibir na tela a combinação de jogos, para todas as equipes, uma equipe não pode jogar mais de uma vez na mesma rodada e não pode jogar mais de 13 vezes em um turno, o jogo deve acontecer no estado do mandante*</span>

 3. <span style="Gray">*Fazer as rodadas de returno, invertendo os mandantes e os estados onde devera ocorrer a partida*</span>

 4. <span style="Gray">*Gerar um resultado aleatorio para todos os jogos*</span>

 5. <span style="Gray">*Determinar um campeão, baseado: Vitória=3 Pontos, Empate=1 Ponto*</span>

 ___

### <span style="color:purple">*Mapa do Código:*</span>
1. **Array contendo todos os times e estados** 
```javascript
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
```
2. **Função para printar na tela o array**
```javascript
function getTeam() {
    var scanText = document.getElementById('teams')
    var i;
    for (i = 0; i < teams.length; i++) {
        scanText.value += `\n\n${resultTeam[i]};${resultState[i]}`;
    }
}
```