let object = {
    naam: "Montero",
    voornaam : "Julio",
    telefoonnummer: '0472880424',
    mailadres : "Julio_montero2@outlook.com",
    geboortdatum: "21-06-2000",
    lengte: 172,
    gewicht: 71,
    leeftijd: 24,
    Huidskleur : "wit",
    oogkleur: "BRUIN",
    inZinVorm: function () {
        return `mijn naam is ${this.naam} ${this.voornaam} en ik ben geboren op ${this.geboortdatum}. Mijn telefoonnummer is ${this.telefoonnummer} en mijn mailadres is ${this.mailadres}. Via deze gegevens kan je mij altijd contacteren!`+
            `Mijn lengte is ${this.lengte} en mijn gewicht is ${this.gewicht} en ik ben ${this.leeftijd} jaar oud `+
            `ik heb ${this.Huidskleur} kleur en ${this.oogkleur}`
            ;
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



document.getElementById("zin").innerHTML = object.inZinVorm();