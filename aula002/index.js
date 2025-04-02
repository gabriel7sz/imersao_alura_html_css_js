function playGame() {
    let age = parseInt(prompt("Quantos anos você tem?"));
  
    while (isNaN(age) || age < 0) {
      alert("Por favor, insira uma idade válida.");
      age = parseInt(prompt("Quantos anos você tem?"));
    }
  
    if (age < 18) {
      alert(
        "Você ainda é menor de idade. Volte quando for maior para jogar."
      );
      return;
    }
  
    alert("Você já é maior de idade! Vamos jogar!");
  
    const choices = ["pedra", "papel", "tesoura"];
  
    function getPlayerChoice() {
      let choice = prompt("Escolha: Pedra, Papel ou Tesoura!").toLowerCase();
      while (!choices.includes(choice)) {
        alert("Escolha inválida. Por favor, tente novamente.");
        choice = prompt("Escolha: Pedra, Papel ou Tesoura!").toLowerCase();
      }
      return choice;
    }
  
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function determineWinner(playerChoice, computerChoice) {
      const rules = {
        pedra: "tesoura",
        papel: "pedra",
        tesoura: "papel",
      };
  
      if (playerChoice === computerChoice) {
        return "Empate!";
      } else if (rules[playerChoice] === computerChoice) {
        return "Você venceu!";
      } else {
        return "O computador venceu!";
      }
    }
  
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
  
    alert(
      `Você escolheu: ${playerChoice}\nComputador escolheu: ${computerChoice}\nResultado: ${result}`
    );
  }