const boodschappenlijst = document.getElementById('boodschappenLijst');
const addButton = document.getElementById('addButton');
const boodschapInput = document.getElementById('textVak');

addButton.addEventListener('click', (e) => {
const boodschap = boodschapInput.value.trim();
if (boodschap !== "") {

    const li = document.createElement('li');
    li.className = 'list-grou-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${boodschap}
    <a href="#" class="badge badge-danger badge-pill verwijderKnop">Verwijder</a>
    `;
    boodschappenlijst.appendChild(li);
    boodschapInput.value = '';
}
});

boodschapInput.addEventListener('keypress', function(event)  {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

boodschappenlijst.addEventListener('click', function(event)  {
    if (event.target && event.target.classList.contains('verwijderKnop')) {
        const item = event.target.closest('li');
        item.remove();
    }
})


