const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = 'slider';

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft =  `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for(let i = 0; i<3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
},3000);


//this functions create an iframe for the videos


function video1(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "http://www.youtube.com/embed/yRUAzGQ3nSY";
    //get element that is being chnaged
    let oldvid = document.getElementById("insideOut");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video2(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/VK2QbXssjJ0";
    //get element that is being chnaged
    let oldvid = document.getElementById("bao");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video3(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/i5qOzqD9Rms";
    //get element that is being chnaged
    let oldvid = document.getElementById("incredibles");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video4(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/2dW3qfgvpJo";
    //get element that is being chnaged
    let oldvid = document.getElementById("auntie-edna");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video5(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/BLTnQko_Lz4";
    //get element that is being chnaged
    let oldvid = document.getElementById("garfield");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video6(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/1VIZ89FEjYI";
    //get element that is being chnaged
    let oldvid = document.getElementById("raya");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video7(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/IWBsDaFWyTE";
    //get element that is being chnaged
    let oldvid = document.getElementById("falcon");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}

function video8(){
    //creating a new element iframe
    let iframe = document.createElement("iframe");   
    //set src
    iframe.src = "https://www.youtube.com/embed/vRcSl9H2fYo";
    //get element that is being chnaged
    let oldvid = document.getElementById("musicStory");
    //replacing old element with another 
    oldvid.replaceChild(iframe, oldvid.childNodes[1]);
}