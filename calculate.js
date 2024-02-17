// Triangle
function calculateArea(){
    // Get base value
    const tBase = document.getElementById('t-base');
    const tBaseT = tBase.value;
    const base = parseFloat(tBaseT);
    console.log(base);
    // Get height value
    const tHeight = document.getElementById('t-height');
    const tHeightT = tHeight.value;
    const height = parseFloat(tHeightT);
    console.log(height);
    // Calculate area
    const area = 0.5 * base * height;
    console.log(area);
}
// Rectangle
function calculateRectArea(){
    // Get base value
    const rWid = document.getElementById('r-width');
    const rWidT = rWid.value;
    const width = parseFloat(rWidT);
    console.log(width);
    // Get height value
    const rLen = document.getElementById('r-length');
    const rLenT = rLen.value;
    const length = parseFloat(rLenT);
    console.log(length);
    // Calculate area
    const area = width * length;
    console.log(area);
}

// A common input

function getInputById(inputField){
    // Get base value
    const inputFld = document.getElementById(inputField);
    const inputFldTxt = inputFld.value;
    const inputValue = parseFloat(inputFldTxt);
    return inputValue;
}

// Parallelogram
function calculateParaArea(){
    const base1 = getInputById('para-base'); 
    const height1 = getInputById('para-height');
    const area1 = base1 * height1;
    console.log(area1);
}

// Rhombus
function calculateRhomArea(){
    const d1 = getInputById('r-d1');
    const d2 = getInputById('r-d2');
    const area = 0.5 * d1 * d2;
    console.log(area);
}