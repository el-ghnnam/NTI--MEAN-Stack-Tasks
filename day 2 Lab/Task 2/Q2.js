//? Question 2
// Write a script to determine whether the entered string is palindrome or not. Ask the user whether to consider case of the entered string or not, handle both cases in your script i.e. RADAR NOON MOOM are palindrome. Note: raDaR is not a palindrome if user requested considering case of entered string.

// function isPalindrome(word, considerCase) {
//     let originalWord = considerCase ? word : word.toLowerCase();
//     let reverseWord = originalWord.split('').reverse().join('');

//     if (originalWord === reverseWord) {
//         return 'The word is palindrome';
//     }
//     return 'The word is not palindrome';
// }
// console.log(isPalindrome('RADAR', false))
// console.log(isPalindrome('raDaR', true))
// console.log(isPalindrome('NOONa', false))
// console.log(isPalindrome('MOOM', false))


function isPalindrome(word, considerCase) {
    let originalWord = considerCase ? word : word.toLowerCase();
    let reverseWord = originalWord.split('').reverse().join('');

    if (originalWord === reverseWord) {
        return 'The word is palindrome';
    }
    return 'The word is not palindrome';
}

// 🔹 Prompt user for input
let wordInput = prompt("Enter a word to check if it's a palindrome:");
let caseSensitive = confirm("Do you want to consider case sensitivity? (OK = Yes, Cancel = No)");

// 🔹 Call the function with user input
let result = isPalindrome(wordInput, caseSensitive);

// 🔹 Show result
alert(result);


