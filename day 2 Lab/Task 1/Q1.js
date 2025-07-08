//? Question 1
// Question 1 - Write your own function that can add n values ensure that all passing parameters are
// numerical values only.


function CheckParameters(...args) {
    var parameters = 0;
    for (var i=0; i<args.length; i++) {
        if (typeof arguments[i] !== "number") {
            return "Error: Only numbers are allowed"
        } 
        parameters += args[i];
    }
    return parameters;
}

console.log(CheckParameters(5, 14, ))
console.log(CheckParameters(2, 3))