const menuBtn = document.querySelector('.hamburger');
const hamburger = document.querySelector('.hamburger_container');
let showMenu = false; 
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.nav_ul');
const navItems = document.querySelectorAll('.nav_ul-list');



menuBtn.addEventListener('click', toggleMenu);

function toggleMenu  () {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    showMenu = true; 
    navItems.forEach(item => item.classList.add('open'));

  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    showMenu = false; 
    navItems.forEach(item => item.classList.remove('open'));
  }
}

console.log(menuBtn)
