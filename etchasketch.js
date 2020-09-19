const container = document.querySelector('.container');
let rows = 16;
let columns = 16;
let newGrid;

// Function to create grid
let makeSketchArea = function() {
  for (let i = 0; i < (rows * columns); i++) {
    let newCell = document.createElement('div');
    newCell.classList.add('cell', `cell-${i}`);

    container.appendChild(newCell);
  };

  // Style the container
  container.style.cssText = `height: 576px; width: 576px; margin: 0 auto; display: grid; grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`
};

makeSketchArea();


// Style all of the grid cells
const gridCells = document.getElementsByClassName('cell');
for (let c = 0; c < gridCells.length; c++) {
  gridCells[c].style.background = '#B0E0E6';
  gridCells[c].style.border = '1px solid black';
};
//drawing function
for (let h = 0; h < gridCells.length; h++) {
  gridCells[h].addEventListener('mouseover', function(e) {
    e.target.style.background = 'black';
  });
};
//reset button
const body = document.querySelector('body');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('reset-button');
const button = document.createElement('button');
button.textContent = "Shake Pad";

buttonContainer.appendChild(button);
buttonContainer.style.cssText = "margin: 20px auto; text-align: center";
button.style.cssText = "margin: 10px; padding: 10px 20px; color: white; background: red; border: none";

body.insertBefore(buttonContainer, container);

button.addEventListener('click', function() {

  let newSketchArea = +prompt("Let's make a new sketchpad. How many squares per side would you like?");

    if (newSketchArea == 0 || isNaN(newSketchArea)) {
      alert("Please input a valid number");
    } else {
      let removeOldGrid = container.querySelectorAll('.cell');

      for (let j = 0; j < removeOldGrid.length; j++) {
        container.removeChild(removeOldGrid[j]);
      };

      rows = newSketchArea;
      columns = newSketchArea;

      makeSketchArea();
    }

  //style the new cells
  let styleAgain = document.querySelectorAll('.cell');

  for (let n = 0; n < styleAgain.length; n++) {
    styleAgain[n].style.background = '#B0E0E6';
    styleAgain[n].style.border = '1px solid black';
  };

  for (let b = 0; b < styleAgain.length; b++) {
    styleAgain[b].addEventListener('mouseover', function(e) {
      e.target.style.background = 'black';
    });
  };
});
