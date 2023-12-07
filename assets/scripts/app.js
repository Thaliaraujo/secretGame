let secretNumber = numberRandom();
let attempts = 1;

//Função exibir conteúdo dinâmico
function displayContent(id, content){
    let field = document.querySelector(id);
    field.innerHTML = content;
};

function initialMessage(){
    displayContent('#title', 'Jogo do número Secreto');
    displayContent('#paragraph', 'Escolha um número de 1 a 100');
};

initialMessage();

//Função gerar número aleatório
function numberRandom() {
    return parseInt(Math.random() * 100 + 1);
};

// Função para verificar o palpite
function checkGuess() {
    let guess = document.querySelector('#input').value
    if(guess == secretNumber) {
        let attemptsWord = attempts > 1 ? 'tentativas' : 'tentativa';
        let attemptsMessage = `Você descobriu o número secreto com ${attempts} ${attemptsWord}!`;    
        displayContent('#title', 'Acertou!');
        displayContent('#paragraph', attemptsMessage);
        document.getElementById('restart').removeAttribute('disabled');
    } else if(guess < secretNumber){
        displayContent('#paragraph', 'O número secreto é maior!');
    } else if(guess > secretNumber){
        displayContent('#paragraph', 'O número secreto é menor!');
    };
    attempts++;
    clearFild();
};

// Função limpar input
function clearFild() {
    guess = document.querySelector('#input');
    guess.value = '';
};

// Função reiniciar o jogo
function gameRestart(){
    initialMessage();
    secretNumber = numberRandom();
    clearFild();
    attempts = 1;
    document.getElementById('restart').setAttribute('disabled', true);
};