// preloader

window.addEventListener("load", function () {
  document.querySelector("#preloader").style.display = "block";
  setTimeout(function () {
    document.querySelector("#preloader").style.display = "none";
  }, 3000);
});

// animation in the page addtion
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//firebase congig
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

// active scroll bar
// class ActiveMenu {
//   constructor(menuSelector, sectionSelector, offset = 100) {
//     this.menuItems = document.querySelectorAll(menuSelector);
//     this.sections = document.querySelectorAll(sectionSelector);
//     this.offset = offset;
//     window.addEventListener("scroll", () => this.handleScroll());
//   }

//   handleScroll() {
//     const currentScrollPos = window.scrollY;
//     this.sections.forEach((section, index) => {
//       const sectionTop = section.offsetTop - this.offset;
//       const sectionBottom = sectionTop + section.offsetHeight;
//       if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
//         this.menuItems[index].classList.add("active");
//       } else {
//         this.menuItems[index].classList.remove("active");
//       }
//     });
//   }
// }

// const activeMenu = new ActiveMenu(".menu-item", "section");

// second try
// var header = document.querySelector(".header");
// var links = document.querySelectorAll(".links");
// var section = document.querySelectorAll("section");
// window.onscroll = function () {
//   if (window.pageXOffset > header.offsetHeight) {
//     header.style.background = "rgba(0,0,0,0.5)";
//   } else {
//     header.style.background = "black";
//   }
//   var current = "home";
//   section.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYoffset >= sectionTop - 60) {
//       current - section.getAttribute("id");
//     }
//   });

//   links.forEach((item) => {
//     item.classList.remove("active");
//     if (item.href.includes(current)) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// };

// this is we did for the nav bar for the bottom view of the section
$(document).ready(function () {
  var navHeight = $(".navbar").outerHeight();
  $("section").css("padding-top", navHeight);
});
