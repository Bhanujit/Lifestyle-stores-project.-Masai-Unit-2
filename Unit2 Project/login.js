document.querySelector("form").addEventListener("submit", signin);

var regdUsers = JSON.parse(localStorage.getItem("userDataBase"));


function signin(event) {
  event.preventDefault();
  var user = document.querySelector("#user").value;
  var pass = document.querySelector("#pass").value;
  let flag = false;
  for (var i = 0; i < regdUsers.length; i++) {
   
    if (regdUsers[i].userName == user && regdUsers[i].passwd == pass) {
    //  console.log(regdUsers[i][userName], regdUsers[i][userName])
      flag = true;
    }
  }
  if(flag === true){
     window.location= "menshome.html"
     alert("Signed in")
  }
  else{
    alert("Incorrect Username or Password")
  }
}