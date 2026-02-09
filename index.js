// // 1. Summer tre tall 
// // Lag en JavaScript-funksjon som summerer tre tall som brukeren 
// // skriver inn via tastaturet. Bruk prompt for å ta inn tallene.

// function tall() {
//     let t1 = Number(prompt("skriv tall1"))
//     let t2 = Number(prompt("skriv tall2"))
//     let t3 = Number(prompt("skriv tall3"))
//     return (t1 + t2 + t3)
// }
// console.log(tall());

// // 2. Generer to tilfeldige tall mellom 0 og 10 ved hjelp av Math.random(). 
// // Lag en funksjon som sammenligner disse tallene og viser et resultat: 

// function rndm() {
//     let tall1 = Math.round(Math.random()*10)
// console.log(tall1);
//     let tall2 = Math.round(Math.random()*10)
// console.log(tall2);
//     if (tall1 < tall2) {
//         return "tall1 er større enn tall2"
//     } else if (tall2 < tall1) {
//         return "tall2 er større enn tall1"
//     } if (tall2 = tall1) {
//         return "tallene er like"
//     }
// }

// console.log(rndm());

// 3. Kalkulator 
// Lag en kalkulatorfunksjon som tar to tall fra brukeren via prompt, 
// samt en operasjon (+, -, * eller /). Funksjonen skal returnere riktig resultat basert på operasjonen. 

// let tall1 = Number(prompt("Skriv tall1"))
// let tall2 = Number(prompt("Skriv tall2"))
// let matematiskOperatør = Number(prompt("Skriv et matematisk tegn (+ eller - eller / eller *)"))

// function kalk() {
//    if (matematiskOperatør == "+") {
//     return (tall1 + tall2)
//    } else if (matematiskOperatør == "-") {
//     return (tall1 - tall2)
//    } else if (matematiskOperatør == "/") {
//     return (tall1 / tall2)
//    } else if (matematiskOperatør == "*") {
//     return (tall1 * tall2)
//    } else {
//     return ("Skriv et gyldig tegn")
//    }
// }
//    console.log(kalk());

// 4. Lag en JavaScript-funksjon som genererer et tilfeldig tall 
// mellom to verdier som brukeren skriver inn via tastaturet. 
// Bruk Math.random() og While Loop i funksjonen. 

// let minVerdi = Number(prompt("Skriv inn min verdi: "))
// let maxVerdi = Number(prompt("Skriv inn max verdi: "))
// while (minVerdi >= maxVerdi) {
//     alert("Min verdi må være mindre enn max verdi. Vennligst prøv igjen.")
//     minVerdi = Number(prompt("Skriv inn min verdi: "))
//     maxVerdi = Number(prompt("Skriv inn max verdi: "))
// } 
// function tilfeldigTall(minVerdi, maxVerdi) {
//     return Math.floor(Math.random() * (maxVerdi - minVerdi + 1)) + minVerdi
// }
// console.log(`Tilfeldig tall mellom ${minVerdi} og ${maxVerdi} er: ${tilfeldigTall(minVerdi, maxVerdi)}`);

// 5. Lag en funksjon som genererer 10 tilfeldige tall mellom 1 og 20 ved hjelp av Math.random() og en for-løkke. Funksjonen skal finne og returnere summen av disse tallene

// function rndm_sum() {
//   let sum = 0;
//   let numbers = [];
//   for (let i = 0; i < 10; i++) {
//     let tall = Math.ceil(Math.random() * 20);
//     numbers.push(` ${tall}`);
//     sum += tall;
//   }
//   alert(`De tilfeldige tallene er:${numbers}. Summen er ${sum}.`);
// }

// console.log(rndm_sum());

// 6. Gjett det tilfeldige tallet

// function rndm() {
//     let rndmTall = Math.round(Math.random() * 100)
//     console.log(rndmTall);
//     let mittTall = Number(prompt("Skriv ett tall"))
//     while (true) {
//     if (rndmTall < mittTall) {
//         mittTall = Number(prompt("Skriv ett mindre tall"))
//     } else if (rndmTall > mittTall) {
//         mittTall = Number(prompt("Skriv ett større tall"))
//     } else {
//         alert("Gratulerer")
//         break;
//     }
// }

// } 

// rndm();

// 7. Finn tall over 10 

function tall() {
    let num1 = Number(prompt("skriv num1"))
    let num2 = Number(prompt("skriv num1"))
    let num3 = Number(prompt("skriv num1"))
    let num4 = Number(prompt("skriv num1"))
    let num5 = Number(prompt("skriv num1"))
    // let numbers = [num1, num2, num3, num4, num5]

    
    
    if (num1 < 10) {
        alert("num1 er større enn 10")
    } if ((num2 > 10)) {
        alert("num2 er større enn 10")
    } if ((num3 > 10)) {
        alert("num3 er større enn 10")
    } if ((num4 > 10)) {
        alert("num4 er større enn 10")
    } if ((num5 > 10)) {
        alert("num5 er større enn 10")
    }
}

