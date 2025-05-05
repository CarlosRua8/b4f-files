/* let age = 18;
if (age >= 18) {
    console.log ("Maior de idade");
} else {
    console.log ("Menor de idade");
} */

/* let n = 7;
if (n % 2 === 0) {
    console.log ("Par");
} else {
    console.log ("Ímpar");
} */

let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;
/*console.log (scoreDolphins, scoreKoalas);*/
if (scoreDolphins === scoreKoalas) {
    console.log ("Ambos ganham o troféu")
} else if (scoreKoalas > scoreDolphins) {
    console.log ("Os Koalas ganham o troféu")
} else {
    console.log ("Os Dolphins ganham o troféu");
}

/*grade >= && grade <=*/

let grade = 67;

if (grade >= 90 && grade <= 100) {
    console.log("A")
} else if (grade >= 70 && grade <= 89) {
    console.log("B")
} else if (grade >= 60 && grade <= 69) {
    console.log("C")
} else if (grade >= 50 && grade <= 59) {
    console.log("D")
} else if (grade >= 0 && grade <= 49) {
    console.log("F")
}

/**switch case */

let operation = "-";

switch (operation){
    case "+":
        console.log("Add numbers");
        break;
    case "-":
        console.log("Subtract numbers");
        break;
    case "*":
        console.log("Multiply numbers");
        break;
    case "/":
        console.log("Divide numbers");
        break;
    default:
        console.log("Invalid number")
        break;
}

let month = 2;

switch (month){
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Invalid");
        break;
}

/*dias da semana*/

let weekDay = 6;

switch (weekDay){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input")
        break;
}


/* loopssssss */

let i = 10;
while (i > 0) {
    console.log(i);
    i;
}
console.log("Lift off!");



// let totalHp = 0;
// const addHeal = 10;
// while (totalHp < 100) {
//     totalHp += addHeal;
//     console.log("Current Health:", totalHp);
// }
// console.log(`Total health: ${totalHp}`);


// FOR loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// game

Math.random()

alert

prompt







