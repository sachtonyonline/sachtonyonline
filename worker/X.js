if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support!
  // Some code.....
} else {
  // Sorry! No Web Worker support..
};

var i = "Balance";
var X = "Amount";

function balance() {
  i = i + X;
  postMessage(i);
  setbalance("balance()",1000);
}

balance();

if (typeof(w) == "undefined") {
  w = new Worker("X.js");
}

w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};

w.terminate();

w = undefined;
