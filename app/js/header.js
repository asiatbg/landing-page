// Close/open menu on small device

const overlay = document.getElementsByClassName('overlay');
const navMenu = document.getElementById(('nav-menu'));
const hamburgerBtn = document.getElementById('hamburger-btn');

hamburgerBtn.addEventListener('click', function() {
    if (!document.querySelector('.transition-overlay')) {
        navMenu.classList.remove('grid-menu');
        navMenu.classList.add('overlay-nav-menu');
        hamburgerBtn.querySelector('.fas').classList.replace('fa-bars', 'fa-times');

        for (let i = 0; i < overlay.length; i++) {
            overlay[i].classList.add('transition-overlay');
        }

    } else {
        navMenu.classList.add('grid-menu');
        navMenu.classList.remove('overlay-nav-menu');
        hamburgerBtn.querySelector('.fas').classList.replace('fa-times', 'fa-bars');
        for (let i = 0; i < overlay.length; i++) {
            overlay[i].classList.remove('transition-overlay');
        }
        closeAllSubmenu();
    }
});


// Submenu
const submenu = document.querySelectorAll('.open-submenu');

for( let i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener('click', function() {

        if (!this.querySelector('.show-submenu')) {

            closeAllSubmenu();

            this.querySelector('.submenu-nav').classList.add('show-submenu');
            this.querySelector('.fas').classList.replace("fa-angle-down","fa-angle-up");
        }
        else {

            this.querySelector('.submenu-nav').classList.remove('show-submenu');
            this.querySelector('.fas').classList.replace("fa-angle-up", "fa-angle-down");
        }
    });
}


const closeAllSubmenu = () => {
    const submenuNav = document.getElementsByClassName('submenu-nav');
    for (let j = 0; j < submenuNav.length; j++) {
        submenuNav[j].classList.remove('show-submenu');
        submenu[j].querySelector('.fas').classList.replace("fa-angle-up", "fa-angle-down");
    }
}


