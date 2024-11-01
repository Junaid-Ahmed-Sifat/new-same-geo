function calculateTriangleArea(){
    const TriangleBase= document.getElementById("triangle-base");
    const TriangleText=TriangleBase.value;
    const base = parseFloat(TriangleText);

    const TriangleHeight= document.getElementById("triangle-height");
    const TriangleHText=TriangleHeight.value;
    const height = parseFloat(TriangleHText);

    const area = 0.5 * base * height;
    const TriangleArea= document.getElementById("triangle-area");
    TriangleArea.innerText= area;
}
// rect
function calculateRectangleArea(){
    const RectangleW= document.getElementById("Rectangle-w");
    const RectangleWText=RectangleW.value;
    const width = parseFloat(RectangleWText);

    const RectangleH= document.getElementById("Rectangle-h");
    const RectangleLText=RectangleH.value;
    const length = parseFloat(RectangleLText);

    const area = width * length;
    const RectangleArea= document.getElementById("Rectangle-area");
    RectangleArea.innerText= area;
}

function calculateParallelogramArea(){
    const Parallelogram= document.getElementById("parallelogram-base");
    const ParallelogramText=Parallelogram.value;
    const pBase = parseFloat(ParallelogramText);

    const ParallelogramH= document.getElementById("parallelogram-height");
    const ParallelogramHText=ParallelogramH.value;
    const pHeight = parseFloat(ParallelogramHText);

    const area = pBase * pHeight;
    const TriangleArea= document.getElementById("parallelogram-area");
    TriangleArea.innerText= area;
}


// rhombus
function calculateRhombusArea(){
    const rBase = getInputValueById("rhombus-base")
    const rHeight = getInputValueById("rhombus-height")
    const rArea = getInputValueById("rhombus-area")

    const area = 0.5 * rBase * rHeight;
    setInnerTextById("rhombus-area",area)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText= inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}

// pentagon
function calculatePentagonArea(){
    const pBase = getInputValueById("pentagon-base")
    const pHeight = getInputValueById("pentagon-height")
    const pArea = getInputValueById("pentagon-area")

    const area = 0.5 * pBase * pHeight;
    setInnerTextById("pentagon-area",area)
}

// ellipse:
function calculateEllipseArea(){
    const a = getInputValueById("ellipse-a")
    const b = getInputValueById("ellipse-b")
    const Area = getInputValueById("ellipse-area")

    const area = 3.14 * a * b;
    setInnerTextById("ellipse-area",area)
}


// all in one :
// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById             (inputFieldId);
//     const inputValueText= inputField.value;
//     const inputValue = parseFloat(inputValueText);
//     return inputValue;
// }

// function setInnerTextById(elementId, area){
//     const element=document.getElementById(elementId);
//     element.innerText=area;
// }