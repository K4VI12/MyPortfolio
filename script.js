let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 250
});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top' })
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact',{ origin:'bottom' })
ScrollReveal().reveal('.home-content h1, .about',{ origin:'left' })


const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer','Frontend Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});