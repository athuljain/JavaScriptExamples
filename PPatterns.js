function printBasicPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage
printBasicPyramid(5);



function printRightAlignedPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';  // Add spaces for right alignment
        }
        for (let k = 0; k < i; k++) {
            row += '*';  // Add stars
        }
        console.log(row);
    }
}

// Example usage
printRightAlignedPyramid(5);




function printCenteredPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';  // Add spaces for centering
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            row += '*';  // Add stars
        }
        console.log(row);
    }
}

// Example usage
printCenteredPyramid(5);



function printInvertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';  // Add stars
        }
        console.log(row);
    }
}

// Example usage
printInvertedPyramid(5);




function printDiamond(rows) {
    // Upper part
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';  // Add spaces for centering
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            row += '*';  // Add stars
        }
        console.log(row);
    }
    // Lower part
    for (let i = rows - 1; i >= 1; i--) {
        let row = '';
        for (let j = 0; j < rows - i; j++) {
            row += ' ';  // Add spaces for centering
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            row += '*';  // Add stars
        }
        console.log(row);
    }
}

// Example usage
printDiamond(5);



