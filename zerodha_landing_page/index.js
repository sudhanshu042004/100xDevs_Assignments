const amount = parseInt(document.querySelector('.amount').value);
const rate = parseInt(document.querySelector('.rate').value);
const time = parseInt(document.querySelector('.year').value);
const outputBox = document.querySelector('.output');
const sumbit = document.querySelector('.submit');

sumbit.addEventListener('click',calculate);

function calculate () {
    let si = (amount * rate * time)/100;
    let total = `Rs. ${amount + si}`; 
    outputBox.textContent = total;
}