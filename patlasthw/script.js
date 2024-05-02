const colorToggle = document.getElementById('colorToggle');
const container = document.querySelector('.container');

colorToggle.addEventListener('click', function() {
    container.classList.toggle('colorful');
    container.classList.toggle('inverted');
});