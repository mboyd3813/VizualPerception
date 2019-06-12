$(document).ready(function (){
  $('.button_1').click(function (event){
    console.log('Click')

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()
    
    if(name.length > 0) {
    } else {
      event.preventDefault()
      statusElm.append('<div>Please Enter Name!</div>') 
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
    } else{
      event.preventDefault()
      statusElm.append('Email is not Valid!')
    }

    if(message.length >= 30) {
    } else {
      event.preventDefault()
      statusElm.append('<div>Message must be 30char long!</div>')
    }
  })
})