import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// HOME PAGE ANIMATIONS
let homeTl = gsap.timeline();
if(window.innerWidth >= 768){
    homeTl.from('.profileImg', { x: () => window.innerWidth * 0.5 - 295, opacity: 0.7, duration: 0.7, delay: 0.9 })
    .from('.profileName', { x: -200, opacity: 0, duration: 0.7, scale: 0.7 })
    .from('.profileIntro', { x: -300, opacity: 0, duration: 0.7, scale: 0.5 }, '-=0.7');
}else{
    homeTl.from('.profileImg', { y: () => window.innerWidth * 0.5 - 245, opacity: 0.7, duration: 0.7, delay: 0.9 })
    .from('.profileName', { x: -200, opacity: 0, duration: 0.7, scale: 0.7 })
    .from('.profileIntro', { x: -300, opacity: 0, duration: 0.7, scale: 0.5 }, '-=0.7');
}

let logosTl = gsap.timeline();
logosTl.to('#phoneLogo', { scale: 1, duration: 0.7, delay: 1.2, y: 0 })
    .to('#emailLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5')
    .to('#linkedInLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5')
    .to('#githubLogo', { scale: 1, duration: 0.7, y: 0 }, '-=0.5');

const navSvg = document.querySelector('.navSvg');
const contactsList = document.querySelector('.contactsList');
let isHovered = false;
let swipeAnimation = null;

//when we hovered over the svg while the contactList is already visible then,
//  1. A new swipeAnimation is created and
//  2. Previous swipeAnimation is already exists which results in creation of multiple animations
//So we need to guard the animation to prevent multiple creation of animation.
navSvg.addEventListener('mouseenter', () => {
    isHovered = true;

    //this will create an animation if it's not already exists and,
    //'paused : true' property will pause the animation so that the outer 'play()' will trigger it
    if (!swipeAnimation) {
        if(window.innerWidth >= 1536){
            swipeAnimation = gsap.to(contactsList, { top: '7rem', duration: 0.55, paused: true });
        }else{
            swipeAnimation = gsap.to(contactsList, { top: '4rem', duration: 0.55, paused: true });
        }
    }

    swipeAnimation.timeScale(1).play(); // Play the existing animation
});
navSvg.addEventListener('mouseleave', () => { isHovered = false; checkIsHovered(); });
contactsList.addEventListener('mouseenter', () => isHovered = true);
contactsList.addEventListener('mouseleave', () => { isHovered = false; checkIsHovered(); });

function checkIsHovered() {
    setTimeout(() => {
        if (!isHovered && swipeAnimation) swipeAnimation.timeScale(2).reverse();
    }, 400)
}


// SCROLL TRIGGER ANIMATIONS:

//It will creates an array of elements having class ".flowLeft"
//.forEach is used to apply the scrollTrigger animations to each element
//So that, they all will trigger independantly from each other.
gsap.utils.toArray(".flowLeft").forEach(element => {
    gsap.from(element, {
        x: 200,
        y: 10,
        scale: 0.7,
        opacity: 0.7,
        rotateY: 20,
        scrollTrigger: {
            trigger: element,  // Each element triggers its own animation
            start: "top 99%",
            end: "top 81%",
            scrub: true,
        }
    });
});

gsap.utils.toArray(".moveUp").forEach(element => {
    gsap.from(element, {
        y: 50,
        opacity: 0,
        scale: 0.6,
        scrollTrigger: {
            trigger: element,
            start: "top 99%",
            end: "top 81%",
            scrub: true,
        }
    });
});

// TIMELINE WITH SCROLL TRIGGER
if(window.innerWidth >= 768){
    //achievements (js test)
    const jsTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#jsTest",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    });
    jsTl.from('.jsIntro', { y: 80, opacity: 0, duration: 0.5 })
        .from('.jsBadge', { y: 80, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.jsProgress', { y: 80, opacity: 0, duration: 0.5 }, '-=0.2');

    //achievements (html css test)
    const htmlcssTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#htmlcssTest",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    });
    htmlcssTl.from('.htmlcssIntro', { y: 80, opacity: 0, duration: 0.5 })
        .from('.htmlcssBadge', { y: 80, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.htmlcssProgress', { y: 80, opacity: 0, duration: 0.5 }, '-=0.2');

}else{
    gsap.utils.toArray('.animationBelow768').forEach(element =>{
        gsap.from(element , {
            y: 80,
            opacity: 0,
            duration: 0.5,
            scrollTrigger:{
                trigger: element,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        })
    })
}


//SKILLS (FRONTEND)
const frontendTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#frontend",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
});

frontendTl.from('#html', { y: 50, opacity: 0, duration: 0.4 })
    .from('#css', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#sass', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#tailwind', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#javaScript', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#reactjs', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')

//SKILLS (BACKEND)
const backendTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#backend",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
});

backendTl.from('#nodejs', { y: 50, opacity: 0, duration: 0.4 })
    .from('#expressjs', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#mongodb', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')

//SKILLS (OTHER STACKS)
const otherStacksTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#otherStacks",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
});

otherStacksTl.from('#git', { y: 50, opacity: 0, duration: 0.4 })
    .from('#github', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#gsap', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#vite', { y: 50, opacity: 0, duration: 0.4 }, '-=0.2')
    .from('#react-three-fiber', { y: 50, opacity: 0, duration : 0.4 }, '-=0.2')
    .from('#Motion', { y: 50, opacity: 0, duration : 0.4 }, '-=0.2')
  

//PROJECT ANIMATIONS
gsap.utils.toArray('.project-items-animations').forEach((item)=>{
    gsap.from(item, {
        y: 50, 
        opacity: 0, 
        duration: 0.4,
        scrollTrigger:{
            trigger : item,
            start : 'top 80%',
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

function checkForScrollView(){
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

window.addEventListener('scroll', () => {checkForScrollView()});

navItems.addEventListener('click', (e)=> {
    if (e.target.getAttribute('data-link') === 'home reference') {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.target.getAttribute('data-link') === 'about reference') {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (e.target.getAttribute('data-link') === 'skills reference') {
        skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if(e.target.getAttribute('data-link') === 'projects reference'){
        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});