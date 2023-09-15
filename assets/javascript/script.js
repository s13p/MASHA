const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarLinks.classList.toggle("active5");
});

//-------------------1st faq----------//


const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

q1.addEventListener("click", () => {
    q1.classList.add("active1");
    q2.classList.add("active");
    col1.classList.add("active");
});

col2.addEventListener("click", () => {
    q1.classList.toggle("active1");
    q2.classList.toggle("active");
    col1.classList.toggle("active");
});

q2.addEventListener("click", () => {
    q1.classList.remove("active1");
    q2.classList.remove("active");
    col1.classList.remove("active");
});

//-------------------2nd faq----------//

const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const col3 = document.querySelector(".col3");
const col4 = document.querySelector(".col4");

q3.addEventListener("click", () => {
    q3.classList.add("active1");
    q4.classList.add("active");
    col3.classList.add("active");
});

col4.addEventListener("click", () => {
    q3.classList.toggle("active1");
    q4.classList.toggle("active");
    col3.classList.toggle("active");
});

q4.addEventListener("click", () => {
    q3.classList.remove("active1");
    q4.classList.remove("active");
    col3.classList.remove("active");
});

//-------------------3rd faq----------//

const q5 = document.querySelector(".q5");
const q6 = document.querySelector(".q6");
const col5 = document.querySelector(".col5");
const col6 = document.querySelector(".col6");

q5.addEventListener("click", () => {
    q5.classList.add("active1");
    q6.classList.add("active");
    col5.classList.add("active");
});

col6.addEventListener("click", () => {
    q5.classList.toggle("active1");
    q6.classList.toggle("active");
    col5.classList.toggle("active");
});

q6.addEventListener("click", () => {
    q5.classList.remove("active1");
    q6.classList.remove("active");
    col5.classList.remove("active");
});


// var coll = document.getElementsByClassName("question");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


// const navbarToggle1 = document.querySelector(".drop");
// const navbarLinks1 = document.querySelector(".dropdown-content");

// navbarToggle1.addEventListener("mouseover", () => {
//   navbarToggle1.classList.toggle("active");
//   navbarLinks1.classList.toggle("active");
// });



// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }