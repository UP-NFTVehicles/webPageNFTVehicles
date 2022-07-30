let last_modification;

const clicked = (ev) => {
    console.log(ev.target.tagName)
    var element = ev.target
    element.parentElement.querySelector('p').style.display = "Block";
    if(last_modification){
      last_modification.parentElement.querySelector('p').style.display = "None";
    }
    last_modification = ev.target
}

const menu_click = (ev) => {
  let right_menu = document.getElementById("header__menu");
  let left_menu = document.getElementById("back__menu");
  right_menu.style.right = "0";
  left_menu.style.left = "0";
}

const back_click = (ev) => {
  let right_menu = document.getElementById("header__menu");
  let left_menu = document.getElementById("back__menu");
  right_menu.style.right = "-250px";
  left_menu.style.left = "-250px";
}

const collection = document.getElementsByClassName("clickbox");
for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", clicked);
}

const menu = document.getElementById("mobile__menu");
menu.addEventListener("click", menu_click)

const back_menu = document.getElementById("back__menu");
back_menu.addEventListener("click", back_click)
