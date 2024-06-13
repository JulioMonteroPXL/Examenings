let randomSentence = prompt("give a random sentence");

let spaceIndex= randomSentence.indexOf(" ") + 1;

if (spaceIndex === 0) {
    alert("Geen spatie gevonden in de ingevoerde zin.");
} else {
    // Toon de locatie van de eerste spatie in een alert-venster
    alert("De eerste spatie bevindt zich op positie: " + spaceIndex);
}
