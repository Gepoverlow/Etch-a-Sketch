"use strict";
/*
const container = document.querySelector(".containerMain");
const reset = document.querySelector(".resetBtn");
const test = document.querySelector(".test");

let grid = document.createElement("div");
let grids = document.querySelectorAll(".grid");

for (let i = 0; i < 100; i++) {
  grid = document.createElement("div");
  grid.classList.add("grids");
  container.appendChild(grid);
}

const calculatePrompt = function (number) {
  return number * number;
};

test.addEventListener("click", function () {
  while (grid === grid) container.removeChild(grid);
});

reset.addEventListener("click", function () {
  let request = prompt("Pick a number from 1 to 10");
  let requested = calculatePrompt(request);
  for (let i = 0; i < requested; i++) {
    grid = document.createElement("div");
    grid.classList.add("grids");
    container.appendChild(grid);
    container.style.gridTemplateColumns = `repeat(${request}, auto)`;
    container.style.gridTemplateRows = `repeat(${request}, auto)`;
  }
});

console.log(grid);
*/
/////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelectorAll(".containerMain")[0];
  for (let i = 0; i < 36; i++) {
    let grid = document.createElement("div");
    container.appendChild(grid);
    grid.classList.add("grids");
  }
  const grids = document.querySelectorAll(".grids");
  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("click", function () {
      grids[i].classList.add("hover");
    });
  }
  const reset = document.querySelector(".resetBtn");
  reset.addEventListener("click", function () {
    for (let i = 0; i < grids.length; i++) {
      grids[i].classList.remove("hover");
    }
  });
  const resize = document.querySelector(".test");
  resize.addEventListener("click", function () {
    let request = prompt("pick a number");
    let requested = request * request;
    container.innerHTML = "";
    if (request > 0 && request <= 53) {
      for (let i = 0; i < requested; i++) {
        let grid = document.createElement("div");
        container.appendChild(grid);
        grid.classList.add("grids");
        container.style.gridTemplateColumns = `repeat(${request}, auto)`;
        container.style.gridTemplateRows = `repeat(${request}, auto)`;
      }
      const grids = document.querySelectorAll(".grids");
      for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener("click", function () {
          grids[i].classList.add("hover");
        });
      }
    } else {
      prompt("The Number has to be between 1 and 54");
    }
  });
});
