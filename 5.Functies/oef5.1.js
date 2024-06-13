function vermenigvuldinging (a,b) {
    return a * b

}

let getal1, getal2;

getal1 = 4
getal2 = 2

let result = vermenigvuldinging(getal1, getal2)

// Toon het resultaat op de webpagina
document.getElementById("resultaat").textContent = `De vermenigvuldiging van ${getal1} en ${getal2} is: ${result}`;
