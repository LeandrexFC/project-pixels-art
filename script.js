window.onload = function () {
    let change = document.querySelector(".color");
    change.style.backgroundColor = "black"

    let change2 = document.querySelector(".color").nextElementSibling;
    change2.style.backgroundColor = "blue"

    let change3 = change2.nextElementSibling;
    change3.style.backgroundColor = "red"

    let change4 = change3.nextElementSibling;
    change4.style.backgroundColor = "yellow"
}