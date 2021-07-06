var signIn = document.querySelector('#signin')
var signUp = document.querySelector('#signup')
var body = document.querySelector('body')

signIn.addEventListener('click', function () {
  body.className = 'sign-in'
})

signUp.addEventListener('click', function () {
  body.className = 'sign-up'
})
