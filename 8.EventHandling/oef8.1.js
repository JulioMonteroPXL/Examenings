let toonKnop = document.getElementById("toonKnop");
let tekstVak = document.getElementById("tekstvak");
let weergaveParagraaf =document.getElementById("weergaveParagraaf");


toonKnop.addEventListener("click", function(){
   let ingevoerdeTekst = tekstVak.value;

   weergaveParagraaf.textContent = ingevoerdeTekst;
});