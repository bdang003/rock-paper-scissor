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
    console.log(`player's choice: ${playerSelection} \ncomputer's choice: ${computerChoice()}`);
    switch(playerSelection){
        case "ROCK": //situation: player chooses "Rock"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": return "It's a tie!"; break;
                case "Paper": computerWinsQuantity++; updateScore(); break;
                case "Scissors": playerWinsQuantity++; updateScore(); return "You Win! Rock beats Scissors!"; break;
            }
        case "PAPER": //situation: player chooses "Paper"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": playerWinsQuantity++; updateScore(); break;
                case "Paper": return "It's a tie!"; break;
                case "Scissors": computerWinsQuantity++; updateScore(); break;
            }
        case "SCISSORS": //situation: player chooses "Scissors"
            switch(computerChoice()){ //compares player choice to computer choice
                case "Rock": computerWinsQuantity++; updateScore(); break;
                case "Paper": playerWinsQuantity++; updateScore(); break;
                case "Scissors": return "It's a tie!"; break;
            }
    }
}

function createScoreBoard(){
    const container = document.querySelector('#main');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    div.id = "scoreboardContainer";
    h1.id = "scoreboardHeader";
    p.id = "scoreboardDisplay";
    h1.textContent="Current Score:\n";
    p.textContent=`Player: ${playerWinsQuantity} Computer: ${computerWinsQuantity}`;
    div.appendChild(h1);
    div.appendChild(p);
    container.appendChild(div);
    scoreboardCreated = true;
}

function updateScore(){
    document.getElementById('scoreboardDisplay').innerHTML = `Player: ${playerWinsQuantity} Computer ${computerWinsQuantity}`;
}

function declareWinner(){ //displays alert box with winner based on final score
    if(playerWinsQuantity > computerWinsQuantity) window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nYou win!`);
    else if(playerWinsQuantity < computerWinsQuantity) window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nYou lose!`);
    else window.alert(`Final Score:\nPlayer: ${playerWinsQuantity} Computer: ${computerWinsQuantity}\nIt's a tie!`);
}

//global variables declared
let playerWinsQuantity = 0;
let computerWinsQuantity = 0;
let scoreboardCreated = false;
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => choice.addEventListener('click', playRound));

