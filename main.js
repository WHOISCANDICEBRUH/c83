var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    line_width =2;

    var width=screen.width;

var new_width=screen.width-70;
var new_height=screen.height-300;
``
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    console.log("my_touchstart");

    color= document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;

    lp_x=e.touches[0].clientX-canvas.offsetLeft;
    lp_y=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){

    console.log("my_touchmove");
    cpt_x=e.touches[0].clientX-canvas.offsetLeft;
    cpt_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    console.log("Last position of x and y coordinates =");
    console.log("x =" + lp_x + "y =" + lp_y);
    ctx.moveTo(lp_x, lp_y);

    console.log("Current position of x and y coordinates =");
    console.log("x =" + cpt_x + "y =" + cpt_y);
    ctx.lineTo(cpt_x, cpt_y);
    ctx.stroke();

    lp_x=cpt_x;
    lp_y=cpt_y;
}

function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}

