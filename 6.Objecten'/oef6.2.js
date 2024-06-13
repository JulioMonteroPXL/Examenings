let object = {
    naam: "Montero",
    voornaam : "Julio",
    telefoonnummer: '0472880424',
    mailadres : "Julio_montero2@outlook.com",
    geboortdatum: "21-06-2000",
    inZinVorm: function () {
        return `mijn naam is ${this.naam} ${this.voornaam} en ik ben geboren op ${this .geboortdatum}. Mijn telefoonnummer is ${this.telefoonnummer} en mijn mailadres is ${this.mailadres}. Via deze gegevens kan je mij altijd contacteren!`;
    }

};

console.log(object);

let tabelBody = document.getElementById("gegevensTabel").getElementsByTagName("tbody")[0];

for (let eigenschap in object) {
    if(typeof object[eigenschap] !== 'function') {}
    let rij = tabelBody.insertRow();
    let celEigenschap = rij.insertCell(0);
    let celwaarde = rij.insertCell(1);
    celEigenschap.textContent = eigenschap.charAt(0).toUpperCase() + eigenschap.slice(1);
    celwaarde.textContent = object[eigenschap];
}

let zin = `mijn naam is ${object.naam} en ik ben geboren op ${object.geboortdatum}. Mijn telefoonnummer is ${object.telefoonnummer} en mijn mailadres is ${object.mailadres}. Via deze gegevens kan je mij altijd contacteren!`;

document.getElementById("zin").innerHTML = object.inZinVorm();