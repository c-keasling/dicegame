var randomNumber = Math.floor(Math.random() * Math.floor(6)) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png")
var randomNumberTwo = Math.floor(Math.random() * Math.floor(6)) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumberTwo + ".png")
if (randomNumber > randomNumberTwo){
   document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}
else if (randomNumberTwo > randomNumber){
   document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else if (randomNumber === randomNumberTwo){
   document.querySelector("h1").textContent = "Draw"
}