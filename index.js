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
                case "Paper": return "You Lose! Paper beats Rock"; break;
                case "Scissors": return "You Win! Rock beats Scissors!"; break;
            }
        case "PAPER": //situation: player chooses "Paper"
            switch(computerSelection){ //compares player choice to computer choice
                case "Rock": return "You Win! Paper beats Rock!"; break;
                case "Paper": return "It's a tie!"; break;
                case "Scissors": return "You Lose! Rock beats Paper!"; break;
            }
        case "SCISSORS": //situation: player chooses "Scissors"
            switch(computerSelection){ //compares player choice to computer choice
                case "Rock": return "You Lose! Rock beats Scissors"; break;
                case "Paper": return "You Win! Scissors beats Paper"; break;
                case "Scissors": return "It's a tie!"; break;
            }
    }
}

function game(){
    let i;
    for(i = 0; i<5; i++){
        let playerSelection;
        playerSelection = window.prompt(`Round ${i+1}: Enter Rock, Paper, or Scissors:`).toUpperCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();







// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
