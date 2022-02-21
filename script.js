let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - azul
// 3 - amarelo

const azul = document.querySelector('.azul');
const vermelha = document.querySelector('.vermelha');
const amarela = document.querySelector('.amarela');
const verde = document.querySelector('.verde');

// cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

// checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[checkOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return verde;
    } else if(color == 1){
        return vermelha;
    } else if(color == 2){
        return azul
    }else if(color == 3){
        return amarela;
    }
}

// função para proximo nivel
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// função para game over
let gameOver = () =>{
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];


    playGame();
}

let playGame = () => {
    alert(`Bem-vindo ao Genius! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
}

verde.addEventListener('click', click(0));
vermelha.addEventListener('click', click(1));
azul.addEventListener('click', click(2));
amarela.addEventListener('click', click(3));

verde.onclick = () => click(0);
vermelha.onclick = () => click(1);
azul.onclick = () => click(2);
amarela.onclick = () => click(3);

playGame();