const html = document.querySelector('html');
const focoBotao = document.querySelector('.app__card-button--foco');
const curtoBotao = document.querySelector('.app__card-button--curto');
const longoBotao = document.querySelector('.app__card-button--longo');
const iniciarBotao = document.querySelector('.app__card-primary-button');

focoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
});

curtoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
});

longoBotao.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
});