const calendarBody = document.getElementById('calendar-body');

const spreuken = [
    "spreuk 1: Vrolijk kerstfeest",
    "Spreuk 2: Geluk is als sneeuw, het komt zachtjes naar beneden.",
    "Spreuk 3: De beste manier om Kerst te vieren is met vrienden en familie.",
    "Spreuk 4: Mogen al je wensen uitkomen!",
    "Spreuk 5: Een tijd van vreugde, een tijd van delen.",
    "Spreuk 6: De magie van Kerst zit in de lucht!",
    "Spreuk 7: Het is de meest geweldige tijd van het jaar.",
    "Spreuk 8: Geniet van de kleine dingen.",
    "Spreuk 9: Laat je hart stralen van vreugde.",
    "Spreuk 10: Kerst is liefde in actie.",
    "Spreuk 11: Vrede en liefde voor iedereen.",
    "Spreuk 12: Vrolijke Kerstdagen en een Gelukkig Nieuwjaar!",
    "Spreuk 13: Het seizoen van geven en vergeven.",
    "Spreuk 14: Laat je ziel schitteren als een kerstster.",
    "Spreuk 15: Een tijd voor familie en vrienden.",
    "Spreuk 16: Kerstmis is een gevoel.",
    "Spreuk 17: Geniet van de warmte van Kerstmis.",
    "Spreuk 18: De geur van versgebakken koekjes.",
    "Spreuk 19: Een tijd van hoop en vreugde.",
    "Spreuk 20: Versier je hart met liefde.",
    "Spreuk 21: Het wonder van Kerstmis.",
    "Spreuk 22: Laten we het seizoen vieren met vreugde.",
    "Spreuk 23: Een tijd van reflectie en dankbaarheid.",
    "Spreuk 24: Fijne feestdagen en een gelukkig nieuwjaar!"
];

let number = 1;
for (let i = 0; i < 4; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        let cell = document.createElement('td');
        cell.textContent = number;
        cell.addEventListener('click', function() {
            let randomIndex = Math.floor(Math.random() * spreuken.length);
            cell.textContent = spreuken[randomIndex];
            cell.classList.add('clicked');
            cell.style.cursor = 'default';
            cell.removeEventListener('click', arguments.callee);
        });
        row.appendChild(cell);
        number++;
    }
    calendarBody.appendChild(row);
}
