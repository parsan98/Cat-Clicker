let Cats = [
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
navBar.innerHTML = "";

for (var i = 0; i < Cats.length; i++) {
  navBar.innerHTML += "<a class=\"nav-link\" onClick=\"displayCat(" + i + ")\">" + Cats[i]['name'] + "</a>"
}

var photoElem = document.getElementById("cat-photo");
var currentCat = 0;

document.body.onload = displayCat(currentCat);

function displayCat(i){
  currentCat = i;
  document.getElementById("cat-name").innerHTML = Cats[i]['name'];
  document.getElementById("cat-counter").innerHTML = Cats[i]['counter'];
  photoElem.src = Cats[i]['image'];
}

photoElem.addEventListener("click", () => {
  Cats[currentCat]['counter']++;
  document.getElementById("cat-counter").innerHTML = Cats[currentCat]['counter'];
});
