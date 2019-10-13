



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById('logout').style.display='block';
    document.getElementById('login').style.display='none';
  } else {
    console.log("logged out");
    document.getElementById('logout').style.display='none';
    document.getElementById('login').style.display='block';
  }
});


function logout_func(){
  firebase.auth().signOut();
  document.location.href = "./index.html?Logout=Successful";
}
