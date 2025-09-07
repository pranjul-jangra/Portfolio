import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// HOME PAGE ANIMATIONS
let homeTl = gsap.timeline();
if (window.innerWidth >= 768) {
    homeTl.from('.profileImg', { x: () => (window.innerWidth / 2), translate: '-85% 0', opacity: 0.7, duration: 0.7, delay: 0.9 })
        .from('.profileName', { x: -200, opacity: 0, duration: 0.7, scale: 0.7 })
        .from('.profileIntro', { x: -300, opacity: 0, duration: 0.7, scale: 0.5 }, '-=0.7');
} else {
    homeTl.from('.profileImg', { y: () => (window.innerHeight / 2), translate: '0 -70%', opacity: 0.7, duration: 0.7, delay: 0.9 })
        .from('.profileName', { x: -200, opacity: 0, duration: 0.7, scale: 0.7 })
        .from('.profileIntro', { x: -300, opacity: 0, duration: 0.7, scale: 0.5 }, '-=0.7');
}

let logosTl = gsap.timeline();
logosTl.to('#phoneLogo', { scale: 1, duration: 0.7, delay: 1.2, y: 0 })
    .to('#emailLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5')
    .to('#linkedInLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5')
    .to('#githubLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5');

// Show/Hide contact options in navbar
const navSvg = document.querySelector('.navSvg');
const contactsList = document.querySelector('.contactsList');
let isHovered = false;
let swipeAnimation = null;

navSvg.addEventListener('mouseenter', () => {
    isHovered = true;

    // Create animation
    if (!swipeAnimation) {
        if (window.innerWidth >= 1536) {
            swipeAnimation = gsap.to(contactsList, { top: '7rem', duration: 0.55, paused: true });
        } else {
            swipeAnimation = gsap.to(contactsList, { top: '4rem', duration: 0.55, paused: true });
        }
    }

    // Trigger animation
    swipeAnimation.timeScale(1).play();
});

navSvg.addEventListener('mouseleave', () => { isHovered = false; checkIsHovered(); });
contactsList.addEventListener('mouseenter', () => isHovered = true);
contactsList.addEventListener('mouseleave', () => { isHovered = false; checkIsHovered(); });

function checkIsHovered() {
    setTimeout(() => {
        if (!isHovered && swipeAnimation) swipeAnimation.timeScale(2).reverse();
    }, 400);
}


// SCROLL TRIGGER ANIMATIONS:
gsap.utils.toArray(".flowLeft").forEach(element => {
    gsap.from(element, {
        x: 200,
        y: 10,
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 81%",
            toggleActions: "play none none reverse"
        }
    });
});

// PROJECT ANIMATIONS
gsap.utils.toArray('.animate-upward').forEach((item) => {
    gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        }
    })
})


// REGULAR JAVASCRIPT CODE
const navItems = document.querySelector('#nav-items');
const homeSection = document.querySelector('#home');
const aboutSection = document.querySelector('#about');
const skillSection = document.querySelector('#skills');
const projectSection = document.querySelector('#projects');

function checkForScrollView() {
    let halfWindowHeight = window.innerHeight / 2;

    let homeBottom = homeSection.getBoundingClientRect().bottom;
    let aboutTop = aboutSection.getBoundingClientRect().top;
    let skillTop = skillSection.getBoundingClientRect().top;
    let projectTop = projectSection.getBoundingClientRect().top;

    if (homeBottom >= halfWindowHeight) {
        navItems.style.setProperty('--active', '0');
    } else if (aboutTop <= halfWindowHeight && skillTop > halfWindowHeight) {
        navItems.style.setProperty('--active', '1');
    } else if (skillTop <= halfWindowHeight && projectTop > halfWindowHeight) {
        navItems.style.setProperty('--active', '2');
    } else if (projectTop <= halfWindowHeight) {
        navItems.style.setProperty('--active', '3');
    }
}
checkForScrollView();

window.addEventListener('scroll', () => { checkForScrollView() });

navItems.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-link') === 'home reference') {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.target.getAttribute('data-link') === 'about reference') {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.target.getAttribute('data-link') === 'skills reference') {
        skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.target.getAttribute('data-link') === 'projects reference') {
        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});