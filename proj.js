function verifyPassFunc() {

    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if(pass1 == pass2){

        alert("The Passwords Match!");

    } else {

        alert("The Passwords dont match..");

    }

}

let imageArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",];
let curImage = 1;

function updateImage(){

    let arrayAdjust = curImage - 1;

    document.getElementById("theImage").src = imageArray[arrayAdjust];

}

function slidePrev(){

    
    if(curImage == 1){

        curImage = 5;

    } else {

        curImage--;

    }

    updateImage();

}

function slideNext(){


if(curImage == 5){

        curImage = 1;

    } else {

        curImage++;

    }

    updateImage();



}