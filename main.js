let menu = document.querySelector('#menu-icon');
let sidenavbar = document.querySelector('.side-navbar');
let content = document.querySelector('.content');
let nav_right = document.querySelector('.nav_right');
let logo = document.querySelector('.logo');
let logotx = document.querySelector('.logo .text');

menu.onclick = () => {
    sidenavbar.classList.toggle('active');
    content.classList.toggle('active');
    nav_right.classList.toggle('active');
    logo.classList.toggle('active');
    logotx.classList.toggle('active');
}
