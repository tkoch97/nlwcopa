function createGame(group, titlePlayer1, player1, hour, titlePlayer2, player2 ) {
  return `
  <p class="group">${group}</p>
  <li>
    <abbr title="${titlePlayer1}">
    <img src="./assets/${player1}.svg" alt="Bandeira do ${titlePlayer1}">
    </abbr>
    <strong>${hour}</strong>
    <abbr title="${titlePlayer2}">
    <img src="./assets/${player2}.svg" alt="Bandeira do ${titlePlayer2}">
    </abbr>
  </li>
        `
}

let atraso = -0.4;

function createCard(date, day, game) {
  atraso = atraso + 0.5;
  return `
  <div class="card" style="animation-delay: ${atraso}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
        ${game}
      </ul>
  </div>
    `
}

document.querySelector('#cards').innerHTML = 
    createCard('20/11', 'Domingo', 
      createGame('Grupo A', 'Catar', 'icon-qatar', '13:00', 'Equador', 
        'icon-ecuador')
    ) +

    createCard('21/11', 'Segunda-feira',
      createGame('Grupo B', 'Inglaterra', 'icon-england', 
        '10:00', 'Irã', 'icon-iran') +
      createGame('Grupo A', 'Senegal', 'icon-senegal', 
        '13:00', 'Holanda', 'icon-netherlands') +
      createGame('Grupo B', 'EUA', 'icon-united_states', 
        '16:00', 'País de Gales', 'icon-wales')
    ) +
    createCard('22/11', 'Terça-feira',
      createGame('Grupo C', 'Argentina', 'icon-argentina', 
        '07:00', 'Arábia Saudita', 'icon-saudi_arabia') +
      createGame('Grupo D', 'Dinamarca', 'icon-denmark', 
        '10:00', 'Tunísia', 'icon-tunisia') +
      createGame('Grupo C', 'México', 'icon-mexico', 
        '13:00', 'Polônia', 'icon-poland') +
      createGame('Grupo D', 'França', 'icon-france', 
        '16:00', 'Austrália', 'icon-australia')
    ) +

    createCard('23/11', 'Quarta-feira',
      createGame('Grupo F', 'Marrocos', 'icon-morocco', 
        '07:00', 'Croácia', 'icon-croatia') +
      createGame('Grupo E', 'Alemanha', 'icon-germany', 
        '10:00', 'Japão', 'icon-japan') +
      createGame('Grupo E', 'Epanha', 'icon-spain', 
        '13:00', 'Costa Rica', 'icon-costa_rica') +
      createGame('Grupo F', 'Bélgica', 'icon-belgium', 
        '16:00', 'Canadá', 'icon-canada')
    ) +

    createCard('24/11', 'Quinta-feira',
      createGame('Grupo G', 'Suiça', 'icon-switzerland', 
        '07:00', 'Camarões', 'icon-cameroon') +
      createGame('Grupo H', 'Uruguai', 'icon-uruguay', 
        '10:00', 'Coreia do Sul', 'icon-south_korea') +
      createGame('Grupo H', 'Portugal', 'icon-portugal', 
        '13:00', 'Gana', 'icon-ghana') +
      createGame('Grupo G', 'Brasil', 'icon-brazil', 
        '16:00', 'Sérvia', 'icon-serbia')
    ) +

    createCard('25/11', 'Sexta-feira',
      createGame('Grupo B', 'País de Gales', 'icon-wales', 
        '07:00', 'Irã', 'icon-iran') +
      createGame('Grupo A', 'Catar', 'icon-qatar', 
        '10:00', 'Senegal', 'icon-senegal') +
      createGame('Grupo A', 'Holanda', 'icon-netherlands', 
        '13:00', 'Equador', 'icon-ecuador') +
      createGame('Grupo B', 'Inglaterra', 'icon-england', 
        '16:00', 'EUA', 'icon-united_states')
    ) +

    createCard('26/11', 'Sábado',
      createGame('Grupo D', 'Tunísia', 'icon-tunisia', 
        '07:00', 'Austrália', 'icon-australia') +
      createGame('Grupo C', 'Polônia', 'icon-poland', 
        '10:00', 'Arábia Saudita', 'icon-saudi_arabia') +
      createGame('Grupo D', 'França', 'icon-france', 
        '13:00', 'Dinamarca', 'icon-denmark') +
      createGame('Grupo C', 'Argentina', 'icon-argentina', 
        '16:00', 'México', 'icon-mexico')
    ) +

    createCard('27/11', 'Domingo',
      createGame('Grupo E', 'Japão', 'icon-japan', 
        '07:00', 'Costa Rica', 'icon-costa_rica') +
      createGame('Grupo F', 'Bélgica', 'icon-belgium', 
        '10:00', 'Marrocos', 'icon-morocco') +
      createGame('Grupo F', 'Croácia', 'icon-croatia', 
        '13:00', 'Canadá', 'icon-canada') +
      createGame('Grupo E', 'Espanha', 'icon-spain', 
        '16:00', 'Alemanha', 'icon-germany')
    ) +

    createCard('28/11', 'Segunda-feira',
      createGame('Grupo G', 'Camarões', 'icon-cameroon', 
        '07:00', 'Sérvia', 'icon-serbia') +
      createGame('Grupo H', 'Coréia do Sul', 'icon-south_korea', 
        '10:00', 'Gana', 'icon-ghana') +
      createGame('Grupo G', 'Brasil', 'icon-brazil', 
        '13:00', 'Suíça', 'icon-switzerland') +
      createGame('Grupo H', 'Portugal', 'icon-portugal', 
        '16:00', 'Uruguai', 'icon-uruguay')
    ) +

    createCard('29/11', 'Terça-feira',
      createGame('Grupo A', 'Equador', 'icon-ecuador', 
        '12:00', 'Senegal', 'icon-senegal') +
      createGame('Grupo A', 'Holanda', 'icon-netherlands', 
        '12:00', 'Catar', 'icon-qatar') +
      createGame('Grupo B', 'Irã', 'icon-iran', 
        '16:00', 'EUA', 'icon-united_states') +
      createGame('Grupo B', 'País de Gales', 'icon-wales', 
        '16:00', 'Inglaterra', 'icon-england')
    ) +

    createCard('30/11', 'Quarta-feira',
      createGame('Grupo D', 'Tunisia', 'icon-tunisia', 
        '12:00', 'França', 'icon-france') +
      createGame('Grupo D', 'Austrália', 'icon-australia', 
        '12:00', 'Dinamarca', 'icon-denmark') +
      createGame('Grupo C', 'Polônia', 'icon-poland', 
        '16:00', 'Argentina', 'icon-argentina') +
      createGame('Grupo C', 'Arábia Saudita', 'icon-saudi_arabia', 
        '16:00', 'México', 'icon-mexico')
    ) +

    createCard('01/12', 'Quinta-feira',
      createGame('Grupo F', 'Croácia', 'icon-croatia', 
        '12:00', 'Bélgica', 'icon-belgium') +
      createGame('Grupo F', 'Canadá', 'icon-canada', 
        '12:00', 'Marrocos', 'icon-morocco') +
      createGame('Grupo E', 'Japão', 'icon-japan', 
        '16:00', 'Espanha', 'icon-spain') +
      createGame('Grupo E', 'Costa Rica', 'icon-costa_rica', 
        '16:00', 'Alemanha', 'icon-germany')
    ) +

    createCard('02/12', 'Sexta-feira',
      createGame('Grupo H', 'Coréia do Sul', 'icon-south_korea', 
        '12:00', 'Portugal', 'icon-portugal') +
      createGame('Grupo H', 'Gana', 'icon-ghana', 
        '12:00', 'Uruguai', 'icon-uruguay') +
      createGame('Grupo G', 'Sérvia', 'icon-serbia', 
        '16:00', 'Suiça', 'icon-switzerland') +
      createGame('Grupo G', 'Camarões', 'icon-cameroon', 
        '16:00', 'Brasil', 'icon-brazil')
    )