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

// expense calculations
function totalExpensesCalculation() {
    const salaryValue=getValue('salary');
    //total expenses
    const foodExpenses=getValue('food-value');
    const rentExpenses=getValue('rent-value');
    const clothesExpenses=getValue('clothes-value');
    const totalExpenses=foodExpenses+rentExpenses+clothesExpenses;
    return totalExpenses;
}
function balanceCalculation() {
    const getSalary=getValue('salary');
    const balance=getSalary-totalExpensesCalculation();
    return balance;
}

// event handler calculate total expenses and balance
document.getElementById('calculate').addEventListener('click', function () {
    const expense=totalExpensesCalculation();
    setValueById('total-expenses', expense)

    //balance
    
    setValueById('balance', balanceCalculation())
    
})

// save event handler 
document.getElementById('save').addEventListener('click',function () {
    const savePercentage=getValue('save-input')*0.01;
    const calculateSaveAmount=getValue('salary')*savePercentage;
    setValueById('saving-amount', calculateSaveAmount);
    const remainingAmount=balanceCalculation()-calculateSaveAmount;
    setValueById('remaining-balance', remainingAmount)
    // console.log(calculateSaveAmount);

})