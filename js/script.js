const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
const closee = document.querySelector('.nav-close');

toggle.addEventListener('click', function(){
    nav.classList.add('show-nav');
});

closee.addEventListener('click', function(){
    nav.classList.remove('show-nav');
})


function showHeader(){
    const logo = document.querySelector('.nav-logo');
    const headerr = document.querySelector('header');
    const navLink = document.querySelectorAll('.nav-link');

    if(this.scrollY>=50){
        headerr.classList.add('show-header');
        logo.classList.add('show-header');
        toggle.classList.add('show-header');
        navLink.forEach(n => n.classList.add('show-header'));
    }else{
        headerr.classList.remove('show-header');
        logo.classList.remove('show-header');
        toggle.classList.remove('show-header');
        navLink.forEach(n => n.classList.remove('show-header'));
    }
    
}

window.addEventListener('scroll', showHeader);


const navLink = document.querySelectorAll('.nav-link');

function removeMenu(){
    const navv = document.querySelector('.nav-menu')
    navv.classList.remove('show-nav');
}

navLink.forEach(n => n.addEventListener('click', removeMenu));


const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home-content, .produsent-img-1, .produsent-img-2, .galery-box,
.contact-card, .footer-card`, {
    origin: 'top',
    interval: 250,
})

sr.reveal(`.judul, .contact-img, .value-card`, {
    origin: 'top'
})

sr.reveal('.about-data, .slider-content, .product-description', {
    origin: 'right'
})

sr.reveal('.about-img, .product-img',{
    origin: 'left'
})