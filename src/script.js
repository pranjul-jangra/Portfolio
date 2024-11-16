//initial transitions
const homeInfo = document.querySelector('#HomeInfo');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const linkedIn = document.querySelector('#linkedIn');
const github = document.querySelector('#github');
const img = document.querySelector('#img');
const intro = document.querySelector('#intro');

window.addEventListener('load', () => {
    if (window.innerWidth >= 886) {
        img.classList.add('translate-x-40');
        intro.classList.add('translate-x-40');
        homeInfo.classList.add('-translate-x-10');
        setTimeout(() => {
            img.classList.replace('opacity-0', 'opacity-1');
            intro.classList.replace('opacity-0', 'opacity-1');
        }, 400);
        setTimeout(() => {
            homeInfo.classList.replace('opacity-0', 'opacity-1');
            homeInfo.classList.replace('-translate-x-10', 'translate-x-0');
            img.classList.replace('translate-x-40', 'translate-x-0');
            intro.classList.replace('translate-x-40', 'translate-x-0');
        }, 600);
    } else {
        img.classList.add('translate-y-40');
        intro.classList.add('translate-y-40');
        homeInfo.classList.add('-translate-y-10');
        setTimeout(() => {
            img.classList.replace('opacity-0', 'opacity-1');
            intro.classList.replace('opacity-0', 'opacity-1');
        }, 400);
        setTimeout(() => {
            homeInfo.classList.replace('opacity-0', 'opacity-1');
            homeInfo.classList.replace('-translate-y-10', 'translate-y-0');
            img.classList.replace('translate-y-40', 'translate-y-0');
            intro.classList.replace('translate-y-40', 'translate-y-0');
        }, 600);
    }

    setTimeout(() => {
        phone.classList.replace('scale-0', 'scale-1');
    }, 1100);
    setTimeout(() => {
        email.classList.replace('scale-0', 'scale-1');
    }, 1300);
    setTimeout(() => {
        linkedIn.classList.replace('scale-0', 'scale-1');
    }, 1500);
    setTimeout(() => {
        github.classList.replace('scale-0', 'scale-1');
    }, 1700);
})


// scroller in navbar
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');

let navTabs = document.querySelector('#tabs');
function checkSectionInView() {
    const windowHeight = window.innerHeight;

    let homeBottom = home.getBoundingClientRect().bottom;
    let aboutTop = about.getBoundingClientRect().top;
    let skillsTop = skills.getBoundingClientRect().top;
    let projectsTop = projects.getBoundingClientRect().top;

    if (homeBottom >= windowHeight / 2) {
        navTabs.style.setProperty('--active', '0');
    } else if (aboutTop <= windowHeight / 2 && aboutTop > -1) {
        navTabs.style.setProperty('--active', '1');
    } else if (skillsTop <= windowHeight / 2 && skillsTop > -1) {
        navTabs.style.setProperty('--active', '2');
    } else if (projectsTop <= windowHeight / 2 && projectsTop > -1) {
        navTabs.style.setProperty('--active', '3')
    }
}
checkSectionInView();
window.addEventListener('scroll', checkSectionInView);


const navitems = document.querySelectorAll('.nav-items');

for (let item of navitems) {
    item.addEventListener('click', () => {
        if (item.textContent == 'home') {
            home.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (item.textContent == 'about') {
            about.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (item.textContent == 'skills') {
            skills.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (item.textContent == 'projects') {
            projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    })
}


//contacts list swiping
const contactRef = document.querySelector('#contactRef');
const contactList = document.querySelector('#contactsList');
let isContactRefHovered = false;
let isContactListHovered = false;

setTimeout(() => {
    contactList.classList.remove('opacity-0');
}, 400);

if (window.innerWidth < 2000) {
    contactList.classList.add('-translate-y-72');
} else {
    contactList.classList.add('-translate-y-[26rem]');
}

contactRef.addEventListener('mouseenter', () => {
    if (contactList.classList.contains('-translate-y-72')) {
        contactList.classList.replace('-translate-y-72', 'translate-y-0');
    } else {
        contactList.classList.replace('-translate-y-[26rem]', 'translate-y-10');
    }
    isContactRefHovered = true;
});
contactRef.addEventListener('mouseleave', () => {
    isContactRefHovered = false;
    contactScrollsUp();
});
contactList.addEventListener('mouseenter', () => {
    isContactListHovered = true;
});
contactList.addEventListener('mouseleave', () => {
    isContactListHovered = false;
    contactScrollsUp();
});
function contactScrollsUp() {
    setTimeout(() => {
        if (!isContactRefHovered && !isContactListHovered) {
            if (window.innerWidth < 2000) {
                contactList.classList.replace('translate-y-0', '-translate-y-72');
            } else {
                contactList.classList.replace('translate-y-10', '-translate-y-[26rem]')
            };
        };
    }, 200);
};

// animations for smaller screen sizes
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 592) {
        let scaleUp = document.querySelectorAll('.scale-up');
        let fadeDown = document.querySelectorAll('.fade-down');
        let logos = document.querySelectorAll('.logos-animation');

        scaleUp.forEach(item => {
            item.classList.replace('scale-up', 'move-left')
        });
        fadeDown.forEach(item => {
            item.classList.replace('fade-down', 'move-left')
        });
        logos.forEach(item => {
            item.classList.replace('logos-animation', 'move-left')
        });
    } else {
        let scaleUp = document.querySelectorAll('.anime-scale');
        let fadeDown = document.querySelectorAll('.anime-fade');
        let logos = document.querySelectorAll('.animate-logos');

        scaleUp.forEach(item => {
            item.classList.replace('move-left', 'scale-up')
        });
        fadeDown.forEach(item => {
            item.classList.replace('move-left', 'fade-down')
        });
        logos.forEach(item => {
            item.classList.replace('move-left', 'logos-animation')
        });
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth < 592) {
        let scaleUp = document.querySelectorAll('.scale-up');
        let fadeDown = document.querySelectorAll('.fade-down');
        let logos = document.querySelectorAll('.logos-animation');

        scaleUp.forEach(item => {
            item.classList.replace('scale-up', 'move-left')
        });
        fadeDown.forEach(item => {
            item.classList.replace('fade-down', 'move-left')
        });
        logos.forEach(item => {
            item.classList.replace('logos-animation', 'move-left')
        });
    } else {
        let scaleUp = document.querySelectorAll('.anime-scale');
        let fadeDown = document.querySelectorAll('.anime-fade');
        let logos = document.querySelectorAll('.animate-logos');

        scaleUp.forEach(item => {
            item.classList.replace('move-left', 'scale-up')
        });
        fadeDown.forEach(item => {
            item.classList.replace('move-left', 'fade-down')
        });
        logos.forEach(item => {
            item.classList.replace('move-left', 'logos-animation')
        });
    }
})