document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const toggleMenu = document.createElement('div');
toggleMenu.classList.add('toggle-menu');
toggleMenu.innerHTML = '<span></span><span></span><span></span>';
nav.appendChild(toggleMenu);

toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
    });
});
