const heading = document.querySelector(".heading");
let dice1 = Math.trunc(Math.random()*100)%6 + 1;
let dice2 = Math.trunc(Math.random()*100)%6 + 1;
const img1 = document.getElementById("img1").src = `images/dice${dice1}.png`;
const img2 = document.querySelector(".img2").src = `images/dice${dice2}.png`;
if(dice1 > dice2){
    heading.innerHTML="Player 1 wins";
}else if(dice1 < dice2){
    heading.innerHTML="player 2 wins";
}else{
    heading.innerHTML="draw";
}
console.log(dice1);
console.log(dice2);


