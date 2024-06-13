let datum = new Date();
let uur = datum.getHours();
let minuut = datum.getMinutes();
let seconds = datum.getSeconds();

//oeg een nul toe voor enkele cijfers voor minuten en seconden
minuut = minuut < 10 ? '0' + minuut : minuut;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Bepaal het dagdeel
let dagdeel = uur < 12 ? 'voormiddag' : 'namiddag';

// Creëer een welkomszin
let tijdstip = `${uur}:${minuut}:${seconds}`;
let welkomszin = `Welkom! Het is nu ${tijdstip} in de ${dagdeel}.`;

// Toon de welkomszin op de webpagina
document.getElementById("welkom").innerText= welkomszin;