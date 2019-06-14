var canvas = document.querySelector('canvas');

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
// A4 rounding
//canvas.width = 595;
//canvas.height = 842;
var inches = 100;
//canvas.width = 11*inches;
//canvas.height = 8.5*inches;
canvas.width = 793;
canvas.height = 613;
var ctx = canvas.getContext('2d');

///var light = rgb(170, 170, 170);
//var dark = rgb(0, 0, 0);
//var empty = rgb(255, 255, 255);

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
draw(ctx);

/*
//c = context
var c = canvas.getContext('2d');
var grid = new drawGrid(c);
var img = new Image();
//fillRect(x, y, width, height)
c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 400);
c.strokeStyle = "#fa34a3";
c.stroke();

//Arc/circle
//arc(x, y, radius, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool(false));
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI*2, false);
c.strokeStyle = "blue";
c.stroke();

////////
function make_base(){
  base_image = new Image();
  base_image.src = 'BeachLandscape.png';
  base_image.onload = function(){
    //context.drawImage(base_image, 0, 0);
    c.drawImage(base_image, 0, 0, canvas.width, canvas.height);
    drawGrid();
  };
}
function drawGrid(){
  c.beginPath();
  c.strokeStyle = "rgba(0, 0, 255, 0.2)";
  var xpos;
  var xscale= 11*inches/2;
  for(var d=1; d<xscale; d++){
    xpos = inches/2*d;
    c.moveTo(xpos, 0);
    c.lineTo(xpos, 595);
  }
  c.stroke();
  var ypos;
  var yscale= 8.5*inches/2;
  for(var v=1; v<yscale; v++){
    ypos = inches/2*v;
    c.moveTo(0, ypos);
    c.lineTo(842, ypos);
  }
  c.stroke();
}

make_base();
*/

/////// Printable
download.addEventListener("click", function() {
  // only jpeg is supported by jsPDF
  alert("Hello! I am an alert box!!");
  var imgData = canvas.toDataURL("image/jpeg", 1.0);
  var pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: 'letter'
  });

  pdf.addImage(imgData, 'JPEG', 0, 0, 11, 8.5);
  pdf.save("download.pdf");
}, false);
