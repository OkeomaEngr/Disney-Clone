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


//new 

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