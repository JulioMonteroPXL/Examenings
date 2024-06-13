//Zoek zelf de werking van de ‘splice-methode’ op via het internet (W3Schools of MDN Web
// Docs). Maak een werkend voorbeeldscript met deze methode.


    document.addEventListener("DOMContentLoaded", function() {
    // Maak een array met enkele fruitsoorten
    let fruitArray = ["Appel", "Banaan", "Kers", "Druif", "Mango"];

    // Voeg een fruitsoort toe op de tweede positie
    fruitArray.splice(1, 0, "Aardbei");
    console.log("Na toevoegen van Aardbei:", fruitArray);

    // Verwijder één fruitsoort vanaf de derde positie
    fruitArray.splice(2, 1);
    console.log("Na verwijderen van de derde fruitsoort:", fruitArray);

    // Vervang de laatste fruitsoort door "Perzik"
    fruitArray.splice(fruitArray.length - 1, 1, "Perzik");
    console.log("Na vervangen van de laatste fruitsoort door Perzik:", fruitArray);

    // Toon de array op de webpagina
    let ul = document.createElement("ul");
    fruitArray.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
});
    document.getElementById("fruitlijst").appendChild(ul);
});
