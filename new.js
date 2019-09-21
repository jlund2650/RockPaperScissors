let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const results_div = document.querySelector(".results>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const number = (Math.floor(Math.random() * 3));
    return choice[number];
}

function letterToWord(letter){
    if (letter === "r") return "ROCK";
    if (letter === "p") return "PAPER";
    if (letter === "s") return "SCISSORS";
}

function win(player, computer) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_div.innerHTML = " Your " + letterToWord(player) + " beat the Computer's " + letterToWord(computer) + " . You Win! ";
}


function lose(player, computer) {
   computerScore++;
   playerScore_span.innerHTML = playerScore;
   computerScore_span.innerHTML = computerScore;
   results_div.innerHTML = " The Computer's " + letterToWord(computer) + " beats your " + letterToWord(player) + " . You lose :( ";
}

function tie(player, computer) {
    results_div.innerHTML = "You both picked " + letterToWord(player) + " It's a TIE! ";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
            win(userChoice, computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice, computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            tie(userChoice, computerChoice);
            break;
    }
} 

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    });
    paper_div.addEventListener('click', function() {
        game("p");
    });
    scissors_div.addEventListener('click', function() {
        game("s");
    });
}

main();