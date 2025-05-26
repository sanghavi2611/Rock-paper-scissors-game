function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice() {
        const input = prompt("Enter your choice (rock, paper, or scissors):");
        if (input === null) {
            alert("Game cancelled.");
            return null;
        }
        return input.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "tie";
        }

        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (winConditions[humanChoice] === computerChoice) {
            return "win";
        } else {
            return "lose";
        }
    }

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) return;

        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        console.log(`Round ${round}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (result === "win") {
            humanScore++;
            console.log("You win this round!");
        } else if (result === "lose") {
            computerScore++;
            console.log("You lose this round!");
        } else {
            console.log("This round is a tie!");
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log("----------------------------------------");
    }

    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    } else if (humanScore < computerScore) {
        console.log("😢 You lost the game.");
    } else {
        console.log("😐 The game is a tie.");
    }
}

playGame();
