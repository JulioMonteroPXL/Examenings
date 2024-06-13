let zin1, zin2, zin3;

zin1 = "Dit is de eerste zin";
zin3 = "Dit is de derde zin";
zin2 = "Dit is de tweede zin";

console.log(zin1 + "\n" + zin2 +"\n" + zin3 )

let newP = document.createElement("p");


newP.id = "test"
let tekst = document.createTextNode(zin1 + "\n" + zin2 + "\n" + zin3 );

newP.appendChild(tekst)
document.getElementById("startHeader").appendChild(newP);


/*
// Maak een nieuwe paragraaf aan.
let nieuweParagraaf = document.createElement(“p”);
// Geef de paragraaf optioneel een id (bijvoorbeeld ‘test’).
nieuweParagraaf.id = “test”;
// Maak een tekstnode aan.
let tekstParagraaf = document.createTextNode(“Dit is een stukje tekst”);
// Voeg de tekstnode toe aan de nieuwe paragraaf.
nieuweParagraaf.appendChild(tekstParagraaf);
// Voeg de paragraaf toe aan de header als laatste child-element.
document.getElementById(“startheader”).appendChild(nieuweParagraaf);*/
