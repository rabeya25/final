// Firstly, the Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAoYTPXqLajqTP9UwcjIHmZdvAClbxoyZI",
    authDomain: "puppies-40c29.firebaseapp.com",
    databaseURL: "https://puppies-40c29.firebaseio.com",
    projectId: "puppies-40c29",
    storageBucket: "",
    messagingSenderId: "958284468186",
    appId: "1:958284468186:web:852762ea634210435dbae3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name'); //getInputVal('name');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lastname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname:lastname,
    email:email,
    phone:phone,
    message:message
  });
}
