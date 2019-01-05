
var blur = document.querySelector('.blur');
var mainLogo = document.getElementById("main-logo")
var comingSoon = document.getElementById("coming-soon")

var timeoutID;

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    blur.style.opacity = 1;
    // timeoutID = setTimeout(makeVisible, 1000, blur);

    // timeoutID = setTimeout(makeVisible, 1000, mainLogo);
    mainLogo.style.opacity = 1;

    // timeoutID = setTimeout(scaleUp, 800, mainLogo);
    mainLogo.style.transform = "scale(1.0)";
    console.log("Main logo appeared");

    comingSoon.style.opacity = 1;
  }
}


function makeVisible(obj) {
  obj.style.opacity = 1;
  console.log("opacity done");
}

function scaleUp(obj) {
  obj.style.transform = "scale(1.0)";
}
