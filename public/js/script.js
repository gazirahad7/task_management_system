// Get the modal
let modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");
let btn = document.getElementsByClassName("myBtn");

console.log("BTN", btn);
let ok = 1;
for (let i = 0; i < btn.length; i++) {
  //console.log("BTN", btn[i]);
  if (ok) {
    btn[i].addEventListener("click", () => {
      modal[i].style.display = "block";
    });
  }
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

for (let i = 0; i < btn.length; i++) {
  span[i].addEventListener("click", () => {
    modal[i].style.display = "none";
  });
}

// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// li.forEach((ele) => {
//   ele.addEventListener("click", () => {
//     ul.querySelector(".active").classList.remove("active");

//     ele.classList.add("active");
//   });
// });

// Dark Mode
