function cart() {
  var list = document.getElementById("listitem");
  if (parseInt(localStorage.getItem("a")) != 0) {
    var item = document.createElement("div");
    list.appendChild(item);
    item.setAttribute("onclick","deletelist('a');");
    item.id="a";
    item.className = "item";

    var span = document.createElement("span");
    item.appendChild(span);
    span.innerHTML = "X";

    var img = document.createElement("img");
    item.appendChild(img);
    img.src = "/Images/Album 1.png";

    var text = document.createElement("div");
    item.appendChild(text);
    var h4 = document.createElement("h4");
    text.appendChild(h4);
    h4.innerHTML = "A Whole mew world - Album";
    text.className = "albumname";

    var textQ = document.createElement("h4");
    item.appendChild(textQ);
    let amount = localStorage.getItem("a").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  if (parseInt(localStorage.getItem("b")) != 0) {
    var item = document.createElement("div");
    item.id="b";
    list.appendChild(item);
    item.className = "item";

    var span = document.createElement("span");
    span.setAttribute("onclick", "deletelist('b');");
    item.appendChild(span);
    span.innerHTML = "X";

    var img = document.createElement("img");
    item.appendChild(img);
    img.src = "/Images/Album 2.png";

    var text = document.createElement("div");
    item.appendChild(text);
    var h4 = document.createElement("h4");
    text.appendChild(h4);
    h4.innerHTML = "Dusk till dawn - Album";
    text.className = "albumname";

    var textQ = document.createElement("h4");
    item.appendChild(textQ);
    let amount = localStorage.getItem("b").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  if (parseInt(localStorage.getItem("c")) != 0) {
    var item = document.createElement("div");
    item.id="c";
    list.appendChild(item);
    item.className = "item";

    var span = document.createElement("span");
    span.setAttribute("onclick", "deletelist('c');");
    item.appendChild(span);
    span.innerHTML = "X";

    var img = document.createElement("img");
    item.appendChild(img);
    img.src = "/Images/Album 3.png";

    var text = document.createElement("div");
    item.appendChild(text);
    var h4 = document.createElement("h4");
    text.appendChild(h4);
    h4.innerHTML = "I wanna live forever - Album";
    text.className = "albumname";

    var textQ = document.createElement("h4");
    item.appendChild(textQ);
    let amount = localStorage.getItem("c").toString();
    textQ.innerHTML = "X".concat(amount);
  }
  if (parseInt(localStorage.getItem("d")) != 0) {
    var item = document.createElement("div");
    item.id="d";
    list.appendChild(item);
    item.className = "item";

    var span = document.createElement("span");
    span.setAttribute("onclick", "deletelist('d');");
    item.appendChild(span);
    span.innerHTML = "X";

    var img = document.createElement("img");
    item.appendChild(img);
    img.src = "/Images/Album 4.png";

    var text = document.createElement("div");
    item.appendChild(text);
    var h4 = document.createElement("h4");
    text.appendChild(h4);
    h4.innerHTML = "Still got times - Album";
    text.className = "albumname";

    var textQ = document.createElement("h4");
    item.appendChild(textQ);
    let amount = localStorage.getItem("d").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  getprice();

}

function getprice(){
  var price = document.getElementById("price");
  var amountal = parseInt(localStorage.getItem("a"))+parseInt(localStorage.getItem("b"))+parseInt(localStorage.getItem("c"))+parseInt(localStorage.getItem("d"));
  var totalprice = (amountal*500)+50;
  price.innerHTML = totalprice.toString().concat(" Baht");
}

function deletelist(a){
  var liw = document.getElementById(a);
  localStorage.setItem(a,0);
  liw.remove();
  getprice();
}
