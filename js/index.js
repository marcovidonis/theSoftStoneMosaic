
var blur = document.querySelector('.blur');
// var cut = document.querySelector('.cut');

// function show(index) {
//   blur.style.opacity = 1;
// }
//
// function unDim() {
//   bg.classList.remove('bg--dimmed');
// }
//
// cut.addEventListener("mouseenter", (event) => { dim(); });
// cut.addEventListener("mouseleave", (event) => { unDim(); });
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    blur.style.opacity = 1;
    console.log("opacity done");
  }
}
