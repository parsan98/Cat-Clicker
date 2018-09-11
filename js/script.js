var Cats = [
  {
    "name" : "Crookshanks",
    "image" : "https://vignette.wikia.nocookie.net/harrypotter/images/7/71/CrookshanksPottermore.png",
    "counter" : "0"
  },
  {
    "name" : "Garfield",
    "image" : "https://png.pngtree.com/element_origin_min_pic/16/11/24/ea803516a485cd425ce348ea32075b87.jpg",
    "counter" : "0"
  },
  {
    "name" : "Sylvester",
    "image" : "https://img00.deviantart.net/7664/i/2002/40/9/5/silly_sylvester.jpg",
    "counter" : "0"
  },
  {
    "name" : "Tom",
    "image" : "https://png2.kisspng.com/20180406/row/kisspng-tom-cat-tom-and-jerry-nibbles-cartoon-tom-and-jerry-5ac786490a90e8.2434223615230254810433.png",
    "counter" : "0"
  },
  {
    "name" : "Hello Kitty",
    "image" : "http://media.comicbook.com/uploads1/2015/02/hello-kitty-124499.jpg",
    "counter" : "0"
  },
  {
    "name" : "Cheshire Cat",
    "image" : "https://cdn.shopify.com/s/files/1/2527/4000/products/cheshire-cat-alice-in-wonderland_2048x.jpg",
    "counter" : "0"
  }
];

var navBar = document.getElementById('nav');

let photoElem = document.getElementById("cat-photo");
let adminForm = document.getElementById("admin-form");
let adminBtn = document.getElementById("admin-btn");
let nameInput = document.getElementById("name-input");
let imgInput = document.getElementById("img-input");
let catDisplay = document.getElementById("display-cats");
let currentCat = 0;

document.body.onload = (() => {
  displayCat(currentCat);
  setNav();
});

function displayCat(i){
  currentCat = i;
  document.getElementById("cat-name").innerHTML = Cats[i]['name'];
  document.getElementById("cat-counter").innerHTML = Cats[i]['counter'];
  photoElem.src = Cats[i]['image'];
  photoElem.alt =  Cats[i]['name'];
  nameInput.value = Cats[i]['name'];
  imgInput.value =  Cats[i]['image'];
  adminForm.style.display = "none";
}

function setNav(){
  navBar.innerHTML = "";
  for (var i = 0; i < Cats.length; i++) {
    navBar.innerHTML += "<a class=\"nav-link\" onClick=\"displayCat(" + i + ")\">" + Cats[i]['name'] + "</a>"
  }
}

photoElem.addEventListener("click", () => {
  Cats[currentCat]['counter']++;
  document.getElementById("cat-counter").innerHTML = Cats[currentCat]['counter'];
});

adminBtn.addEventListener("click", () => {
  adminForm.style.display = "block";
  adminBtn.style.display = "none";
});

document.getElementById("admin-cancel").addEventListener("click", ()=>{
  nameInput.value = Cats[currentCat]['name'];
  imgInput.value =  Cats[currentCat]['image'];
  adminForm.style.display = "none";
  adminBtn.style.display = "block";
});

document.getElementById("admin-ok").addEventListener("click", ()=>{
  if ((nameInput.value != "") & (imgInput.value != "")) {
    Cats[currentCat]['name'] = nameInput.value;
    Cats[currentCat]['image'] = imgInput.value;
    displayCat(currentCat);
    setNav();
    adminForm.style.display = "none";
    adminBtn.style.display = "block";
  } else {
    alert("Please don't pass in a blank value!")
  }
});
