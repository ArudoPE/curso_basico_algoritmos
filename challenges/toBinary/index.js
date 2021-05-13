//convert button
let convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click",convertToBinary);

//convert function
function convertToBinary() {
    let decimalNumberText = document.getElementById("numberToBinary").value;
    let decimalNumberInt = parseInt(decimalNumberText);
    let arrayResult = [];
    let stringResult;
    while(decimalNumberInt > 0) {
        let modulo = decimalNumberInt % 2;
        arrayResult.unshift(modulo);
        decimalNumberInt = Math.floor(decimalNumberInt / 2);
    }
    for (let i = 0; i < arrayResult.length; i++) {
        if( i === 0) {
            stringResult = arrayResult[i].toString();
        } else {
            stringResult += arrayResult[i].toString();
        }
    }
    if(stringResult === undefined)
    {
        document.getElementById("resultOutput").value = 0;
    } else {
        document.getElementById("resultOutput").value = stringResult;
    }
}

//reset button
let resetButton =  document.getElementById("resetButton");
resetButton.addEventListener("click", resetText);

//clean input and text area
function resetText() {
    document.getElementById("resultOutput").value = "";
    document.getElementById("numberToBinary").value = "";
}
