const backButton = document.querySelector('.btn');
window.addEventListener('scroll', showBack);

function showBack() {
  if (window.scrollY > backButton.offsetHeight + 150) {
    backButton.classList.add('active');
  } else {
    backButton.classList.remove('active');
  }
}
