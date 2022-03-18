document.querySelector("form").addEventListener("submit", formSubmit);
var userStack = JSON.parse(localStorage.getItem("userDataBase")) || [];
function formSubmit(event) {
  event.preventDefault();
  var user = document.querySelector("#user").value;
  var pass = document.querySelector("#pass").value;

  var userData = {
    userName: user,
    passwd: pass
    
  };

  userStack.push(userData);

  //console.log(userStack);
  localStorage.setItem("userDataBase", JSON.stringify(userStack));
  alert("signup success");
  window.location.href = "login.html";
}