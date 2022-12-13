const xscale = 27.1;
const yscale = 28;
let xPos = 0;
let yPos = 0;
let offsetX = 0;
let offsetY = 0;
let canvas_back = document.getElementById('canvas_back');
let canvas_front = document.getElementById('canvas_front');
let ctx_back = canvas_back.getContext('2d');
let ctx_front = canvas_front.getContext('2d');

let img = new Image();
img.src = "IMG/mapcc.png"

img.onload = function(){
    let width = Math.floor(img.naturalWidth * 0.75),
        height = Math.floor(img.naturalHeight * 0.75);
    ctx_back.drawImage(img,0,0,width,height);  
};

function runHigh(inputR,inputT,inputS){
    if(inputS >= 1 && inputS < 7){
        //firstrow
        offsetY = 1
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 7 && inputS < 13){
        //secondrow
        offsetY = 2
        offsetX = (2+(inputS%6))
    }
    else if(inputS >= 13 && inputS < 19){
        //thirdrow
        offsetY = 3
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 19 && inputS < 25){
        //fourthrow
        offsetY = 4
        offsetX = (2+(inputS%6))
    }
    else if(inputS >= 25 && inputS < 31){
        //fifthrow
        offsetY = 5
        offsetX = (7-(inputS%6))
    }
    else if(inputS >= 31){
        //sixthrow
        offsetY = 6
        offsetX = (2+(inputS%6))
    } 

    xPos = ((inputR-1)*6)+offsetX;
    yPos = (((inputT-6))*6)+offsetY;

    
    highlightTownship((xscale * xPos) - 12 ,(yscale * yPos) + 65);
};


function highlightTownship(highlight_x,highlight_y){    
    ctx_front.fillStyle = 'rgba(225, 0, 0, 0.55)';
    ctx_front.fillRect(highlight_x, highlight_y, xscale, yscale);
};


//----- Clickmap not needed yet-----//
// function clickmap(){
//     console.log("yes")
//     function display(event) {
//          let X = event.clientX;
//          let Y = event.clientY;
//          let result = document.getElementById("result");
//          result.innerHTML = "<b>X-coordinate: </b>" + X + "<br><b>Y-coordinate: </b>: " + Y;
//       }
// }

// canvas_front.addEventListener("click", clickmap, false);
