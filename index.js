const navElements = {
    navBtn: document.querySelector('.fa-bars'),
    navMenu: document.querySelector('.navbar__menulinks'),
    scrollToBtn: document.querySelector('.fa-arrow-down')
};


function displayMenu(){
    if(!navElements.navMenu.classList.contains('navbar__menulinks__show')){
        navElements.navMenu.classList.add('navbar__menulinks__show')
        navElements.navBtn.classList.add('fa-xmark')
        navElements.navBtn.classList.remove('fa-bars')
    } else if (navElements.navMenu.classList.contains('navbar__menulinks__show')){
        navElements.navMenu.classList.remove('navbar__menulinks__show')
        navElements.navBtn.classList.add('fa-bars')
        navElements.navBtn.classList.remove('fa-xmark')
    }
};


navElements.navBtn.addEventListener('click', displayMenu);

