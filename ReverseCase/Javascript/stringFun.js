/*
    Javascript function file
    1. validateInput - validate string is empty or not 
    2. reverseCase - To change each character of string to other case.
 */
function validateInput(params) {
    var isValid = true;
    if (params == undefined || params.length == 0) {
        isValid = false;
    }
    return isValid;
}

function reverseCase(params) {
    let i = 0; 
    let individualCharacter;
    let result = '';
    while (i < params.length) {
        individualCharacter = params.charAt(i);

        if (isNaN(individualCharacter)) {
            if (individualCharacter == individualCharacter.toLowerCase()) {
                result += individualCharacter.toUpperCase();
            }
            else {
                result += individualCharacter.toLowerCase();
            }    
        }
        else {
            result += individualCharacter;
        }
        i++;
    }
    return result;
}