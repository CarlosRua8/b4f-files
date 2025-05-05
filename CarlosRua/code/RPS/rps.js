let play = prompt("Rock, Paper, Scissors").toLowerCase();

function getComputerMove(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "Invalid input";
    }
}

let cpuMove = getComputerMove()

function playRound(playerMove, cpuMove) {
    if (playerMove === cpuMove) {
        alert("Draw!")
        return "Draw"
    } else if (playerMove === "rock" && cpuMove === "paper") {
        alert("You lost")
        play = prompt("Rock, Paper, Scissors")
        return "Cpu wins"
    } else if (playerMove === "rock" && cpuMove === "scissors" ) {
        alert("You won!")
        play = prompt("Rock, Paper, Scissors")
        return "Player wins"
    } else if (playerMove === "paper" && cpuMove === "rock") {
        alert("You won!")
        play = prompt("Rock, Paper, Scissors")
        return "Player wins"
    } else if (playerMove === "paper" && cpuMove === "scissors") {
        alert("You lost")
        play = prompt("Rock, Paper, Scissors")
        return "Cpu wins"
    } else if (playerMove === "scissors" && cpuMove === "rock") {
        alert("You lost")
        play = prompt("Rock, Paper, Scissors")
        return "Cpu wins"
    } else (playerMove === "scissors" && cpuMove === "paper") {
        alert("You won!")
        play = prompt("Rock, Paper, Scissors")
        return "Player wins"
    } 
}

console.log(playRound(play, cpuMove));