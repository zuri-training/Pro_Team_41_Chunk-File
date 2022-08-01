const navBar = document.querySelector('.navbar')

document.addEventListener('scroll', navShadow)

// navShadow effect
function navShadow() {
  if (window.scrollY > 145) {
    navBar.classList.add('floatingNav')
  } else {
    navBar.classList.remove('floatingNav')
  }
}
