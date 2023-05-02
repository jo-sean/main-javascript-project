// Author: Sean Perez


function computerPlay() {
    let playOptions = ["Rock", "Paper", "Scissors"],
        playIndex = Math.floor(Math.random() * 3);

    return playOptions[playIndex];
};


function playRound(playerSelection, computerSelection) {
    const errMessage = `You have typed word or number that is not recognized. Please try again with one of the following:
    * Rock
    * Paper
    * Scissors`;

    let playerChoice,
        computerChoice = computerSelection.toLowerCase(),
        outcome = undefined;

    if (typeof playerSelection === "string") {
        playerChoice = playerSelection.toLowerCase();
    };

    if (playerChoice === computerChoice) {
        return "It is a tied, try again!";
    };

    switch (playerChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                outcome = "win";
            } else {
                outcome = "lose";
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                outcome = "win";
            } else {
                outcome = "lose";
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                outcome = "win";
            } else {
                outcome = "lose";
            }
            break;
        default:
            outcome = false;
    };

    switch (outcome) {
        case "win":
            return `You ${outcome}, ${playerChoice} beats ${computerChoice}`;
        case "lose":
            return `You ${outcome}, ${computerChoice} beats ${playerChoice}`;
        default:
            return errMessage;
    };
};


function game() {

    console.log(`Welcome to the game of Rock-Paper-Scissors. To play, type either: Rock, Paper, or Scissors. You will play 5 rounds against THE COMPUTER. Good luck!!`);

    let playerName = prompt("What is your name?"),
        score = {
            Player: 0,
            Computer: 0
        },
        playerSelection, winner = "Computer", quitMsg = "Game terminated, thanks for playing!";

    if (playerName === null) {
        return console.log(quitMsg);
    }

    console.log(`Let the game BEGIN! ${playerName} vs THE COMPUTER`);


    while (score.Player + score.Computer !== 5) {
        playerSelection = prompt(`${playerName}, what is your move?`);

        if (playerSelection === null) {
            return console.log(quitMsg);
        }

        console.log("Rock..Paper..Scissors....", playerSelection);

        outcome = playRound(playerSelection, computerPlay());

        console.log(outcome);

        if (outcome.includes("try again")) {
            continue;
        } else if (outcome.includes("win")) {
            score.Player = score.Player + 1;
        } else {
            score.Computer = score.Computer + 1;
        };

        console.log(`Current score: 
        ${playerName}: ${score.Player}
        Computer: ${score.Computer}`);
    };

    if (score.Player > score.Computer) {
        winner = playerName;
    };

    console.log(`Game over! Overall winner was ${winner}. 
    \Final score is ${score.Player} for ${playerName} and ${score.Computer} for Computer. 
    \Thanks for playing, come play again!`)
};

game();
