// DOM items
const backButton = document.querySelector('.btn');
const menuTitle = document.getElementById('menu');
const menuHeader = document.getElementById('header');
const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('.sections');

// Event Listeners
menuTitle.addEventListener('click', showMainMenu);
window.addEventListener('scroll', showMenu);

// Functions
function showMainMenu() {
  menuTitle.classList.remove('active');
  menuTitle.innerText = 'Menú';
  menuHeader.classList.remove('active');
  logo.classList.remove('active');
  sections.forEach((section) => section.classList.remove('sections'));
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
}

function showMenu() {
  if (window.scrollY > backButton.offsetHeight + 150) {
    backButton.classList.add('active');
  } else {
    backButton.classList.remove('active');
  }
}
