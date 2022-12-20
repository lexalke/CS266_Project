localStorage.setItem("a", 0);
localStorage.setItem("b", 0);
localStorage.setItem("c", 0);
localStorage.setItem("d", 0);
function clickcart(i) {
  if (i == 0) {
    localStorage.a = parseInt(localStorage.a) + 1;
  } else if (i == 1) {
    localStorage.b = parseInt(localStorage.b) + 1;

  } else if (i == 2) {
    localStorage.c = parseInt(localStorage.c) + 1;

  } else if (i == 3) {
    localStorage.d = parseInt(localStorage.d) + 1;
  }
  addcart();
}
function openCart() {
  var open = document.getElementById("carts");
  if (open.style.visibility === "hidden") {
    open.style.visibility = "visible";
  } else {
    open.style.visibility = "hidden";
  }
}

function addcart() {
  var list = document.getElementById("listitem");
  if (
    parseInt(localStorage.getItem("a")) != 0 &&
    document.getElementById("a") == null
  ) {
    var item = document.createElement("div");
    list.appendChild(item);
    item.id = "a";
    item.className = "item";

    var span = document.createElement("span");
    span.setAttribute("onclick", "deletelist('a');");
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
    textQ.id = "amounta";
    item.appendChild(textQ);
    let amount = localStorage.getItem("a").toString();
    textQ.innerHTML = "X".concat(amount);
  } else if (
    parseInt(localStorage.getItem("a")) != 0 &&
    document.getElementById("a") != null
  ) {
    var textQ = document.getElementById("amounta");
    let amount = localStorage.getItem("a").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  if (
    parseInt(localStorage.getItem("b")) != 0 &&
    document.getElementById("b") == null
  ) {
    var item = document.createElement("div");
    list.appendChild(item);
    item.id = "b";
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
    textQ.id = "amountb";
    let amount = localStorage.getItem("b").toString();
    textQ.innerHTML = "X".concat(amount);
  }else if (
    parseInt(localStorage.getItem("b")) != 0 &&
    document.getElementById("b") != null
  ) {
    var textQ = document.getElementById("amountb");
    let amount = localStorage.getItem("b").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  if (
    parseInt(localStorage.getItem("c")) != 0 &&
    document.getElementById("c") == null
  ) {
    var item = document.createElement("div");
    item.id = "c";
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
    textQ.id = "amountc";
    item.appendChild(textQ);
    let amount = localStorage.getItem("c").toString();
    textQ.innerHTML = "X".concat(amount);
  }else if (
    parseInt(localStorage.getItem("c")) != 0 &&
    document.getElementById("c") != null
  ) {
    var textQ = document.getElementById("amountc");
    let amount = localStorage.getItem("c").toString();
    textQ.innerHTML = "X".concat(amount);
  }

  if (
    parseInt(localStorage.getItem("d")) != 0 &&
    document.getElementById("d") == null
  ) {
    var item = document.createElement("div");
    item.id = "d";
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
    textQ.id = "amountd";
    item.appendChild(textQ);
    let amount = localStorage.getItem("d").toString();
    textQ.innerHTML = "X".concat(amount);
  }else if (
    parseInt(localStorage.getItem("d")) != 0 &&
    document.getElementById("d") != null
  ) {
    var textQ = document.getElementById("amountd");
    let amount = localStorage.getItem("d").toString();
    textQ.innerHTML = "X".concat(amount);
  }
}

function deletelist(a){
  var liw = document.getElementById(a);
  localStorage.setItem(a,0);
  liw.remove();
  getprice();
}

function gotocart(){
  window.open("./cart.html");
}
