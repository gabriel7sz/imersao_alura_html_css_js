function playGame() {

    const AGE = parseInt(prompt('Quantos anos você tem?'));

    if (isNaN(AGE) || AGE < 0 ) {
        alert('Você não inseriu uma idade válida, você é burro?');
        return;
    }

    if (AGE >= 18) {
        alert('Você já é maioral e pode perder para mim!');
    } else {
        alert('Você ainda é de menor, se eu mecher com menor, vou para cadeia. Volte quando for maiorzinho.')
        return;
    }

    const ARRAY = ['pedra', 'papel', 'tesoura'];

    function computerChoice() {
        const CHOICE = Math.floor(Math.random() * ARRAY.length);
        return ARRAY[CHOICE];
    }   

    function whosWin(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "Empate!";
        } else if (
            (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
            (playerChoice === 'papel' && computerChoice === 'pedra') ||
            (playerChoice === 'tesoura' && computerChoice === 'papel')
        ) {
            return 'Você venceu!';

        } else {
            return 'Diabo venceu!'
        }
    }

    const playerChoice = prompt('Escolha: Pedra, Papel ou Tesoura!').toLowerCase();
    const computersChoice = computerChoice();
    const result = whosWin(playerChoice, computersChoice);

    alert(`Você escolheu: ${playerChoice}\nDiabo escolheu: ${computersChoice}\nResultado: ${result}`);
}
