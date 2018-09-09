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
  }
];

var elem = document.createElement('div');
document.innerHTML = "";

for (i = 0; i < Cats.length; i++) {
  elem.innerHTML += "<h3>" + Cats[i]['name'] + "</h3>";
  elem.innerHTML += "<img onClick=\"addCount(" + i + ")\" class=\"cat-photo\" src=\"" + Cats[i]['image'] + "\"><br>";
  elem.innerHTML += "<textarea id=\"text" + i + "\">" + Cats[i]['counter'] + "</textarea><hr>"
  document.getElementById('cats').appendChild(elem);
};

function addCount(i) {
  Cats[i]['counter']++;
  $('#text'+i).text(Cats[i]['counter']);
}
