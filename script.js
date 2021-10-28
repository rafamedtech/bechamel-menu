// Dom items
const backButton = document.querySelector('.btn');
const menuTitle = document.getElementById('menu');
const menuHeader = document.getElementById('header');
const logo = document.querySelector('.logo');

// Event Listeners
menuTitle.addEventListener('click', showMainMenu);
window.addEventListener('scroll', showMenu);

// Functions
function showMainMenu() {
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
  menuTitle.classList.remove('active');
  menuHeader.classList.remove('active');
  logo.classList.remove('active');
}

function showMenu() {
  if (window.scrollY > backButton.offsetHeight + 150) {
    backButton.classList.add('active');
  } else {
    backButton.classList.remove('active');
  }
}