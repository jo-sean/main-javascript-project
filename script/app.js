// Author: Sean Perez

const WIN = "win", LOSE = "lose", ROCK = "rock", PAPER = "paper", SCISSORS = "scissors";


// Func that randomly selects Computer's choice in the game rock, paper, scissors 
function computerPlay() {
    let playOptions = [ROCK, PAPER, SCISSORS],
        playIndex = Math.floor(Math.random() * playOptions.length);

    return playOptions[playIndex];
};


// Func plays one round of rock, paper, scissors comparing the choice from human player vs computer's randomly seclected choice
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

    // Compares player's input vs randomly seclected choice for the computer and records the outcome of win or lose. 
    // If tied or invalid, returns false
    switch (playerChoice) {
        case ROCK:
            if (computerChoice === SCISSORS) {
                outcome = WIN;
            } else {
                outcome = LOSE;
            }
            break;
        case PAPER:
            if (computerChoice === ROCK) {
                outcome = WIN;
            } else {
                outcome = LOSE;
            }
            break;
        case SCISSORS:
            if (computerChoice === PAPER) {
                outcome = WIN;
            } else {
                outcome = LOSE;
            }
            break;
        default:
            outcome = false;
    };

    switch (outcome) {
        case WIN:
            return `You ${outcome}, ${playerChoice} beats ${computerChoice}`;
        case LOSE:
            return `You ${outcome}, ${computerChoice} beats ${playerChoice}`;
        default:
            return errMessage;
    };
};

// Plays until there have been 5 valid rounds; ties, invalid inputs, etc do not count
function game() {

    console.log(`Welcome to the game of Rock-Paper-Scissors. To play, type either: Rock, Paper, or Scissors. You will play 5 rounds against THE COMPUTER. Good luck!!`);

    let playerName = prompt("What is your name?") || "Human Player",
        score = {
            Player: 0,
            Computer: 0
        },
        playerSelection,
        winner = "Computer",
        quitMsg = "Game terminated, thanks for playing!";

    if (playerName === null) {
        return console.log(quitMsg);
    }

    console.log(`Let the game BEGIN! ${playerName} vs THE COMPUTER`);

    while (score.Player + score.Computer !== 5) {
        playerSelection = prompt(`Round: ${(score.Player + score.Computer) + 1} - ${playerName}, what is your move?`);

        if (playerSelection === null) {
            return console.log(quitMsg);
        }

        console.log("Rock..Paper..Scissors....", playerSelection);
        outcome = playRound(playerSelection, computerPlay());
        console.log(outcome);

        // Records valid wins or loses; if invalid, re-starts loop
        if (outcome.includes("try again")) {
            continue;
        } else if (outcome.includes(WIN)) {
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
