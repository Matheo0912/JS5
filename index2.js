// Funksjoner

function GoodMorgen(parmas) {
    return "Hei"
}

console.log(GoodMorgen());

// lag et js program som kombinerer to tekster

let teskt1 = "serdar "
let tekst2 = "durmus "

console.log(teskt1 + tekst2);

// lag et js program som kombinerer to tekster

function komtotekster(t1, t2) {
    return `${t1}${t2}`
}

console.log(komtotekster(t1, t2));
// skriv en js kode som viser tallene fra 5-8 (5 og 8 er inkludert)

for (let i = 5; i < 9; i++) {
    console.log(i);
}

// skriv en js kode som viser tallene fra 5-8 (5 og 8 er inkludert) Bruk function

let startverdi = 5

let sluttverdi = 8

function forloop(startverdi, sluttverdi) {
    for (let i = startverdi; i <= sluttverdi; i++) {
        console.log(i);
    } 
    return "Alle tallene er skrevet ut"
}

console.log(forloop(startverdi, sluttverdi));

