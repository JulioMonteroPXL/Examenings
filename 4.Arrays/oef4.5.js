//Maak een array met minstens 10 hondenrassen. Vraag aan de bezoeker van je website een
// random nummer tussen 1 en 10. Op basis van het gekozen nummer, krijg de bezoeker het
// bijhorende hondenras uit de array te zien op de webpagina.
// Bouw in dat de bezoeker enkel een getal tussen 1 en 10 kan ingeven. Geeft de bezoeker een
// getal lager dan 1 of hoger dan 10 in, moet de boodschap ‘Sorry, katten niet toegelaten’
// getoond worden op de webpagina.

let nummer = parseInt(prompt("geef een nummer tussen 1 - 10tettekop: "));

let rassen = ["Maltitserm", "Duitse Herder", "tettehond", "homohond", "Beagle",
    "Poedel",
    "Rottweiler",
    "Yorkshire Terrier",
    "Boxer",
    "Dachshund"];

//voeg vij extra in de array op begin
rassen.unshift("Muto", "Roberto")


let boodschap = "";

if (nummer >= 1 && nummer <= 10) {
    boodschap = `deze hond heeft nummer ${nummer} is ${rassen[nummer -1 ]}`
} else {
    boodschap= "Sorry, gij zijt een tettekop";
}

console.log("honderassen array: " + rassen);

document.getElementById("boodschap").textContent = boodschap;