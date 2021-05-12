function computerChoice(){  //generates random choice for computer opponent (rock/paper/scissors)
    switch(Math.floor(Math.random()*3)){
        case 0: return "Rock"; break;
        case 1: return "Paper"; break;
        case 2: return "Scissors"; break;
    }
}

function playRound(){ //compares choice between the player's and computer's choice
    let playerSelection = this.id;
    console.log(`player's choice: ${playerSelection} \ncomputer's choice: ${computerChoice()}`);
    switch(playerSelection){
        case "ROCK": //situation: player chooses "Rock"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": return "It's a tie!"; break;
                case "Paper": computerWinsQuantity++; return "You Lose! Paper beats Rock"; break;
                case "Scissors": playerWinsQuantity++; return "You Win! Rock beats Scissors!"; break;
            }
        case "PAPER": //situation: player chooses "Paper"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": playerWinsQuantity++; return "You Win! Paper beats Rock!"; break;
                case "Paper": return "It's a tie!"; break;
                case "Scissors": computerWinsQuantity++; return "You Lose! Rock beats Paper!"; break;
            }
        case "SCISSORS": //situation: player chooses "Scissors"
            switch(computerChoice()){ //compares player choice to computer choice
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

//global variables declared
let playerWinsQuantity;
let computerWinsQuantity;
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playRound));

