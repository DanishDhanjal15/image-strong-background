const password = document.getElementById('password')
const background = document.getElementById('background')
const email = document.getElementById('email')

const MIN_EMAIL_LENGTH = 6

function isValidEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return emailPattern.test(value)
}

email.addEventListener('input', (e) => {
  const value = e.target.value.trim()
  if (value.length < MIN_EMAIL_LENGTH || !isValidEmail(value)) {
    email.style.border = '2px solid red'
  } else {
    email.style.border = '2px solid green'
  }
})

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
