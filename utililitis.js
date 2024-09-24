function getInputValueById(id){
    const inputValue = document.getElementById(id).ariaValueMax;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}


function showSection(id){
    document.getElementById('btn').classList.add('hidden');
    document.getElementById('btn1').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');



}