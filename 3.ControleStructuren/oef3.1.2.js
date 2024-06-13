let geboortedatum = prompt("Voer geboortjaar in (YYYY-MM-DD): ")

if (!geboortedatum || !/^\d{4}-\d{2}-\d{2}$/.test(geboortedatum)) {
    alert("Ongeldige invoer. Voer alstublieft een geldige geboortedatum in (YYYY-MM-DD).");
} else{
    let geboortedatumDate = new Date(geboortedatum);
    if (isNaN(geboortedatumDate.getTime())) {
        alert("Weeral ongeldig tettekop")
    }else{
        let huidigeDatum = new Date();
        let leeftijd = huidigeDatum.getFullYear() - geboortedatumDate.getFullYear();
        let maandveschil = huidigeDatum.getMonth() + geboortedatumDate.getMonth();
        let dagverschil = huidigeDatum.getDate() - geboortedatumDate.getDate();

        if(maandveschil < 0 || (maandveschil === 0 && dagverschil < 0)){
            leeftijd--;
        }
        if (leeftijd > 20){
            alert("oud genoeg chappie")
        } else {
            alert("Je bent te jong voor phub moatje")
        }
    }
}

let huidigeJaar = new Date().getFullYear();

let leeftijd = huidigeJaar - geboortejaar;

if (leeftijd > 20){
    alert("Je bent oud genoeg voor pornhub");
} else {
    alert("je mag niet op deze childfriendly site");
}