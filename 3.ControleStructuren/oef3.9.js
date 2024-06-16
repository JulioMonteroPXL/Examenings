document.addEventListener('DOMContentLoaded', function() {
    // Ask the user for a number between 1 and 10
    let number = prompt('Please enter a number between 1 and 10:');

    // Validate the input
    if (number !== null) {
        number = parseInt(number, 10);
        const tableContainer = document.getElementById('tableContainer');

        if (isNaN(number) || number < 1 || number > 10) {
            tableContainer.innerHTML = '<p class="text-danger">Not possible</p>';
        } else {
            let tableHTML = '<table class="table table-bordered"><tbody>';
            for (let i = 1; i <= 10; i++) {
                tableHTML += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
            }
            tableHTML += '</tbody></table>';
            tableContainer.innerHTML = tableHTML;
        }
    }
});