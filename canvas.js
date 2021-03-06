function drawTriangle(){
    var canvas = document.getElementById('canvas');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25)
        ctx.fill();
    }
}

//Kółka rysowane na biężąco -> setTimeout() ?
function drawCirle(){
    var canvas = document.getElementById('canvas');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(200,50,20,0,2*Math.PI);
        ctx.fillStyle = "#66666685";
    //    ctx.stroke();
        ctx.fill();
    } 
}

function drawSmile() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
       var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.arc(375,375,50,0,Math.PI*2,true); // Outer circle
      ctx.moveTo(0,375);
      ctx.arc(375,375,35,0,Math.PI,false);  // Mouth (clockwise)
      ctx.moveTo(365,365);
      ctx.arc(360,365,5,0,Math.PI*2,true);  // Left eye
      ctx.moveTo(395,365);
      ctx.arc(390,365,5,0,Math.PI*2,true);  // Right eye
      ctx.stroke();
    }
}

function drawCircles(){
    var canvas = document.getElementById('canvas');
    var sWidth = canvas.width;
    var sHeight = canvas.height;

    var cirles = 50;//nrCirles;
    
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        
        for(var i=0; i<cirles; i++){
            var x = getRandomInt(0,sWidth);
            var y = getRandomInt(0,sHeight);
            var r = getRandomInt(0,10);
            
            
            ctx.arc(x,y,r,180,Math.PI*2,true); // Outer circle
            y = y + r;
            ctx.moveTo(x,y); //line
        //    x = x + r;
            
            //ctx.arc();
        }
    
        ctx.stroke();
        ctx.beginPath();
    }
}

function drawCircles2(){
    var canvas = document.getElementById('canvas');
    var sWidth = canvas.width;
    var sHeight = canvas.height;

    var cirles = 50;//nrCirles;
    var baseX = 50; //getRandomInt(0,sWidth);
    var baseY = 50; //getRandomInt(0,sHeight);
    var r = getRandomInt(1,10);
    console.log(baseX + ' ' + baseY + ' ' + r);

    var x1,x2,x3,y1,y2,y3;

    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        //bazowy pkt
    //    ctx.moveTo(baseX, baseY);
        ctx.moveTo(baseX, baseY);
        ctx.arc(baseX,baseY,r,0,Math.PI*2,true); 
        ctx.fill();

        x1 = baseX + getRandomInt(0,sWidth);
        y1 = baseY;
        x2 = baseX;
        y2 = baseY + getRandomInt(0,sHeight);
        x3 = baseX + getRandomInt(0,sWidth);
        x3 = y3 = baseY + getRandomInt(0,sHeight);
        
        r = getRandomInt(1,10);
        ctx.lineTo(x1,y1);
        ctx.moveTo(x1, y1);
        ctx.arc(x1,y1,r,0,Math.PI*2,true);
        ctx.fill();

        // r = getRandomInt(1,10);
        // ctx.moveTo(baseX, baseY);
        // ctx.lineTo(x2,y2);
        // ctx.moveTo(x2, y2);
        // ctx.arc(x2,y2,r,0,Math.PI*2,true);
        // ctx.fill();
        
        // r = getRandomInt(1,10);
        // ctx.moveTo(baseX, baseY);
        // ctx.lineTo(x3,y3);
        // ctx.moveTo(x3, y3);
        // ctx.arc(x3,y3,r,0,Math.PI*2,true);
        // ctx.fill();

        for(var i=2; i<=cirles; i++){
            xt = getRandomInt(0,sWidth);
            yt = getRandomInt(0,sHeight);
            xt[i] = xt;
            yt[i] = yt;

            console.log(xt);

            r = getRandomInt(1,10);
            ctx.moveTo(xt[i],yt[i]);
        //    ctx.lineTo(xt[i],yt[i]);
        //    ctx.moveTo(xt[i], yt[i]);
            ctx.arc(xt[i],yt[i],r,0,Math.PI*2,true);
            ctx.fill();  
        }
    
        ctx.stroke();
        ctx.beginPath();
    }
}

