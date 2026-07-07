// On prend le bouton vert qui existe déjà
const menuBtn = document.querySelector('header button, header i, header svg');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
