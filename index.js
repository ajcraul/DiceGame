let randomNumber1 = Math.floor((Math.random()*6) + 1);
let randomNumber2 = Math.floor((Math.random()*6) + 1);

var images1 = "images/dice" + randomNumber1 +".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("#dice1 .img6").setAttribute("src", images1);
document.querySelector("#dice2 .img6").setAttribute("src", images2);



function winner() {
  

    if(randomNumber1 === randomNumber2) {
        document.querySelector("#header").innerHTML = "🏁 Draw! 🏁";
    } else if (randomNumber2 > randomNumber1){
        document.querySelector("#header").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("#header").innerHTML = "🚩 Player 1 Wins!";
    }
}

winner();
