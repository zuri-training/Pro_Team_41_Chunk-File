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

//hambuger menu

const menuBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active')
  mobileMenu.classList.toggle('is-active')
})
