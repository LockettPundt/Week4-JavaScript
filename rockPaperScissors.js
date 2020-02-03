// takes 2 players throws and decides who wins, if anyone.

function rockPaperScissors(player1, player2) {
    let message = ``;
    let options = ["rock", "paper", "scissors"];
    if (options.includes(player1.toLowerCase()) && options.includes(player2.toLowerCase())) {
        if (player1 === player2) {
            return `Draw!!`;
        }
    } else {
        return `One of the inputs is not valid`;
    }
        switch (player1) {
            case "rock":
                if (player1 === "rock" && player2 === "paper") {
                    message = `Player 2 wins with ${player2} over ${player1}!`;
                    break;
                }
            case "scissors":
                if (player1 === "scissors" && player2 === "rock") {
                    message = `Player 2 wins with ${player2} over ${player1}!`;
                    break;
                }
            case "paper":
                if (player1 === "paper" && player2 === "scissors") {
                    message = `Player 2 wins with ${player2} over ${player1}!`;
                    break;
                }
            default:
                message =`Player 1 wins with ${player1} over ${player2}!`;
                break;

        }
    return message;
}

console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("paper", "scissors"));
