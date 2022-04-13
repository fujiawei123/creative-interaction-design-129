document.write("Welcome to the guessing game");

function sayhello(){
  var response = prompt("what's your name?");
  alert("thanks god!!!  " + response + "  you're the only one who got it right");
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(200,300));

function showTopic(){
  var response = alert("wrong answer!please try again.");
  var x = document.getElementById("momo");
   x.style.fontSize = "25px";
   x.style.color ="red";
  var x = document.getElementById("dada");
   x.style.fontSize = "25px";
   x.style.color ="red";
}
