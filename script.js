const backButton = document.querySelector('.btn');
const menuTitle = document.getElementById('menu');
const menuHeader = document.getElementById('header');

menuTitle.addEventListener('click', showMainMenu);

function showMainMenu() {
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
  menuTitle.classList.remove('active');
  menuHeader.classList.remove('active');
}

document.addEventListener('dblclick', () => {});

window.addEventListener('scroll', showMenu);

function showMenu() {
  if (window.scrollY > backButton.offsetHeight + 150) {
    backButton.classList.add('active');
  } else {
    backButton.classList.remove('active');
  }
}
