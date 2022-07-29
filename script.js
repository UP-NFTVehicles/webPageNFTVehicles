
/* var card_array = document.getElementsByClassName("card__paragraph")
alert(card_array[0].innerHTML) */

// let a = document.getElementsByClassName("card__paragraph");
// let b = Object.values(a)

// var result = Object.keys(a).map((key) => [Number(key), a[key]]);

// console.log(result);


const clicked1 = (ev) => {
    ev.target.querySelector('p').style.display = "Block";
}

const clicked2 = (ev) => {
    ev.target.parentElement.querySelector('p').style.display = "Block";
}

const clicked3 = (ev) => {
    ev.target.style.display = "Block";
}

const collection = document.getElementsByClassName("second__pane__cards");
for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", clicked1);
}

const collection2 = document.getElementsByClassName("card__svg");
for (let i = 0; i < collection2.length; i++) {
  collection2[i].addEventListener("click", clicked2);
}

const collection4 = document.getElementsByClassName("card__title");
for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", clicked2);
}
