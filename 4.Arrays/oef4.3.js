//et de array uit de vorige oefening om naar een string met een linebreak tussen iedere
// opleiding. Geef de string weer op de webpagina

let arr_departementen = ["digital","Business","MAD","Educarion","lgbt","digital","digital","digital",]

arr_departementen.push("BAchelor Multimedia");
let departementenString = arr_departementen.join('<br>');

console.log("opleidingen op penis x-large school: " + arr_departementen);
console.log("aantal opleidingen: " + arr_departementen.length);

document.getElementById('departementen').innerHTML= departementenString;