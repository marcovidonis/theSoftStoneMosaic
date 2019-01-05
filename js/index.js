
var blur = document.querySelector('.blur');
var mainLogo = document.getElementById("main-logo")

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    blur.style.opacity = 1;
    console.log("opacity done");

    mainLogo.style.opacity = 1;
    mainLogo.style.transform = "scale(1.0)";
    console.log("Main logo appeared");
  }
}
