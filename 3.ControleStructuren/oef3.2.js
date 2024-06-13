let vraag = prompt("Sport je graag (ja/nee)");

let boodschap;

if (vraag === "ja" || vraag === "Ja") {
    alert("Just do it!");
    boodschap = "Just do it";
} else if (vraag === "nee") {
    alert("BLijf ma ligge tettekop");
    boodschap = "BLijf ma ligge tettekop";
}
else {
    alert("Ongeldige antwoord kunt ge nie leze");
}

document.getElementById("boodschap").textContent = boodschap;

