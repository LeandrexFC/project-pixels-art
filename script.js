window.onload = function () {
    let change = document.querySelector(".color");
    change.style.backgroundColor = "black"

    let change2 = document.querySelector(".color").nextElementSibling;

    let change3 = change2.nextElementSibling;

    let change4 = change3.nextElementSibling;

    let btn = document.querySelector("#button-random-color")
    btn.addEventListener('click', function () {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        change2.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        change3.style.backgroundColor = 'rgb(' + b + ',' + r + ',' + g + ')';
        change4.style.backgroundColor = 'rgb(' + g + ',' + b + ',' + r + ')';

    })
}
