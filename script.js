const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button[type="button"]');

const themeToggler = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggler.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggler.classList.toggle('active');
    isDark = !isDark;
}
