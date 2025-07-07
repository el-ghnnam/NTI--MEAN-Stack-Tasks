function eCountFunc(userInput) {
    let eCount = 0;

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i].toLowerCase() === 'e') {
            eCount++;
        }
    }
    return eCount;
}

// Get user input
let userInput = prompt("Enter a string:");

// Count 'e' characters and show result
let result = eCountFunc(userInput);
alert("The number of 'e' characters: " + result);
