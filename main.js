const config = {
  apiKey: "AIzaSyB3uX-Vv_LvfN9twElvoX1_rzAd90vgfwM",
  authDomain: "portfolio-a9913.firebaseapp.com",
  databaseURL: "https://portfolio-a9913-default-rtdb.firebaseio.com",
  projectId: "portfolio-a9913",
  storageBucket: "portfolio-a9913.appspot.com",
  messagingSenderId: "92773366033",
  appId: "1:92773366033:web:adc39ac9ebca19650274b0",
};

// Initialize Firebase
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("contactForm");
function submitForm() {
  // e.preventDefault();

  // Get values
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone").value;
  var subject = document.getElementById("Subject").value;
  var message = document.getElementById("Message").value;

  // Save message
  saveMessage(name, email, phone, subject, message);
  alert("Message sent");

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  // document.getElementById("contactForm").reset();
}

// Save message to firebase
function saveMessage(name, email, phone, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });
}

//typing animaiton

var typed = new Typed(".typing", {
  strings: ["Developer!", "Designer!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typingg", {
  strings: ["Developer", "Designer!"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
