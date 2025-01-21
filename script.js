function getComputerChoice(){

    let a = Math.random();
    let result;
    if (a <= 0.33 ){
        result = "Paper";

    } else if (a >=0.66){
        result = "Rock";
    } else {
        result = "Scissors";
    }

    return result;

}

function getHumanChoice(a){

    

    let result;

    if (a ==  "rock"){

        result = "Rock";

    } else if (a=='paper'){

        result = "Paper";

    } else if (a== 'scissors') {
    
        result = "Scissors";
    }

    return result;

}



function playRound (humanChoice, computerChoice) {

    const results = document.querySelector("#results");

    

    if (humanChoice == "Rock"){
        
        switch (computerChoice){

            case "Rock":
                break;
            case "Paper":
                ++computerScore;
                break;
            case "Scissors":
                ++humanScore;
                break;
        }
    } else if (humanChoice == "Paper"){

        switch (computerChoice){

            case "Rock":
                ++humanScore;
                break;
            
            case "Paper": 
                break;

            case "Scissors":
                ++computerScore;
                break;
        }
    } else if (humanChoice == "Scissors"){
       
        switch (computerChoice){

            case "Rock":
                ++computerScore;
                break;

            case "Paper":
                ++humanScore;
                break;
                
            case "Scissors":
                break;
        }
    }

  
   

    let announceWinner = document.createElement ("span");
    if (humanScore == 5){
    announceWinner.textContent = "You're the winner!";
    humanScore = 0;
    computerScore = 0;
    } else if (computerScore == 5){
    announceWinner.textContent = "Computer won, you've lost!";
    humanScore = 0;
    computerScore = 0;
    }

    results.appendChild(announceWinner);
    score1.textContent = humanScore;
    score2.textContent = computerScore;
    currentScore1.appendChild(score1);
    currentScore2.appendChild(score2);


}





let humanScore = 0;
let computerScore = 0;
let currentScore1 = document.querySelector("#human");
let currentScore2 = document.querySelector("#computer");
let score1 = document.createElement("div");
let score2 = document.createElement("div");


const button = document.querySelector("#buttons");
button.addEventListener("click", (event)=>{
    let target = event.target;
    let playerChoice = getHumanChoice(target.id);
    let computerChoice = getComputerChoice();
    playRound (playerChoice, computerChoice);

    

});



