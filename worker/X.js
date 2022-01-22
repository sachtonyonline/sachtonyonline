var i = "Balance";
var X = "Amount";

function balance() {
  i = i + X;
  postMessage(i);
  setbalance("balance()",500);
}

balance();
