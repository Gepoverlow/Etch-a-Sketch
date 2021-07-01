const container = document.querySelector(".containerMain");
const reset = document.querySelector(".resetBtn");

// for (let i = 0; i <= 16; i++) {
//   const grid = document.createElement("div");
//   container.appendChild("grid");
//   grid.classList.add("grid");
// }

const calculatePrompt = function (number) {
  return number * number;
};
/*
const stored = function () {
  let grid = document.createElement("div");
  grid.classList.add("grids");
  return grid * 7;
};
*/

// for (let i = 0; i < 4; i++) {
//   let grid = document.createElement("div");
//   grid.classList.add("grids");
//   container.appendChild(grid);
// }

reset.addEventListener("click", function () {
  let request = prompt("Pick a number from 1 to 10");
  let requested = calculatePrompt(request);

  for (let i = 0; i < requested; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grids");
    container.appendChild(grid);
    container.style.gridTemplateColumns = `repeat(${request}, auto)`;
    container.style.gridTemplateRows = `repeat(${request}, auto)`;
  }
});
