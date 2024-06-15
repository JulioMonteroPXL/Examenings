document.querySelectorAll('.randomtekst')
document.querySelectorAll('img')
document.querySelectorAll('p.specialetekst')
document.querySelectorAll('p')[4]
document.querySelectorAll('.randomtekst')[1]
document.addEventListener("DOMContentLoaded", function() {
    // Zoek alle HTML-elementen met de class ‘randomtekst’
    let randomtekstElements = document.querySelectorAll('.randomtekst');
    console.log("Alle HTML-elementen met de class ‘randomtekst’:", randomtekstElements);

    // Zoek alle afbeeldingen
    let images = document.querySelectorAll('img');
    console.log("Alle afbeeldingen:", images);

    // Zoek alle paragrafen met de class ‘specialetekst’
    let specialetekstElements = document.querySelectorAll('p.specialetekst');
    console.log("Alle paragrafen met de class ‘specialetekst’:", specialetekstElements);

    // Zoek de vijfde paragraaf op de webpagina
    let fifthParagraph = document.querySelectorAll('p')[4];
    console.log("De vijfde paragraaf op de webpagina:", fifthParagraph);

    // Zoek de tweede paragraaf met de class ‘randomtekst’
    let secondRandomtekst = document.querySelectorAll('.randomtekst')[1];
    console.log("De tweede paragraaf met de class ‘randomtekst’:", secondRandomtekst);
});