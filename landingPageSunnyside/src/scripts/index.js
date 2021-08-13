
const menuNav = document.querySelector('.top-menu');
const menuNavButton = document.querySelector('.icon-ham');
const menuNavLinks = document.querySelectorAll('.top-bar-link');
menuNavButton.addEventListener('click', openMenuNav);
menuNavLinks.forEach(link => {
    link.addEventListener('click', menuNavActive);
})
function openMenuNav() {
    menuNav.classList.toggle("menu-active");
    menuNavButton.classList.toggle("active");
}
function menuNavActive() {
    const linkActive = document.querySelector('.link-active')
    if (this.id !== linkActive.id) {
        this.classList.add('link-active');
        linkActive.classList.remove('link-active');
    }
}

