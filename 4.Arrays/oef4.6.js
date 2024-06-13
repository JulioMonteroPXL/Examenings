//Verwijder bij de array uit de vorige oefening één hondenras aan het begin én aan het einde
// van de array. Gebruik hiervoor de juiste methodes. Geef daarna de array weer in de console
// én op de webpagina

let nummer = parseInt(prompt("geef een nummer tussen 1 - 10tettekop: "));

let rassen = ["Maltitserm", "Duitse Herder", "tettehond", "homohond", "Beagle",
    "Poedel",
    "Rottweiler",
    "Yorkshire Terrier",
    "Boxer",
    "Dachshund"];

//voeg vij extra in de array op begin
rassen.unshift("Muto", "Roberto")

// Verwijder één hondenras aan het begin van de array
rassen.shift();

// Verwijder één hondenras aan het einde van de array
rassen.pop();


let boodschap = "";

if (nummer >= 1 && nummer <= 10) {
    boodschap = `deze hond heeft nummer ${nummer} is ${rassen[nummer -1 ]}`
} else {
    boodschap= "Sorry, gij zijt een tettekop";
}

console.log("honderassen array: " + rassen);

document.getElementById("boodschap").textContent = boodschap;