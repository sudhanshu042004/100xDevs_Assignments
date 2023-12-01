const sumbit = document.querySelector('.submit');
sumbit.addEventListener('click', function calculate() {
    const amount = parseInt(document.querySelector('.amount').value);
    const rate = parseInt(document.querySelector('.rate').value);
    const time = parseInt(document.querySelector('.year').value);
    const outputBox = document.querySelector('.output');
    outputBox.innerHTML = `Rs. ${amount + (amount * rate * time) / 100}`;
});

