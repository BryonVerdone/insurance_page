const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

navToggle.addEventListener('click', function () {
  mobileNav.classList.toggle('hidden');
  console.log('click');
});
