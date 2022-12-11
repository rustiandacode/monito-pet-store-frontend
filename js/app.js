// change navbar background on scroll web
function navbarScroll() {
  let calc = scrollY;
  let navbar = document.querySelector('nav');

  if (calc > 0) {
    navbar.classList.add('navbar-scroll');
  } else if (calc <= 0) {
    navbar.classList.remove('navbar-scroll');
  }

  console.log(calc);
}

window.onscroll = () => {
  navbarScroll();
};
