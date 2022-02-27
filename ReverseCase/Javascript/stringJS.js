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