// generates and stores random number from 1 - 6 for dice one and two
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//set img src attributes with random number
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

//update h1 according to winner
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins! 🚩"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 2 Wins!"
} else {
    document.querySelector("h1").innerText = "Draw!"
}