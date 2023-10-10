export function toggleNavMenu() {
    document.addEventListener('DOMContentLoaded', () => {
        const headerNav = document.querySelector('nav[data-header-nav]');
        const body = document.body;
        const burger = document.querySelector('.nav__menu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            headerNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        })
    })
}