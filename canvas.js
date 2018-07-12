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
        ctx.arc(baseX,baseY,r,0,Math.PI*2,true); 
        ctx.moveTo(baseX, baseY);
        //ctx.fill();

        x1 = baseX + getRandomInt(0,sWidth);
        y1 = baseY;
        x2 = baseX;
        y2 = baseY + getRandomInt(0,sHeight);
        x3 = baseX + getRandomInt(0,sWidth);
        x3 = y3 = baseY + getRandomInt(0,sHeight);
        
        r = getRandomInt(1,10);

        ctx.arc(x1,y1,r,0,Math.PI*2,true);
    //    ctx.moveTo(x1, y1);
    //    ctx.moveTo(baseX, baseY);

        r = getRandomInt(1,10);
        ctx.arc(x2,y2,r,0,Math.PI*2,true);
    //    ctx.moveTo(x2, y2);
        ctx.moveTo(baseX, baseY);

        r = getRandomInt(1,10);
        ctx.arc(x3,y3,r,0,Math.PI*2,true);
        //ctx.moveTo(x3, y3);
    //    ctx.moveTo(baseX, baseY);
    
        ctx.stroke();
        ctx.beginPath();
    }
}

drawCircles2();
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