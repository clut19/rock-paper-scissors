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

console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());
console.log (getComputerChoice());