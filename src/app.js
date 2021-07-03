const billForm = document.getElementById('bill-calculator-form');

const getInputs = () => {
    const subTotal = billForm.querySelector('#subtotal').value;
    const tax = billForm.querySelector('#tip').value;
    const numberPerson = billForm.querySelector('#number-person').value;
    return { subTotal, tax, numberPerson };
};

const showOutputResult = (selectorOutput, calculateResult) => {
       document.querySelector(selectorOutput).innerHTML = `$ ${calculateResult.toFixed(1)}`;
};

const calculateInput = (input) => {
    billForm.reset();
    const { subTotal, tax, numberPerson } = input;
    let calculateTax = (parseFloat(subTotal) * parseFloat(tax)) / 100;
    let totalBill = parseFloat(subTotal) + calculateTax;
    let taxPerPerson = calculateTax / parseFloat(numberPerson);
    let totalbillPerPerson = totalBill / parseFloat(numberPerson);
    // console.log(calculateTip,totalBill,taxPerPerson,totalbillPerPerson)

    // show calculated output to HTML/User
    showOutputResult('#total-bill', totalBill);
    showOutputResult('#total-bill-perPerson', totalbillPerPerson);
    showOutputResult('#total-tax', calculateTax);
    showOutputResult('#total-tax-perperson', taxPerPerson);
};

const billFormHandler = (event) => {
    event.preventDefault();
    const Inputs = getInputs();
    calculateInput(Inputs);
};

billForm.addEventListener('submit', billFormHandler);
