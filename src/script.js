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