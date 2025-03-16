const menu = document.querySelector('.bars');
let menustate = false;
menu.addEventListener('click', showMenu);
function showMenu()
{
    if (!menustate)
    {
        menu.classList.add('is-active');
        document.querySelector('.nav-links').classList.add('open');
        menustate = true;
    } else
    {
        menu.classList.remove('is-active');
        document.querySelector('.nav-links').classList.remove('open');
        menustate = false;
    }
}

// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home-img', { delay: 400 })
sr.reveal('.home-social', { delay: 400, })

sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', { delay: 200 })
sr.reveal('.about-text', { delay: 400 })

sr.reveal('.skills-subtitle', { delay: 100 })
sr.reveal('.skills-text', { delay: 150 })
sr.reveal('.skills-data', { interval: 200 })
sr.reveal('.skills-img', { delay: 400 })

sr.reveal('.work-img', { interval: 200 })

sr.reveal('.contact-input', { interval: 200 })
