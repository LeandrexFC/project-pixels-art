const allColor = document.getElementsByClassName('color');

const pixel = document.querySelectorAll('.pixel');

let selectedColor = 'black';

const change = document.querySelector('.color');
change.style.backgroundColor = 'black';
change.classList.add('selected');

const change2 = document.querySelector('.color').nextElementSibling;
change2.style.backgroundColor = '#7CFC00';

const change3 = change2.nextElementSibling;
change3.style.backgroundColor = '#F69191';

const change4 = change3.nextElementSibling;
change4.style.backgroundColor = 'green';

const btn = document.querySelector('#button-random-color');
btn.addEventListener('click', () => {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  change2.style.backgroundColor = `rgb(${r},${g},${b})`;
  change3.style.backgroundColor = `rgb(${r},${b},${g})`;
  change4.style.backgroundColor = `rgb(${g},${b},${r})`;
});

function selectColor(event) {
  for (index of allColor) {
    index.classList.remove('selected');
  }
  event.target.classList.add('selected');
  selectedColor = event.target.style.backgroundColor;
}
allColor[0].addEventListener('click', selectColor);
allColor[1].addEventListener('click', selectColor);
allColor[2].addEventListener('click', selectColor);
allColor[3].addEventListener('click', selectColor);

function fillColor(event) {
  event.target.style.backgroundColor = selectedColor;
}

function removeColor() {
  for (index of pixel) {
    index.style.backgroundColor = 'white';
  }
}

const btn2 = document.querySelector('#clear-board');
btn2.addEventListener('click', removeColor);

for (index of pixel) {
  index.addEventListener('click', fillColor);
}
