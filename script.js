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
    } else {

        result = "That's not a valid choice.";
        return false;
    }

    return result;

}

function playRound (humanChoice, computerChoice) {

    const results = document.querySelector("#results");
    const human = document.createElement("div");
    const computer = document.createElement("div");
    const result = document.createElement("div");
    const scoreHuman = document.createElement("div");
    const scoreComputer = document.createElement("div");


    human.textContent = "Your choice was " + humanChoice;
    computer.textContent = "Rival choice was " + computerChoice;

    let finalResult;
    

    if (humanChoice == "Rock"){
        
        switch (computerChoice){

            case "Rock":
                finalResult = "You've tied!";
                break;
            case "Paper":
                ++computerScore;
                finalResult = "You've lost!";
                break;
            case "Scissors":
                ++humanScore;
                finalResult = "You've won!";
                break;
        }
    } else if (humanChoice == "Paper"){

        switch (computerChoice){

            case "Rock":
                ++humanScore;
                finalResult = "You've won!";
                break;
            
            case "Paper": 
                finalResult = "You've tied!";
                break;

            case "Scissors":
                ++computerScore;
                finalResult = "You've lost!";
                break;
        }
    } else if (humanChoice == "Scissors"){
       
        switch (computerChoice){

            case "Rock":
                finalResult = "You've lost!";
                ++computerScore;
                break;

            case "Paper":
                finalResult = "Youve won!";
                ++humanScore;
                break;
                
            case "Scissors":
                finalResult = "You've tied!";
                break;
        }
    } else {

        console.log ("This is not a valid option");
    }

    result.textContent = finalResult;
    scoreHuman.textContent = "Your score is " + humanScore;
    scoreComputer.textContent = "Computer score is " + computerScore;
    results.appendChild(human);
    results.appendChild(computer);
    results.appendChild(result);
    results.appendChild(scoreHuman);
    results.appendChild(scoreComputer);

    let announceWinner = document.createElement ("div");
    if (humanScore == 5){
    announceWinner.textContent = "You're the winner!";
    } else if (computerScore == 5){
    announceWinner.textContent = "Computer won, you've lost!";
    }

    results.appendChild(announceWinner);

}




let humanScore = 0;
let computerScore = 0;



const button = document.querySelector("#buttons");
button.addEventListener("click", (event)=>{
    let target = event.target;
    let playerChoice = getHumanChoice(target.id);
    let computerChoice = getComputerChoice();
    playRound (playerChoice, computerChoice);
});



