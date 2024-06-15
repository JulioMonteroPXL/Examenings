document.addEventListener("DOMContentLoaded", () => {
    document.body.style.fontFamily = 'Arial, Verdana, sans-serif';

    let title = document.querySelector('h1');
    title.style.color= 'darkgreen';
    title.style.textDecoration = 'underline';

    let naamVoornaam = document.querySelector('.naam-voornaam');
    naamVoornaam.style.fontWeight = 'bold';
    naamVoornaam.style.fontStyle = 'italic';
});