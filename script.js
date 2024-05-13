const box = document.querySelector(".box");
const widthInput = document.getElementsByName("width")[0];
const heightInput = document.getElementsByName("height")[0];
const colorInput = document.getElementsByName("bg-color")[0];
const borderRadiusInput = document.getElementsByName("border-radius")[0];
widthInput.addEventListener("keyup", function (e) {
  box.style.width = e.target.value + "px";
});
heightInput.addEventListener("keyup", function (e) {
  box.style.height = e.target.value + "px";
});
colorInput.addEventListener("input", function (e) {
  box.style.backgroundColor = e.target.value;
});
borderRadiusInput.addEventListener("keyup", function (e) {
  box.style.borderRadius = e.target.value + "px";
});
// let numOfCourses = 20;
// let total = 0;
// for (let i = 0; i < numOfCourses; i++) {
//   total += courseInput[i] * unitInput[i].value;
//   console.log(i);
// }
// console.log(total);
