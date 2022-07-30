let last_modification;


const clicked1 = (ev) => {
    console.log(ev.target.tagName)
    var element = ev.target
    element.parentElement.querySelector('p').style.display = "Block";
    if(last_modification){
      last_modification.parentElement.querySelector('p').style.display = "None";
    }
    last_modification = ev.target

}

const collection = document.getElementsByClassName("clickbox");
for (let i = 0; i < collection.length; i++) {
  collection[i].addEventListener("click", clicked1);
}
