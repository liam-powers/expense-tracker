//Targetting ID's and classes to be used for EventListener 's and subsequent modifications. 
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const wrapper = document.querySelector('.wrapper');

plus.addEventListener('click', addRow)
minus.addEventListener('click', delRow)

// addRow: Uses EventListener from plus button to add a new row when clicked.
function addRow() {
    const newRow = document.createElement('div');
    newRow.classList.add('row');

    for (let i = 0; i < 4; i++) {
      const input = document.createElement('input');
      input.setAttribute('type', 'text');

      input.style.width = '200px';
      input.style.height = '50px';
      input.style.textAlign = 'center';
      input.style.color = 'crimson';
      input.style.fontFamily = 'Verdana';
      input.style.fontSize = '15px';

      newRow.appendChild(input);
    }
  
    const buttons = document.querySelector('.buttons');
    wrapper.insertBefore(newRow, buttons);
}

// addRow: Uses EventListener from minus button to remove last added row when clicked.
function delRow() {
    const rows = document.querySelectorAll('.row')
    const lastRow = rows[rows.length - 1];

    if (lastRow) {
        lastRow.parentNode.removeChild(lastRow);
    }
}