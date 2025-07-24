let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
    
 
}

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
}

themeToggle.onclick = function () {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    }
};

