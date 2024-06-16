function printMirroredTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = ' '.repeat(rows - i);
        let hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

// Example usage:
printMirroredTriangle(7);
