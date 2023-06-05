const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const con = canvas.getContext('2d');
const ceilingY = 50;
const floorY = 850;
let boxX = 70;
let boxY = 70;
let gravity = 1;
let friction = 0.55;
let click = false;
let jump = false;
let spaceCheck = false;



window.addEventListener('mousedown',swing);
window.addEventListener('mouseup',()=>{
    click = false;
    console.log(click);
});

window.addEventListener('keydown',(event)=>{
    if(event.code=="Space"){
        jump = true;
        spaceCheck = true;
        console.log(spaceCheck); 
        console.log(event);
    }
    if(click == false){
        setTimeout(resetKey,500); 
    }  
});

var mouse = {
    x : undefined,
    y : undefined
 }

function resetKey(){
    spaceCheck = false;
    jump =false;
}

function swing(event){
    mouse.x = event.x;
    mouse.y = event.y;
    click = true;
    console.log(click);
}

function animate(){
    requestAnimationFrame(animate);
    con.fillStyle = "antiquewhite";
    con.fillRect(0,0, canvas.width, canvas.height);
    con.beginPath();
    con.fillStyle = "green";
    con.fillRect(boxX,boxY,30,30);

    if(jump == true){
        gravity = -5 ;
    }

    if( spaceCheck == true && click == true){
        con.beginPath();
        con.moveTo(boxX+15,boxY+15);
        con.lineTo(mouse.x, mouse.y);
        con.strokeStyle="red";
        con.stroke();
        console.log(click);
    } 
    

    if(boxY + 30 + gravity >= floorY){
        gravity = -gravity * friction;
    }else{
        gravity++;
    }
    
    boxY += gravity;
    

}

animate();
