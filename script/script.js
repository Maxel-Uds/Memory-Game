let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor);
    }
}

//acende a proxima cor
let lightColor = (element) => {
    element.classList.add('selected');

    setTimeout(() => {
        element.classList.remove('selected');
    }, 500);
}

//Confere a order clicada pelo jogador
let checkOrder = () => {
    for(let i in clickedOrder)
    {
        if(clickedOrder[i] != order[i])
        {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length)
    {
        alert('Pontuação: ' + score + '\nVocê acertou! Iniciando próximo nível!');
        nextLevel();
    }
}

//Função para o clique do jogador
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0)
    {
        return green;
    }
    else if(color == 1)
    {
        return red;
    }
    else if(color == 2)
    {
        return yellow;
    }
    else if(color == 3)
    {
        return blue;
    }
}

//Função próximo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função game over
let gameOver = () => {
    alert('Pontuaçaõ: ' + score + '\nVocê perdeu o jogo!\nClique em "OK" para recomeçar')
    order = [];
    clickedOrder = [];

    playGame();
}

//Função que inicia o jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando novo jogo!')
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();