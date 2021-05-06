function computerPlay(){  //generates random choice for computer opponent (rock/paper/scissors)
    switch(Math.floor(Math.random()*3)){
        case 0: return "Rock"; break;
        case 1: return "Paper"; break;
        case 2: return "Scissors"; break;
    }
}

function playRound(playerSelection, computerSelection){ //compares choice between the player's and computer's choice
    console.log(`player's choice: ${playerSelection} \ncomputer's choice: ${computerSelection}`);
    switch(playerSelection){
        case "ROCK": //situation: player chooses "Rock"
            switch(computerSelection){ //compares player choice to computer choice
                case "Rock": return "It's a tie!"; break;
                case "Paper": computerWinsQuantity++; return "You Lose! Paper beats Rock"; break;
                case "Scissors": playerWinsQuantity++; return "You Win! Rock beats Scissors!"; break;
            }
        case "PAPER": //situation: player chooses "Paper"
            switch(computerSelection){ //compares player choice to computer choice
                case "Rock": playerWinsQuantity++; return "You Win! Paper beats Rock!"; break;
                case "Paper": return "It's a tie!"; break;
                case "Scissors": computerWinsQuantity++; return "You Lose! Rock beats Paper!"; break;
            }
        case "SCISSORS": //situation: player chooses "Scissors"
            switch(computerSelection){ //compares player choice to computer choice
                case "Rock": computerWinsQuantity++; return "You Lose! Rock beats Scissors"; break;
                case "Paper": playerWinsQuantity++; return "You Win! Scissors beats Paper"; break;
                case "Scissors": return "It's a tie!"; break;
            }
    }
}

function declareWinner(){ //displays alert box with winner based on final score
    if(playerWinsQuantity > computerWinsQuantity) window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nYou win!`);
    else if(playerWinsQuantity < computerWinsQuantity) window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nYou lose!`);
    else window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nIt's a tie!`);
}

function game(){ //initiates game
    playerWinsQuantity = 0;
    computerWinsQuantity = 0;
    for(let i = 0; i<5; i++){ //loops game for a total of 5 rounds
        let playerSelection = window.prompt(`Round ${i+1}:\nPlayer's Score: ${playerWinsQuantity} Computer's Score: ${computerWinsQuantity}\nEnter Rock, Paper, or Scissors:`).toUpperCase(); //takes user input
        const computerSelection = computerPlay(); //creates computer choice
        console.log(playRound(playerSelection, computerSelection)); //initiates player vs computer choice and logs out victory condition;
    }
    declareWinner(); //outputs alert box regarding winner after 5 rounds
}

//global variables declared
let playerWinsQuantity;
let computerWinsQuantity;
game(); //starts game