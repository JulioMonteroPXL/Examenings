let object = {
  naam: "Montero",
  voornaam : "Julio",
    telefoonnummer: '0472880424',
    mailadres : "Julio_montero2@outlook.com"

};

console.log(object);

let tabelBody = document.getElementById("gegevensTabel").getElementsByTagName("tbody")[0];

for (let eigenschap in object) {
  let rij = tabelBody.insertRow();
  let celEigenschap = rij.insertCell(0);
  let celwaarde = rij.insertCell(1);
  celEigenschap.textContent = eigenschap.charAt(0).toUpperCase() + eigenschap.slice(1);
  celwaarde.textContent = object[eigenschap];
}