// ID van de gebruiker die je wilt ophalen
const userId = 1;
// URL van de JSON-server met het specifieke gebruikers-ID
const apiUrl = `http://localhost:3000/users/${userId}`;
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
// Verwerken van de ontvangen gebruikersgegevens
        console.log('Opgehaalde gebruiker:', data);
// Hier kun je de ontvangen gegevens verder verwerken
    })
    .catch(error => {
// Vang eventuele fouten op tijdens het ophalen van de gebruiker
        console.error('Er is een fout opgetreden bij het ophalen van de gebruiker:',
            error); });
/*Voorbeeld hoe je een Fetch-verzoek kunt maken met JavaScript om één enkele
gebruiker op te halen van de JSON-server aan de hand van de naam:*/
// Naam van de gebruiker die je wilt ophalen
    const userName = 'John Doe';
// URL van de JSON-server met de specifieke gebruikersnaam
const apiUrl =
    `http://localhost:3000/users?name=${encodeURIComponent(userName)}`;
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
// Verwerken van de ontvangen gebruikersgegevens
        console.log('Opgehaalde gebruiker:', data);
// Hier kun je de ontvangen gegevens verder verwerken
    })
    .catch(error => {
// Vang eventuele fouten op tijdens het ophalen van de gebruiker
        console.error('Er is een fout opgetreden bij het ophalen van de gebruiker:',
            error); });