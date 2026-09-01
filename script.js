// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Lista de títulos principais
const titulos = [
  'Campeão Brasileiro (8 vezes)',
  'Copa Libertadores da América (3 vezes)',
  'Campeão Carioca (mais de 30 vezes)',
  'Copa do Brasil (4 vezes)',
  'Mundial de Clubes (1 vez)'
];

const listaTitulos = document.getElementById('lista-titulos');
listaTitulos.innerHTML = '';
titulos.forEach((titulo) => {
  const li = document.createElement('li');
  li.textContent = titulo;
  listaTitulos.appendChild(li);
});

// Cards de jogadores (ídolos históricos)
const jogadores = [
  { nome: 'Zico', posicao: 'Meia-atacante' },
  { nome: 'Júnior', posicao: 'Lateral-esquerdo' },
  { nome: 'Zagallo', posicao: 'Ponta-esquerda' },
  { nome: 'Leônidas da Silva', posicao: 'Atacante' }
];

const cardsContainer = document.getElementById('cards-jogadores');
jogadores.forEach((jogador) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${jogador.nome}</h3><p>${jogador.posicao}</p>`;
  cardsContainer.appendChild(card);
});
