/*==================================================
 PORTFOLIO SATURNIN ADIGNON
 SCRIPT JAVASCRIPT
==================================================*/

// =======================
// MENU MOBILE
// =======================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// =======================
// FERMER LE MENU APRÈS UN CLIC
// =======================

const liens = document.querySelectorAll("nav a");

liens.forEach(lien => {

    lien.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});

// =======================
// BOUTON RETOUR EN HAUT
// =======================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTop.classList.add("show");

    }else{

        scrollTop.classList.remove("show");

    }

});

scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =======================
// ANIMATION AU DÉFILEMENT
// =======================

const elements = document.querySelectorAll(

".about-card, .skill-card, .timeline-item, .project-card, .contact-form"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:0.2

});

elements.forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

// =======================
// HEADER AU SCROLL
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#ffffff";

header.style.boxShadow="0 8px 25px rgba(0,0,0,.10)";

}else{

header.style.background="#ffffff";

header.style.boxShadow="0 2px 15px rgba(0,0,0,.05)";

}

});

// =======================
// FORMULAIRE
// =======================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Merci ! Votre message a été envoyé avec succès.");

form.reset();

});

// =======================
// ANNÉE AUTOMATIQUE
// =======================

const footer = document.querySelector("footer p");

footer.innerHTML =
© ${new Date().getFullYear()} Saturnin ADIGNON - Tous droits réservés.;