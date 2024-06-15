let boeken = [
    {
        titel: "The theory of Everthing",
        auteur: "Stephen Hawking",
        gelezen: "ja"
    },
    {
        titel: "12 rules of life",
        auteur: "Stephen Hawking",
        gelezen: "ja"
    }
];

let boekenLijst = document.getElementById("boekenlijst");

boeken.forEach(boek => {
    let li = document.createElement("li");
    li.textContent = `Titel ${boek.titel}, Auteur: ${boek.auteur}, gelezen: ${boek.gelezen}`;

    boekenLijst.appendChild(li);
})