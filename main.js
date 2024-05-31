let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");

btn1.addEventListener("click", function () {
  if (answer1.hidden == true) {
    answer1.hidden = false;
    img1.src = "./assets/img/icon-minus.svg";
  } else {
    answer1.hidden = true;
    img1.src = "./assets/img/icon-plus.svg";
  }
});

btn2.addEventListener("click", function () {
  if (answer2.hidden == true) {
    answer2.hidden = false;
    img2.src = "./assets/img/icon-minus.svg";
  } else {
    answer2.hidden = true;
    img2.src = "./assets/img/icon-plus.svg";
  }
});

btn3.addEventListener("click", function () {
  if (answer3.hidden == true) {
    answer3.hidden = false;
    img3.src = "./assets/img/icon-minus.svg";
  } else {
    answer3.hidden = true;
    img3.src = "./assets/img/icon-plus.svg";
  }
});

btn4.addEventListener("click", function () {
  if (answer4.hidden == true) {
    answer4.hidden = false;
    img4.src = "./assets/img/icon-minus.svg";
  } else {
    answer4.hidden = true;
    img4.src = "./assets/img/icon-plus.svg";
  }
});
