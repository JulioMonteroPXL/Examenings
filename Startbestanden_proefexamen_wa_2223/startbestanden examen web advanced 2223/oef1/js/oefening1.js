//Naam: Julio Montero

let quiz = [
    {"id":1  , "vraag":"In welk werelddeel ligt China ?"  , "optie_1": "Azie" , "optie_2": "Europa","optie_3": "Afrika", "antwoord": "Azie" },
    {"id":2  , "vraag":"Welk land ligt rechts van Nederland ?"  , "optie_1": "Belgie" , "optie_2": "Duitsland","optie_3": "Polen", "antwoord": "Duitsland" },
    {"id":3  , "vraag":"In welk land ligt Los Angeles ?"  , "optie_1": "Rusland" , "optie_2": "Zweden","optie_3": "Amerika", "antwoord": "Amerika" },
    {"id":4  , "vraag":"Welk land heeft de vorm van een laars ?"  , "optie_1": "Engeland" , "optie_2": "Italie","optie_3": "Denemarken", "antwoord": "Italie" },
    {"id":5  , "vraag":"Van welk land is Moskou de hoofdstad ?"  , "optie_1": "Kroatie" , "optie_2": "Rusland","optie_3": "Spanje", "antwoord": "Rusland" }
];

	
window.addEventListener("load", handleWindowLoad);

function handleWindowLoad() {
    document.getElementById('vragenKnop').addEventListener('click', genereerVragen);
}

function genereerVragen() {
    const aantalVragen = parseInt(document.querySelector('input[type="number"]').value);
    const vragenOutput = document.getElementById('vragen');

    vragenOutput.innerHTML = ''; // Maak de huidige vragen leeg



    if (aantalVragen > 5){
        alert('er zijn maar max 5 vragen')
        return;
    }

    const shuffledQuiz = quiz.sort(() => 0.5 - Math.random()).slice(0, aantalVragen);

    const quizTitle = document.createElement('h3');
    quizTitle.textContent = 'De grote landenquiz';
    vragenOutput.appendChild(quizTitle);
    const hr = document.createElement('hr');
    vragenOutput.appendChild(hr);

    shuffledQuiz.forEach(vraagData => {
        const vraagLabel = document.createElement('label');
        vraagLabel.textContent = vraagData.vraag;
        vragenOutput.appendChild(vraagLabel);

        const options = [vraagData.optie_1, vraagData.optie_2, vraagData.optie_3];
        options.forEach(optie => {
            const button = document.createElement('button');
            button.textContent = optie;
            button.name = optie;
            button.value = vraagData.antwoord;
            button.addEventListener('click', controleerAntwoord);
            vragenOutput.appendChild(button);
        });

        const hr = document.createElement('hr');
        vragenOutput.appendChild(hr);
    });
}

function controleerAntwoord(event) {
    const knop = event.target;
    if(knop.name === knop.value){
        knop.style.backgroundColor = 'green';
        knop.style.color = 'white';
    }else {
        knop.style.backgroundColor = 'red';
        knop.style.color = 'white';
    }
    knop.disabled = true;

}

