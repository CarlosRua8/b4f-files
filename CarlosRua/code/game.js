let randNum = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Insere um número de 1 a 10");



while (parseInt(guess) !== randNum) {
    if (parseInt(guess) < 1 || parseInt(guess) > 10){
        guess = prompt("Input inválido. Insere de 1 a 10")
    } else {
        guess = prompt("Try again!")
    }
    
}

alert("Correct!")