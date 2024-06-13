function zinSplitsen() {
    // Vraag de gebruiker om een random zin in te voeren
    let zin = prompt("Voer een zin in:");

    // Controleer of de zin niet leeg is
    if (!zin) {
        alert("Ongeldige invoer. Voer alstublieft een zin in.");
        return;
    }

    // Vraag de gebruiker om een random getal tot het maximaal aantal tekens van de opgegeven zin
    let maxGetal = zin.length -1;
    let getal = parseInt(prompt(`Voer een getal in tussen 0 en ${maxGetal}:`));

    // Controleer of de invoer geldig is
    if (isNaN(getal) || getal < 0 || getal > maxGetal) {
        alert("Ongeldige invoer. Voer alstublieft een geldig getal in.");
    } else {
        // Splits de zin op basis van het opgegeven random getal
        let deel1 = zin.slice(0, getal);
        let deel2 = zin.slice(getal);

        // Toon de output in een alert-venster
        alert(`De zin gesplitst op positie ${getal}:\nDeel 1: "${deel1}"\nDeel 2: "${deel2}"`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Roep de functie zinSplitsen aan
    zinSplitsen();
});