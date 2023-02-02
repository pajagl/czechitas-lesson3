// tady je místo pro náš program

// Registrační systém

// a. Zeptej se na jméno a poté na věk

let udaje = document.querySelector(".registracniUdaje")

let jmeno = prompt("Zadejte své celé jméno");

let vek = Number(prompt ("Kolik je vám let?"))

udaje.innerHTML += "<p>" + jmeno + ", věk: " + vek + "</p>"


//b. kalkulačka mzdy

let kalkulacka = document.querySelector(".kalkulacka")

// Zadané hodnoty
// let hodiny = 8
// let dny = 21

let hodiny = Number(prompt("Kolik hodin denně odpracujete?"))
let dny = Number(prompt("JKolik dní v měsíci pracujete?"))


let hodinovka = Number(prompt("Jaká je vaše hodinová sazba?"))

let vysledek = (hodiny * dny * hodinovka)

kalkulacka.innerHTML = "Vaše předpokládaná mzda je: " + vysledek



/*
// Poznamky z hodiny

let nadpis = document.querySelector("h1")

let vstupUzivatel = prompt("Zadej nový nadpis")

nadpis.innerHTML = vstupUzivatel


let vysledek = document.querySelector(".vysledekZavodu")

let start = 15
let delka = prompt("Zadej délku dávodu: ")

let konec = (start + delka) % 29

vysledek.innerHTML = konec

*/

