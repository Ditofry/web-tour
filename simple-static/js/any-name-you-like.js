function clickyFunction() {
  alert('ya clicked the gif!');
}

var loneGif = document.getElementById("the-lone-gif");

console.log("this message is only shown in the browser's console. hit cmd+option+j to view it. Btw, our var looks like this ->", loneGif);

loneGif.onclick = clickyFunction;