const confirmBtn = document.querySelector('.confirm-btn')
const inputEmail = document.querySelector('#input-email')
const errorImagem = document.querySelector('.error-image')
const erroMessage = document.querySelector('.error-message')
const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

confirmBtn.addEventListener('click', ()=> {
    const userEmail = inputEmail.value
    validateInput(userEmail)
})

inputEmail.addEventListener('keyup', (e) => {
    const userEmail = e.target.value
    const key = e.keycode || e.which
    const isKeyEnterPressed = key === 13

    if(isKeyEnterPressed) {
        validateInput(userEmail)
    }
})

function validateInput(userEmail) {
    if (inputEmail.classList.contains('boder')) {
        inputEmail.classList.remove('boder')
    }

    if (validateEmail(userEmail)) {
        errorImagem.style.visibility = 'hidden'
        erroMessage.style.visibility = 'hidden'
    } else {
        inputEmail.classList.add('boder')
        errorImagem.style.visibility = 'visible'
        erroMessage.style.visibility = 'visible'
    }
}

function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/

    return emailRegex.test(email)
}
