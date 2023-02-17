document.getElementById('btn-calculate').addEventListener('click', function () {


    const foodField = document.getElementById('food-field');
    const foodFieldString = foodField.value;

    const rentField = document.getElementById('rent-field');
    const rentFieldString = rentField.value;

    const clothesField = document.getElementById('clothes-field');
    const clothesFieldString = clothesField.value;

    const totalAmount = parseFloat(foodFieldString) + parseFloat(rentFieldString) + parseFloat(clothesFieldString);

    // console.log(totalAmount)
    const totalExpenseElement = document.getElementById('total-expense');

    totalExpenseElement.innerText = totalAmount;


    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeFieldTotal = parseFloat(incomeFieldString);

    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';
    

    const totalValue = incomeFieldTotal - totalAmount;

    const balanceField = document.getElementById('balance');
    // const balanceTotal = parseFloat(balanceField);
    // console.log(typeof(totalValue), balanceField)
    balanceField.innerText = totalValue;




})
document.getElementById('btn-save').addEventListener('click', function () {

    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeFieldTotal = parseFloat(incomeFieldString);

    const saveField = document.getElementById('save-field');
    const saveAmountString = saveField.value;
    const saveAmount = (parseFloat(saveAmountString)) / 100;

    const totalSaving = incomeFieldTotal - (incomeFieldTotal * saveAmount);

    const totalSavingAmount = incomeFieldTotal - totalSaving;
    
    const savingAmountField = document.getElementById('saving-amount');

    savingAmountField.innerText = totalSavingAmount;

    incomeField.value = '';

    const balanceField = document.getElementById('balance').innerText;

    const remainingBalance = document.getElementById('remaining-balance');

    const remainingAmount = parseFloat(balanceField) - parseFloat(savingAmountField.innerText);
    
    // console.log(balanceField,savingAmountField)
    remainingBalance.innerText = remainingAmount;

    saveField.value = '';
})

// var numVal1 = Number(document.getElementById("price").value);
// var numVal2 = Number(document.getElementById("discount").value) / 100;
// var totalValue = numVal1 - (numVal1 * numVal2)
// var savingValue = numVal1 - totalValue;