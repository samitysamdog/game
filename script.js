var canvas = document.getElementById("canvas"); //get the canvas dom object
var ctx = canvas.getContext("2d"); //get the context
var c = {  //create an object to draw
  x:0,  //x value
  y:0,  //y value
  r:5, //radius
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var redraw = function(){  // this function redraws the c object every frame (FPS)
   // clear the canvas
  ctx.beginPath();  //start the path
  ctx.arc(c.y, c.x, c.r, 0, Math.PI*2);
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
  ctx.arc(c.y, c.x, c.r, 0, Math.PI*2);
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2); //draw the circle
  ctx.closePath(); //close the circle path
  ctx.fillStyle = getRandomColor();
  ctx.fill(); //fill the circle
  requestAnimationFrame(redraw);//schedule this function to be run on the next frame
}
function move(){  // this function modifies the object
  var decimal = Math.random()+Math.random()*Math.random(); // this returns a float between 0.0 and 1.0
  c.x = decimal * canvas.width; // mulitple the random decimal by the canvas width and height to get a random pixel in the canvas;
  c.y = decimal * canvas.height;
}
redraw(); //start the animation
setInterval(move, 1); // run the move function every second (1000 milliseconds)
