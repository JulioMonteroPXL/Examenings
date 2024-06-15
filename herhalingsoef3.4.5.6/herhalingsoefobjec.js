let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];
//1
function filterArrayInGenk(klantenArray) {
    return klantenArray.filter(klant => klant.stad === 'Genk');
}
let klantenInGenk = filterArrayInGenk(klanten);
console.log("Klanten die in Genk wonen:", JSON.stringify(klantenInGenk, null, 2));
console.table(klantenInGenk);


//2


function  lengteAchternaam (klantenArray) {
    return klantenArray.reduce((totaal,klant) =>totaal + klant.naam.length, 0)
}

let TotaalAantalLetters = lengteAchternaam(klanten);
console.log("totaal aantal letters in de familienamen: " , TotaalAantalLetters);

//3

function pasStedenAanAntwerpen(klantenArray) {
    klantenArray.forEach((klant, index) => {
        klant.stad = 'Antwerpen'.repeat(index + 1).split('Antwerpen').join('Antwerpen-').slice(0,-1);
    });
    return klantenArray;
}

let aangepasteStad = pasStedenAanAntwerpen(klanten);

console.log("klanten met aangepaste steden: ", JSON.stringify(aangepasteStad, null, 2));

//4

function herhaling(klantenArray) {
    let concatenatedNames = '';
    klantenArray.forEach((klant, index) => {
        if ( concatenatedNames.length % 2 ===0 && concatenatedNames.length !== 0){
            concatenatedNames += klant.voornaam.toUpperCase();
        }else{
            concatenatedNames += klant.voornaam;
        }
        console.log(concatenatedNames)
    });
}

herhaling(klanten);

//5

function genereerParagraaf (klantenArray) {
    klantenArray.forEach(klant => {
        let p = document.createElement("p");
        p.textContent = `Voornaam: ${klant.voornaam}, Naam: ${klant.naam}, Stad: ${klant.stad}`;
        document.body.appendChild(p);
    });
}

genereerParagraaf(klanten);