let klanten = [
    {voornaam: 'Jasper', naam: 'Beuls', stad: 'Hasselt'},
    {voornaam: 'Kimberly', naam: 'Willems', stad: 'Genk'},
    {voornaam: 'Nicolas', naam: 'Schepers', stad: 'Genk'},
    {voornaam: 'Daniel', naam: 'Morren', stad: 'Diepenbeek'},
    {voornaam: 'Doriene', naam: 'Verhoeven', stad: 'Oudsbergen'},
];

function filterArrayInGenk(klantenArray) {
    return klantenArray.filter(klant => klant.stad === 'Genk');
}
let klantenInGenk = filterArrayInGenk(klanten);
console.log("Klanten die in Genk wonen:", JSON.stringify(klantenInGenk, null, 2));
console.table(klantenInGenk);