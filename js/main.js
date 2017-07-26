// //log in
// var modal = document.getElementById('id01');
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
function validateForm(){
if (uName == true || uPass == true) {
  alert('Success!')
  window.location = "success.html"
  return false
  }
else {
  alert('Username or Password incorrect')
  }
}

function register(){
  var emailInput = document.getElementById('uEmail').value
  var newUser = document.getElementById('newUser').value
  var newPass = document.getElementById('newPass').value
  var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{0,15}$/
  console.log(emailInput)

  if (newUser == "") {
    alert('Success!')
    window.location = "forms.html"
  } else {
    alert('please enter a user name')
    return
  }
document.getElementById('register').addEventListener('click', register, false)
}
