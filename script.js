
//localStorage.getItem('colorPalette')

let allColor = document.getElementsByClassName("color")

let pixel = document.querySelectorAll('.pixel')

let btn2 = document.querySelector("#clear-board");
btn2.addEventListener('click', removeColor)

let selectedColor = "black"

let change = document.querySelector(".color");
change.style.backgroundColor = "black"
change.classList.add('selected')

let change2 = document.querySelector(".color").nextElementSibling;
change2.style.backgroundColor = "red"

let change3 = change2.nextElementSibling;
change3.style.backgroundColor = "blue"

let change4 = change3.nextElementSibling;
change4.style.backgroundColor = "green"

let btn = document.querySelector("#button-random-color")
btn.addEventListener('click', function () {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);

    change2.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    change3.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    change4.style.backgroundColor = 'rgb(' + g + ',' + b + ',' + r + ')';
})

//let teste = document.querySelector(".color").nextElementSibling

//localStorage.setItem('colorPalette', teste)

function selectColor(event) {
    for (index of allColor) {
        index.classList.remove("selected")
    }
    event.target.classList.add("selected")
    selectedColor = event.target.style.backgroundColor
}
allColor[0].addEventListener('click', selectColor)
allColor[1].addEventListener('click', selectColor)
allColor[2].addEventListener('click', selectColor)
allColor[3].addEventListener('click', selectColor)

function fillColor(event) {
    event.target.style.backgroundColor = selectedColor

}

function removeColor() {
    for (index of pixel) {
        index.style.backgroundColor = "white"
    }
}

for (index of pixel) {
    index.addEventListener('click', fillColor)
}

