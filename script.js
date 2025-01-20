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

function getHumanChoice(){

    let a = prompt("Choose rock, paper or scissors");

    a = a.toLowerCase();

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


    console.log (humanChoice);
    console.log (computerChoice);


    if (humanChoice == "Rock"){
        
        switch (computerChoice){

            case "Rock":
                console.log ("You've tied!");
                break;
            case "Paper":
                ++computerScore;
                console.log ("You've lost!");
                break;
            case "Scissors":
                ++humanScore;
                console.log ("You've won!");
                break;
        }
    } else if (humanChoice == "Paper"){

        switch (computerChoice){

            case "Rock":
                ++humanScore;
                console.log ("You've won!");
                break;
            
            case "Paper": 
                console.log ("You've tied!");
                break;

            case "Scissors":
                ++computerScore;
                console.log ("You've lost!");
                break;
        }
    } else if (humanChoice == "Scissors"){
       
        switch (computerChoice){

            case "Rock":
                console.log ("You've lost!");
                ++computerScore;
                break;

            case "Paper":
                console.log ("Youve won!");
                ++humanScore;
                break;
                
            case "Scissors":
                console.log ("You've tied!");
                break;
        }
    } else {

        console.log ("This is not a valid option");
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    for (i=0; i<5; i++) {
        let humanSelection = getHumanChoice();
        if (humanSelection == false) {i--;}
        let computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);

        console.log("Your score is" + " " + humanScore);
        console.log ("Computer score is" + " " + computerScore);
    }

    if (humanScore > computerScore){
        console.log ("You're the winner of the game!");
    } else if (humanScore < computerScore){
        console.log ("You've lost the game.")
    } else {
        console.log ("You've tied the game!");
    }

}

