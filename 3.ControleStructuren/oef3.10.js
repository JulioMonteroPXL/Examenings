document.addEventListener('DOMContentLoaded', function() {
    let aantalLijnen = 7;
    let pattern = '';

    for (let i = 1; i <= aantalLijnen; i++) {
        let line = '#'.repeat(i);
        console.log(line); // Print to console
        pattern += line + '\n'; // Add to pattern string
    }

    // Display pattern on the web page
    document.getElementById('trianglePattern').textContent = pattern;
});