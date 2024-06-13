let geboortejaar = parseInt(prompt("Voer geboortjaar in: "))

if (isNaN(geboortejaar)) {
    alert("voer iets gelding in eh ");


}

let huidigeJaar = new Date().getFullYear();

let leeftijd = huidigeJaar - geboortejaar;

if (leeftijd > 20){
    alert("Je bent oud genoeg voor pornhub");
} else {
    alert("je mag niet op deze childfriendly site");
}