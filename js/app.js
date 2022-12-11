function scrollNavbar() {
  let calc = window.scrollY;
  let navbar = document.querySelector('nav');
  if (calc > 0) {
    navbar.classList.add('navbar-scroll');
  } else if (calc <= 0) {
    navbar.classList.remove('navbar-scroll');
  }
}

window.onscroll = () => {
  scrollNavbar();
};
