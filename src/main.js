import './style.css'

const urlInput = document.querySelector('#url-input')
const urlForm = document.querySelector('.url-form')
const errorMessage = document.querySelector('.error-msg')

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
