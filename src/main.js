import './style.css'
import iconHamburger from './assets/images/icon-hamburger.svg'
import iconClose from './assets/images/icon-close.svg'



const urlInput = document.querySelector('#url-input')
const urlForm = document.querySelector('.url-form')
const errorMessage = document.querySelector('.error-msg')

const buttonMenu = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav-menu')
const iconMenu = document.querySelector('.icon-menu')


// url validation

urlForm.addEventListener('submit', (e) => {
  e.preventDefault()

  function validUrl(str) {
    const pattern =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

    return pattern.test(str)
  }

  if (urlInput.value === '') {
    errorMessage.innerText = 'Please enter something'
    urlInput.classList.add('border-2', 'border-red-700')
  } else if (!validUrl(urlInput.value)) {
    errorMessage.innerText = 'Please enter a valid url'
    urlInput.classList.add('border-2', 'border-red-700')
  } else {
    errorMessage.innerText = ''
    urlInput.classList.remove('border-2', 'border-red-700')
    alert('Success url!')
  }
})

// menu

buttonMenu.addEventListener('click', () => {
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden')
    navMenu.classList.add('flex')
    buttonMenu.setAttribute('aria-expanded', true)
    iconMenu.src = iconClose;
  } else {
    navMenu.classList.add('hidden')
    navMenu.classList.remove('flex')
    buttonMenu.setAttribute('aria-expanded', false)
    iconMenu.src = iconHamburger;
  }

}) 
