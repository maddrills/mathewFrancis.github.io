"use strict";

// into selector
const cards = document.querySelectorAll(".cards");
const circularStuff = document.querySelector(".content-ajustment");
const fullTag = document.querySelector(".lastChildOfTag");

const clearAllZee = function () {
  cards.forEach((ele, pos, full) => {
    ele.classList.add("hide");
  });
};

//displays or removes card eminent
const zeePatternCardAnimater = function () {
  clearAllZee();

  let entered = 0;
  circularStuff.addEventListener("mouseover", (e) => {
    if (entered) return;
    clearAllZee();

    if (e.target.classList.contains("targetTag")) {
      const hidenElement = e.target.querySelector(".cards");
      hidenElement.classList.remove("hide");
      entered = 1;
    }
  });

  // circularStuff.addEventListener("click", (e) => {
  //   console.log("Clicked");
  //   if (entered) return;
  //   clearAllZee();

  //   if (e.target.classList.contains("targetTag")) {
  //     console.log("In class list");
  //     const hidenElement = e.target.querySelector(".cards");
  //     hidenElement.classList.remove("hide");
  //     entered = 1;
  //   }
  //   if (e.target.classList.contains("svg-click")) {
  //     console.log("In class list");
  //     const hidenElement = e.target.querySelector(".cards");
  //     hidenElement.classList.remove("hide");
  //     entered = 1;
  //   }
  // });

  // unstable // instability fixed
  circularStuff.addEventListener("mouseout", (e) => {
    if (!e.target.classList.contains("grid")) return;
    entered = 0;
  });
};

if (circularStuff) {
  zeePatternCardAnimater();
}

// nav bar settings // cheat fix Will address later
const naveElementColor = document.querySelectorAll(".main-nav-link");
const navBackgroundColor = document.querySelector(".full-stretch");
const footer = document.querySelector(".colorIt");
const cangeNavBar = function (
  navBarColor,
  textColor,
  footerColor = "rgb(85, 85, 85)",
  num
) {
  navBackgroundColor.style.backgroundColor = navBarColor;
  naveElementColor.forEach((ele, pos, full) => {
    ele.style.color = textColor;
  });
  footer.style.backgroundColor = footerColor;
  const config = `4px solid ${textColor}`;
  //const config = " 5px solid rgb(187, 0, 0)";
  const underline = document.querySelector(`.main-nav-link${num}`);
  console.log((underline.style.borderBottom = config));
  underline.style.transition = "border-bottom 0.10s";
  //underline.style.fontSize = "2.4rem";
};

if (document.getElementById("introPage")) {
  cangeNavBar("rgb(255, 255, 255)", "rgb(85, 85, 85)", "_", 1);
}

if (document.getElementById("output")) {
  cangeNavBar("rgb(0, 51, 10)", "rgb(209, 255, 192)", "rgb(0, 51, 10)", 2);
  //navBackgroundColor.classList.add("full-stretch-green");
}

if (document.getElementById("skillsPage")) {
  cangeNavBar("rgb(33, 37, 41)", "rgb(248, 249, 250)", "rgb(33, 37, 41)", 3);
}

//nav bar underline
//selecting nav link parent element
if (0) {
  if (mainPage) {
    const navUnderLine = document.querySelector(".main-nav-list");
    navUnderLine.addEventListener("click", (e) => {
      console.log(e.target);
      if (mainPage) {
        e.preventDefault();
      }
    });
  }
}