function drawPath(){
    var canvas = document.getElementById('canvas');

    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100,35,25,0,2*Math.PI);

        var p = new Path2D('M20 20 h 80 v 80 h -80 Z');
        
        ctx.stroke(rectangle);
        ctx.fill(circle);
        ctx.stroke(p);
    }
}

function saveRestore(){
    var ctx = document.getElementById('canvas2').getContext('2d');

    ctx.fillRect(0,0,150,150);
    ctx.save();

    ctx.fillStyle = '#09F';
    ctx.fillRect(15,15,120,120);
    ctx.save();

    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30,30,90,90);

    ctx.restore();
    ctx.fillRect(45,45,60,60);

    ctx.restore();
    ctx.fillRect(60,60,30,30);
}

function translate(){
    var ctx = document.getElementById('canvas2').getContext('2d');

    for(var i = 0; i<3; i++){
        for(var j = 0; j < 3; j++){
            ctx.save();
            ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            ctx.translate(200 + j * 50, 10 + i * 50);
            ctx.fillRect(0,0,25,25);
            ctx.restore();
        }
    }
}

function rotate() {
    var ctx = document.getElementById('canvas2').getContext('2d');
    
    // left rectangles, rotate from canvas origin
    ctx.save();
    // blue rect
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(30, 30, 100, 100); 
    ctx.rotate((Math.PI / 180) * 25);
    // grey rect
    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(30, 30, 100, 100);
    ctx.restore();
  
    // right rectangles, rotate from rectangle center
    // draw blue rect
    ctx.fillStyle = '#0095DD';
    ctx.fillRect(150, 30, 100, 100);  
    
    ctx.translate(200, 80); // translate to rectangle center 
                            // x = x + 0.5 * width
                            // y = y + 0.5 * height
    ctx.rotate((Math.PI / 180) * 25); // rotate
    ctx.translate(-200, -80); // translate back
    
    // draw grey rect
    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(150, 30, 100, 100);
}

function scale(){
    var ctx = document.getElementById('canvas2').getContext('2d');

    ctx.save();
    ctx.scale(3, 3);
    ctx.fillRect(150, 10, 10, 10);
    ctx.restore();

    ctx.scale(-1, 1);
    ctx.font = '20px serif';
    ctx.fillText('MDN', -135, 120);
}

function transforms(){
    var ctx = document.getElementById('canvas2').getContext('2d');

    var sin = Math.sin(Math.PI / 6);
    var cos = Math.cos(Math.PI / 6);
    ctx.translate(425, 100);

    var c = 0;
    for (var i = 0; i <= 12; i++) {
        c = Math.floor(255 / 12 * i);
        ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
        ctx.fillRect(0, 0, 100, 10);
        ctx.transform(cos, sin, -sin, cos, 0, 0);
    }
    
    ctx.setTransform(-1, 0, 0, 1, 400, 100);
    ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
    ctx.fillRect(0, 50, 100, 100);
}

function drawSquare(){
    var ctx = document.getElementById('canvas3').getContext('2d');

    for(var i = 0; i<12; i++){
        for(var j = 0; j < 12; j++){
            
             ctx.save();
            // ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
            c = Math.floor(255 / 12 * i);
            ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';

            ctx.translate(0 + j * 25, 10 + i * 25);
        //    ctx.translate(425, 100);
        //    ctx.transform(0, 45, -45, 0, 0, 0);
            ctx.fillRect(0,0,20,20);
            ctx.restore();
            
        }
    }

}

drawPath();
saveRestore();
translate();
//rotate();
//scale();
transforms();
//drawSquare();

//drawCircles2();
//drawCircles();
// drawTriangle();
// drawCirle();
// drawSmile();


/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}