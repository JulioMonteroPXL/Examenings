function isVijftig(a,b){
    if (a === 50 || b === 50 || (a+b) === 50){
        return 'hoera vijftig'
    }else {
        return 'helaas geen vijftig'
    }
}

let getal1 = parseInt(prompt("geef een getal tussen 0 en 100 : "));
let getal2 = parseInt(prompt("geef een getal tussen 0 en 100 : "));

if (isNaN(getal1) || isNaN(getal2) || getal1 < 0 || getal1 > 100 || getal2 < 0 || getal2 > 100){
    alert("ongeldige invoer")
} else {
    let result = isVijftig(getal1, getal2);
    document.getElementById("result").textContent = `De ingevoerde getallen zijn ${getal1} en ${getal2}. ${result}`;


}