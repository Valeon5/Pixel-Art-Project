// Select color input
let color = document.querySelector('#colorPicker');

// Select size input
let myTable = document.getElementById('pixelCanvas');

// Event listener on Submit button
let picker = document.getElementById('sizePicker');
picker.addEventListener('submit', grid);

// When size is submitted by the user, call grid()
function grid(event) {
    myTable.innerHTML = ''
    event.preventDefault();
    let row = parseInt(document.getElementById('inputHeight').value);
    let column = parseInt(document.getElementById('inputWidth').value);
    makeGrid(row,column);
}

// When grid() runs, call makeGrid()
function makeGrid(row, column) {
    for (var i = 0; i <= row - 1; i++) {
        let myRow = myTable.insertRow();
        for (var j = 0; j <= column - 1; j++) {
            let myCell = myRow.insertCell();
            myCell.addEventListener('click', function() {
                myCell.style.backgroundColor = color.value;
            });
        };
    };
}
