//string length

function comprimentoString(string) {
    if (!string || typeof string === "number") {
        return;
    }
    return string.length
}

function calculaAreaRetangulo(l, a) {
    return l * a;
}

console.log(calculaAreaRetangulo(12, 4));

function calculaPH(valor) {
    if (typeof valor !== "number"){
        return;
    }
    
    if (valor === 7) {
        return "Neutro";
    } else if (valor < 7) {
        return "Ácido";
    } else if (valor > 7 && valor < 9) {
        return "Alcalino"
    } else {
        return "Básico";
    }
}

function concatenarStrings(a, b) {
    return a + " " + b;
}

console.log(concatenarStrings("Bom", "dia"));

function somar(a, b) {
    return a + b;
}

function convertToFarenheit(temp) {
    return temp * 9/5 + 32;
}

console.log(convertToFarenheit(10));


//meses

function showMonth(month) {
    switch (month) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        default:
            return "Invalid input";
    }
}
console.log(showMonth(2));

function showWeekDay(day) {
    switch (day) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-Feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Invalid input";
    }
}
console.log(showWeekDay(4));