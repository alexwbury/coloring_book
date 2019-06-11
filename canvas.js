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
//var canvas = document.getElementById('viewport'),
//context = canvas.getContext('2d');

make_base();

function make_base(){
  base_image = new Image();
  base_image.src = 'ghostly.JPG';
  base_image.onload = function(){
    //context.drawImage(base_image, 0, 0);
    c.drawImage(base_image, 0, 0);
  };
}
/////// Printable
function ExportPdf(){
kendo.drawing
    .drawDOM(canvas,
    {
        forcePageBreak: ".page-break",
        paperSize: "A4",
        margin: { top: "1cm", bottom: "1cm" },
        scale: 0.8,
        height: 500,
        template: $("#page-template").html(),
        keepTogether: ".prevent-split"
    })
        .then(function(group){
        kendo.drawing.pdf.saveAs(group, "Exported_Itinerary.pdf");
    });
}
