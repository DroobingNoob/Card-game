var randomNumber1 = Math.floor(Math.random()*6)+1;
var src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",src);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var src1 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",src1);