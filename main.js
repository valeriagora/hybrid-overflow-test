const leftS = document.getElementById("left");
const rightS = document.getElementById("right");
let isLOpen = getComputedStyle(leftS).width === "244px";
let isROpen = getComputedStyle(rightS).width === "344px";
console.log("open", isLOpen, isROpen);
const toggleLeft = () => {
  let isLOpen = getComputedStyle(leftS).width === "244px";
  if (isLOpen) {
    leftS.style.width = "80px";
  } else {
    leftS.style.width = "244px";
  }
};
const toggleRight = () => {
  let isROpen = getComputedStyle(rightS).width === "344px";
  if (isROpen) {
    rightS.style.width = "40px";
  } else {
    rightS.style.width = "344px";
  }
};
leftS.addEventListener("click", toggleLeft);
rightS.addEventListener("click", toggleRight);
