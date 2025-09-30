let menu = document.querySelector('#menu-icon');
let sidenavbar = document.querySelector('.side-navbar');
let content = document.querySelector('.content');

menu.onclick = () => {
    sidenavbar.classList.toggle('active');
    content.classList.toggle('active');
     document.querySelectorAll('.switch .item').forEach(el => {
        el.style.display = el.style.display === 'none' ? 'flex' : 'none';
    });
}


const theme = document.getElementById("theme");

theme.addEventListener("click", () =>
  document.body.classList.toggle("dark-theme")
);
