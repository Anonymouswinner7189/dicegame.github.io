var x = Math.floor(Math.random()*6)+1;
var y = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice"+x+".png";
var randomDiceImage2 = "dice"+y+".png";

var randomDiceImageSoure1 = "images/"+randomDiceImage1;
var randomDiceImageSoure2 = "images/"+randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src",randomDiceImageSoure1);
image2.setAttribute("src",randomDiceImageSoure2);

var title = document.querySelector("h1");
if(x>y) title.innerHTML = "Player 1 Wins!";
else if(x<y) title.innerHTML = "Player 2 Wins!";
else title.innerHTML = "Draw!";