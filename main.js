window.addEventListener('scroll', onScroll)

function onScroll() {
  shoNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contct)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //o topo da seçao
  const sectionTop = section.offsetTop
  //a altura da seçoa
  const sectionHeight = section.offsetHeight

  //o topo da seçao chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // informaçoes dos dados e da logica
  console.log(
    'o topo d seçao chegou ou passou da linha?',
    sectionTopReachOrPassedTargetline
  )

  // a seçao termina onde ?

  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seçao passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  console.log(
    'o fundo da seçao passou da lina ?',
    sectionTopReachOrPassedTargetline
  )

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function shoNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    BackToTopButton.classList.add('show')
  } else {
    BackToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({}).reveal('#home')
