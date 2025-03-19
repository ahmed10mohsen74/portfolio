
// send email massage

const menu = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links li');
let menustate = false;

menu.addEventListener('click', showMenu);

// دالة فتح وإغلاق المينيو
function showMenu()
{
    if (!menustate)
    {
        menu.classList.add('is-active');
        navLinks.classList.add('open');
        menustate = true;
    } else
    {
        closeMenu();
    }
}

// إغلاق المينيو عند الضغط على أي عنصر من عناصر القائمة
menuItems.forEach(item =>
{
    item.addEventListener('click', closeMenu);
});

// إغلاق المينيو عند التمرير (السكرول)
window.addEventListener('scroll', closeMenu);

function closeMenu()
{
    menu.classList.remove('is-active');
    navLinks.classList.remove('open');
    menustate = false;
}




const texts = ["Web Designer", "Front End Developer"]; // النصوص المتغيرة
const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect()
{
    const currentText = texts[textIndex];

    if (!isDeleting)
    {
        typingElement.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length)
        {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // انتظار قبل الحذف
            return;
        }
    } else
    {
        typingElement.textContent = currentText.slice(0, charIndex--);
        if (charIndex === 0)
        {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // التبديل بين النصوص
        }
    }
    setTimeout(typeEffect, isDeleting ? 100 : 150); // التحكم في سرعة الكتابة والمسح
}

typeEffect(); // تشغيل التأثير







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
sr.reveal('#typing', { delay: 200 })
