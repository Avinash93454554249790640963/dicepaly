function play(){

let random_1=Math.floor(Math.random()*6) +1;
let diceImage="dice" +random_1 +".png";
let imgSrc="images/" +diceImage;
document.querySelector(".img1").setAttribute("src",imgSrc);


let random_2=Math.floor(Math.random()* 6)+1;
let diceImage_2="dice" +random_2 + ".png";
let imgSrc_2="images/"+diceImage_2;
document.querySelector(".img2").setAttribute("src",imgSrc_2);

if(random_1 > random_2){
    document.querySelector("h1").innerHTML="PLAY 1 WIN"
}
else if(random_2 > random_1){
        document.querySelector("h1").innerHTML="PLAY 2 WIN"
}
else {
    document.querySelector("h1").innerHTML="Draw";
}
}
    
