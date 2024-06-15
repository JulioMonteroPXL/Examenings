let toonKnop = document.getElementById("toonKnop");
let tekstVak = document.getElementById("tekstvak");
let paraContainer = document.getElementById("paragrafenContainer");


toonKnop.addEventListener("click", function(){
    let ingevoerdeTekst = tekstVak.value;

    let nieuwePara = document.createElement("p");
    nieuwePara.textContent = ingevoerdeTekst;

    paraContainer.appendChild(nieuwePara);
});