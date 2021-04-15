const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celsius;

const swap = () => {
    if (one.innerText === '°C') {
        one.innerText = '°F';
        two.innerText = '°C';
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
    }
}

const celToFahr = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}°C to ${fahrenheit}°F`;
    converter.value = '';
}

const fahrToCel = () => {
    celsius = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value}°F to ${celsius}°C`;
    converter.value = '';
}

convBtn.addEventListener('click', celToFahr);
changeBtn.addEventListener('click', swap);