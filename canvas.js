var canvas = document.querySelector('canvas');

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
// A4 rounding
//canvas.width = 595;
//canvas.height = 842;
canvas.width = 842;
canvas.height = 595;

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
    c.drawImage(base_image, 0, 0);
    drawGrid();
  };

}
function drawGrid(){
  c.beginPath();
  c.moveTo(50, 0);
  c.lineTo(50, 595);
  c.moveTo(100, 595);
  c.lineTo(100, 0);
  c.stroke();
}

make_base();


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

  pdf.addImage(imgData, 'JPEG', 0, 0, 8.5, 11);
  pdf.save("download.pdf");
}, false);
