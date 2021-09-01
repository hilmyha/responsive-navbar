const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})