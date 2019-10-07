// Firstly, the Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyBogk0rY16yi_uw3UIVDf5rIXAJAqpnkmU",
 authDomain: "comment-58057.firebaseapp.com",
 databaseURL: "https://comment-58057.firebaseio.com",
 projectId: "comment-58057",
 storageBucket: "",
 messagingSenderId: "107938078309",
 appId: "1:107938078309:web:74fc11bf2a72369d81308c"
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

  var message = getInputVal('message');

  // Save message
  saveMessage(name, message);

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
function saveMessage(name, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    message:message
  });
}
