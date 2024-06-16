// URL van de JSON-server
const apiUrl = 'http://localhost:3000/users';
// Fetch-verzoek met een GET-methode
fetch(apiUrl)
    .then(response => {
// Controleer of het antwoord succesvol is
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
// Gegevens omzetten naar JSON
        return response.json();
    })
    .then(data => {
// Verwerken van de ontvangen gegevens
        console.log('Gebruikersgegevens:', data);
// Hier kun je de ontvangen gegevens verder verwerken
    })
    .catch(error => {
// Vang eventuele fouten op tijdens het ophalen van gegevens
        console.error('Er is een fout opgetreden bij het ophalen van gegevens:', error);
    });