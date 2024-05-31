let btn1 = document.querySelector("#btn1");
let img1 = document.querySelector("#img1");
let answer1 = document.querySelector("#answer1");

btn1.addEventListener("click", function () {
  if (answer1.hidden == true) {
    answer1.hidden = false;
    img1.src = "./assets/img/icon-minus.svg";
  } else {
    answer1.hidden = true;
    img1.src = "./assets/img/icon-plus.svg";
  }
});