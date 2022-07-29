const changeBackground = document.body;

//selecting the specific page in navbar
const hexPage = document.getElementById("hex-page");
const rgbPage = document.getElementById("rgb-page");
const hslPage = document.getElementById("hsl-page");

//Selecting the specific div
const hexWrap = document.getElementById("hex-wrapper");
const rgbWrap = document.getElementById("rgb-wrapper");
const hslWrap = document.getElementById("hsl-wrapper");

//Selecting the specific span in div
const hexColor = document.getElementById("hexColor");
const rgbColor = document.getElementById("rgbColor");
const hslColor = document.getElementById("hslColor");

//Selecting the specific button in div
const hexBtn = document.getElementById("hexBtn");
const rgbBtn = document.getElementById("rgbBtn");
const hslBtn = document.getElementById("hslBtn");

//hexPage
hexPage.addEventListener("click", function () {
  if (hexPage.style.textDecoration != "underline") {
    hexWrap.style.display = "block";
    rgbWrap.style.display = "none";
    hslWrap.style.display = "none";
    hexPage.style.textDecoration = "underline";
    rgbPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "none";

    changeBackground.style.backgroundColor = hexColor.textContent;
  }
});

//rgbPage
rgbPage.addEventListener("click", function () {
  if (rgbPage.style.textDecoration != "underline") {
    hexWrap.style.display = "none";
    rgbWrap.style.display = "block";
    hslWrap.style.display = "none";
    hexPage.style.textDecoration = "none";
    rgbPage.style.textDecoration = "underline";
    hslPage.style.textDecoration = "none";

    changeBackground.style.backgroundColor = rgbColor.textContent;
  }
});

//hslPage
hslPage.addEventListener("click", function () {
  if (hslPage.style.textDecoration != "underline") {
    hexWrap.style.display = "none";
    rgbWrap.style.display = "none";
    hslWrap.style.display = "block";
    hexPage.style.textDecoration = "none";
    rgbPage.style.textDecoration = "none";
    hslPage.style.textDecoration = "underline";

    changeBackground.style.backgroundColor = hslColor.textContent;
  }
});

//hexBtn
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumber;
hexBtn.addEventListener("click", function () {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * hex.length);
    hexValue += hex[randomNumber];
  }

  hexColor.textContent = hexValue;
  changeBackground.style.background = hexValue;
});

//rgbBtn
rgbBtn.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  let rgbValue = "rgb(" + a + ", " + b + ", " + c + ")";

  rgbColor.textContent = rgbValue;
  changeBackground.style.background = rgbValue;
});

//hslBtn 
hslBtn.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 361);
    let b = Math.floor(Math.random() * 101);
    let c = Math.floor(Math.random() * 101);
  
    let hslValue = "hsl(" + a + ", " + b + "%, " + c + "%)";
  
    hslColor.textContent = hslValue;
    changeBackground.style.background = hslValue;
  });
  