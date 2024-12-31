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

    let a = prompt("Choose 'r', 'p' or 's'");

    let result;

    if (a ==  "r"){

        result = "Rock";

    } else if (a=='p'){

        result = "Paper";

    } else if (a== 's') {
    
        result = "Scissors";
    } else {

        result = "That's not a valid choice.";
    }

    return result;

}

