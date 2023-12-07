let secretNumber = numberRandom();
let attempts = 1;

//Função exibir conteúdo dinâmico
function displayContent(id, content){
    let field = document.querySelector(id);
    field.innerHTML = content;
};

displayContent('#title', 'Jogo do número Secreto');
displayContent('#paragraph', 'Escolha um número de 1 a 100');

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