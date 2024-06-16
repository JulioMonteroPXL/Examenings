document.addEventListener('DOMContentLoaded', function() {
    let numberOfLines = prompt('Please enter a number between 0 and 10 for the number of lines:');

    // Validate the input
    if (numberOfLines !== null) {
        numberOfLines = parseInt(numberOfLines, 10);
        const trianglePattern = document.getElementById('trianglePattern');
        const errorMessage = document.getElementById('errorMessage');

        if (isNaN(numberOfLines) || numberOfLines < 0 || numberOfLines > 10) {
            errorMessage.textContent = 'Not possible';
        } else {
            errorMessage.textContent = ''; // Clear any previous error message
            let pattern = '';

            for (let i = 1; i <= numberOfLines; i++) {
                let line = '#'.repeat(i);
                console.log(line); // Print to console
                pattern += line + '\n'; // Add to pattern string
            }

            // Display pattern on the web page
            trianglePattern.textContent = pattern;
        }
    }
});