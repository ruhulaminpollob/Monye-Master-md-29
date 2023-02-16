// common utilities 

function getValue(inputFiled) {
    const valueString= document.getElementById(inputFiled).value;
    const values=parseFloat(valueString);
    return values;
}
function getElement(elementId) {
    const elementString= document.getElementById(elementId).innerText;
    const elementValue=parseFloat(elementString);
    return elementValue;
}
function setValueById(locationId, setValue) {
    const setLocation= document.getElementById(locationId);
    setLocation.innerText=setValue;
}

// calculate button utilities



// functions
document.getElementById('calculate').addEventListener('click', function () {
    const salaryValue=getValue('salary');
    //total expenses
    const foodExpenses=getValue('food-value');
    const rentExpenses=getValue('rent-value');
    const clothesExpenses=getValue('clothes-value');
    const totalExpenses=foodExpenses+rentExpenses+clothesExpenses;
    setValueById('total-expenses', totalExpenses)

    //balance
    const balance=salaryValue-totalExpenses;
    setValueById('balance', balance)
    console.log(balance);
    


})