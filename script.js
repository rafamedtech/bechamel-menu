const backButton = document.querySelector('.btn');

document.addEventListener('dblclick', () => {
  document.documentElement.requestFullscreen().catch((e) => {
    console.log(e);
  });
});

window.addEventListener('scroll', showMenu);

function showMenu() {
  if (window.scrollY > backButton.offsetHeight + 150) {
    backButton.classList.add('active');
  } else {
    backButton.classList.remove('active');
  }
}
