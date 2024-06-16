// URL van de JSON-server
const apiUrl = 'http://localhost:3000/users';
// Gegevens die je wilt toevoegen
const newUser = {
    name: 'Nieuwe Gebruiker'
};
// Fetch-verzoek met een POST-methode
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser)
})
    .then(response => {
// Controleer of het antwoord succesvol is
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
// Gegevens omzetten naar JSON
        return response.json();
    })
    .then(data => {
// Verwerken van de ontvangen gegevens (in dit geval de bevestiging van toegevoegde gebruiker)
        console.log('Toegevoegde gebruiker:', data);
// Hier kun je de ontvangen gegevens verder verwerken
    })
    .catch(error => {
// Vang eventuele fouten op tijdens het uitvoeren van het POST-verzoek
        console.error('Er is een fout opgetreden bij het uitvoeren van het POST-verzoek:', error);
    });