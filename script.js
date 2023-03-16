"use strict";
const formAbout = document.querySelector(".form-about");
const inforDetails = document.querySelector(".infor-details");
const inputEmail = document.getElementById("inputEmail");
const errorEl = document.querySelector(".error");
const btnSubmit = document.querySelector(".submit");
const deailsAbout = document.querySelectorAll(".detailsAbout");
const viewEl = document.querySelectorAll(".view");
const viewMoreEl = document.querySelectorAll(".viewmore");
const viewLessEl = document.querySelectorAll(".viewless");

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const changeview = function (i) {
  viewMoreEl[i].classList.toggle("hide");
  viewLessEl[i].classList.toggle("hide");
};
// About button (email checked)
btnSubmit.addEventListener("click", function () {
  const email = inputEmail.value;
  if (emailRegex.test(email)) {
    formAbout.classList.add("hide");
    inforDetails.classList.remove("hide");
    errorEl.classList.add("hide");
  } else {
    errorEl.classList.remove("hide");
  }
});
inputEmail.addEventListener("keydown", function (e) {
  console.log(e.key);
  const email = inputEmail.value;
  if (e.key === "Enter" && !inforDetails.classList.contains("hidden")) {
    if (emailRegex.test(email)) {
      formAbout.classList.add("hide");
      inforDetails.classList.remove("hide");
      errorEl.classList.add("hide");
    } else {
      errorEl.classList.remove("hide");
    }
  }
});
// Information
let check = [false, false, false, false, false, false];
for (let i = 0; i < check.length; i++) {
  viewEl[i].addEventListener("mouseover", function () {
    if (!check[i]) {
      viewMoreEl[i].classList.remove("hide");
      viewLessEl[i].classList.add("hide");
    }
  });
  viewEl[i].addEventListener("mouseout", function () {
    if (!check[i]) {
      viewMoreEl[i].classList.add("hide");
    }
  });
  viewMoreEl[i].addEventListener("click", function () {
    changeview(i);
    deailsAbout[i].classList.remove("hide");
    check[i] = true;
  });
  viewLessEl[i].addEventListener("click", function () {
    changeview(i);
    deailsAbout[i].classList.add("hide");
    check[i] = false;
  });
}
