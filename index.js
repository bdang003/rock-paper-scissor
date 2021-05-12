function computerChoice(){  //generates random choice for computer opponent (rock/paper/scissors)
    switch(Math.floor(Math.random()*3)){
        case 0: return "Rock"; break;
        case 1: return "Paper"; break;
        case 2: return "Scissors"; break;
    }
}

function playRound(){ //compares choice between the player's and computer's choice
    let playerSelection = this.id.toUpperCase();
    if(!scoreboardCreated){
        createScoreBoard();
    }
    switch(playerSelection){
        case "ROCK": //situation: player chooses "Rock"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": updateScore('Tied'); break;
                case "Paper": computerWinsQuantity++; updateScore('Round lost! Paper beats Rock'); break;
                case "Scissors": playerWinsQuantity++; updateScore('Round won! Rock beats Paper'); break;
            }
        case "PAPER": //situation: player chooses "Paper"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": playerWinsQuantity++; updateScore('Round won! Paper beats Rock'); break;
                case "Paper": updateScore('Tied'); break;
                case "Scissors": computerWinsQuantity++; updateScore('Round Lost! Scissors beats Paper'); break;
            }
        case "SCISSORS": //situation: player chooses "Scissors"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": computerWinsQuantity++; updateScore('Round lost! Rock beats Scissors'); break;
                case "Paper": playerWinsQuantity++; updateScore('Round won! Scissors beats Rock'); break;
                case "Scissors": updateScore('Tied'); break;
            }
    }
}

function createScoreBoard(){
    const container = document.querySelector('#main');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    div.id = "scoreboardContainer";
    h1.id = "scoreboardHeader";
    p1.id = "playRecapDisplay";
    p2.id = "scoreboardDisplay";
    h1.textContent="Current Score:\n";
    p2.textContent=`Player: ${playerWinsQuantity} Computer: ${computerWinsQuantity}`;
    div.appendChild(h1);
    div.appendChild(p1);
    div.appendChild(p2);
    container.appendChild(div);
    scoreboardCreated = true;
}

function updateScore(playRecap){
    document.getElementById('playRecapDisplay').innerHTML = playRecap;
    document.getElementById('scoreboardDisplay').innerHTML = `Player: ${playerWinsQuantity} Computer ${computerWinsQuantity}`;
}

//global variables declared
let playerWinsQuantity = 0;
let computerWinsQuantity = 0;
let scoreboardCreated = false;
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playRound));

