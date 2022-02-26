function doReverseCase(){
    var result = '';
    var inputString = document.getElementById("txt-OriginalText").value.toString().trim();

    if(validateInput(inputString)) {
        result = reverseCase(inputString);
        document.getElementById("div-Result").innerHTML = result;
    }
    else {
        alert("Please enter a valid input!");
    }
    
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

function validateInput(params) {
    var isValid = true;
    if (params == undefined || params.length == 0) {
        isValid = false;
    }
    return isValid;
}