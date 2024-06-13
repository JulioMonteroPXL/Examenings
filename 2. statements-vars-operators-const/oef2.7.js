
let prompt1 = parseInt(prompt("geef de eerste random getal"));
let prompt2 = parseInt(prompt("geef de tweede random getal"));

if(isNaN(prompt1) || isNaN(prompt2)) {
    alert("geef een nummer tettekop")
}else {
    let uitkomst = prompt1 * prompt2;
    let optelling = prompt1 + prompt2;
    let aftrekking = prompt1 - prompt2;
    let deling = prompt2 !==0 ? prompt1 / prompt2 : 'Kan niet delen door 0';
    // Toon de uitkomsten op de webpagina
    let resultaatDiv = document.createElement("div");
    resultaatDiv.id = "resultaat";

    resultaatDiv.innerHTML = `
                    <p>De uitkomst van ${prompt1} * ${prompt2} is: ${uitkomst}</p>
                    <p>De uitkomst van ${prompt1} + ${prompt2} is: ${optelling}</p>
                    <p>De uitkomst van ${prompt1} - ${prompt2} is: ${aftrekking}</p>
                    <p>De uitkomst van ${prompt1} / ${prompt2} is: ${deling}</p>
                `;
    document.body.appendChild(resultaatDiv);

let pNode = document.createElement("p");

tekst = document.createTextNode("De uitkomst is: " + uitkomst);
pNode.appendChild(tekst);

document.body.appendChild(pNode);}