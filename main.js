var mouse_event="empty";
var lastx,lasty;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="black";
var width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("pencolour").value;
    width=document.getElementById("penwidth").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

var currentx=e.clientX-canvas.offsetLeft;
var currenty=e.clientY-canvas.offsetTop;

if (mouse_event="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    
    console.log("last position of x and y =");
    console.log("x="+lastx+"y="+lasty);
ctx.moveTo(lastx,lasty);

console.log("current position of x and y =");
    console.log("x="+currentx+"y="+currenty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
lastx=currentx;
lasty=currenty;
}

function erase(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}