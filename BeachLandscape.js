/*******
    function init() {

      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      draw(ctx);
    }

*/

var light = "rgb(170, 170, 170)";
var dark = "rgb(0, 0, 0)";
var empty = "rgb(255, 255, 255)";
var thick = 2;
var thin = 1;
var image = new Image();
//var patterns = [empty, "patterns/pat1.jpg", "patterns/pat2.jpg"];
//////////////["umbOut", "umbIn", "sky", "ocean", "sand", "chair", "shade"];
var patfill = [0, 0, 0, 0, 0, 0, 0];

var characterData={};
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('%20'),
        data = {}, tmp;
    for (var g = 0, l = params.length; g < l; g++) {
         tmp = params[g].split('=');
         data[tmp[0]] = tmp[1];
    }
    //document.getElementById('here').innerHTML = data.name;
    characterData = data;
    console.log(characterData);

    draw(ctx);
};

function drawPattern(patty) {
  var img1 = document.getElementById("pat1");
  var img2 = document.getElementById("pat2");
  var pat;
  if(patty==0){
    pat = ctx.fillStyle = empty;
  }
  else if(patty==1){
    pat = ctx.createPattern(img1, 'no-repeat');
  }
  else if(patty==2){
    pat = ctx.createPattern(img2, 'no-repeat');
  }
  else{
    console.log("oops pattern issue");
    ctx.fillStyle = empty;
    ctx.fill();
  }
  ctx.fillStyle = pat;
  //ctx.fillStyle = empty;
  ctx.fill();
  return;
}

/////////these don't matter anymore!
//[book,]
var handOption = "book";
//[band, flip, bare]
var footOption = characterData.sa;
//[small, med, large, buff]
var armWeight = characterData.ar;

//options
function hands(opt){
  if(opt == "book"){
    // forearmBook/cover
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(211.7, 264.8);
    ctx.lineTo(228.6, 218.1);
    ctx.lineTo(268.1, 233.8);
    ctx.lineTo(313.9, 222.6);
    ctx.lineTo(314.1, 228.0);
    ctx.lineTo(287.5, 275.5);
    ctx.lineTo(252.8, 281.6);
    ctx.lineTo(211.7, 264.8);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
    ctx.strokeStyle = dark;
    ctx.lineWidth = thick;
    ctx.stroke();

    // forearmBook/cover line
    ctx.beginPath();
    ctx.moveTo(313.6, 223.2);
    ctx.lineTo(286.1, 273.5);
    ctx.lineWidth = thin;
    ctx.stroke();

    // forearmBook/pages
    ctx.beginPath();
    ctx.moveTo(214.6, 268.7);
    ctx.bezierCurveTo(214.6, 268.7, 232.5, 218.0, 233.1, 217.4);
    ctx.bezierCurveTo(233.8, 216.8, 234.6, 216.3, 235.3, 216.9);
    ctx.bezierCurveTo(236.1, 217.5, 237.9, 222.8, 249.3, 222.0);
    ctx.bezierCurveTo(260.6, 221.3, 267.4, 228.3, 268.9, 232.5);
    ctx.bezierCurveTo(269.3, 233.8, 270.1, 226.5, 281.9, 227.0);
    ctx.bezierCurveTo(293.8, 227.5, 294.8, 225.7, 302.1, 221.0);
    ctx.bezierCurveTo(303.2, 220.3, 308.4, 224.4, 308.0, 225.6);
    ctx.bezierCurveTo(307.1, 228.0, 284.9, 271.3, 283.8, 271.4);
    ctx.bezierCurveTo(282.7, 271.5, 277.5, 275.4, 270.0, 274.1);
    ctx.bezierCurveTo(269.1, 274.0, 258.4, 271.6, 253.9, 276.8);
    ctx.bezierCurveTo(253.2, 277.5, 250.7, 273.8, 248.5, 273.5);
    ctx.bezierCurveTo(239.8, 272.1, 237.5, 271.9, 230.9, 274.3);
    ctx.bezierCurveTo(224.8, 276.5, 214.6, 268.7, 214.6, 268.7);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = thick;
    ctx.stroke();

    // forearmBook/pages line
    ctx.beginPath();
    ctx.moveTo(226.0, 266.4);
    ctx.bezierCurveTo(229.9, 266.0, 248.5, 266.3, 253.0, 275.4);
    ctx.bezierCurveTo(257.7, 264.3, 267.9, 233.2, 268.6, 231.9);
    ctx.bezierCurveTo(269.4, 230.5, 253.9, 272.9, 253.6, 274.1);
    ctx.bezierCurveTo(253.4, 275.4, 255.9, 265.8, 271.3, 270.8);
    ctx.lineTo(281.4, 267.6);
    ctx.bezierCurveTo(283.5, 265.0, 302.8, 230.6, 302.1, 221.0);
    ctx.lineWidth = thin;
    ctx.stroke();

    // forearmBook/right
    ctx.beginPath();
    ctx.moveTo(256.8, 301.8);
    ctx.bezierCurveTo(257.6, 296.9, 257.2, 292.9, 261.4, 287.8);
    ctx.bezierCurveTo(264.4, 284.2, 267.0, 279.8, 268.1, 277.8);
    ctx.bezierCurveTo(269.2, 275.8, 263.5, 260.8, 268.1, 256.5);
    ctx.bezierCurveTo(272.8, 252.2, 277.3, 249.9, 278.2, 246.9);
    ctx.bezierCurveTo(279.6, 242.1, 278.5, 240.1, 282.3, 241.4);
    ctx.bezierCurveTo(285.3, 242.4, 286.9, 248.6, 285.9, 250.9);
    ctx.bezierCurveTo(285.3, 252.3, 282.3, 253.4, 282.3, 255.4);
    ctx.bezierCurveTo(282.3, 255.4, 287.3, 250.8, 290.3, 248.8);
    ctx.bezierCurveTo(293.3, 246.8, 304.4, 243.9, 306.3, 244.9);
    ctx.bezierCurveTo(308.1, 245.9, 307.6, 249.1, 307.1, 251.1);
    ctx.bezierCurveTo(306.6, 253.1, 299.8, 254.8, 298.5, 256.8);
    ctx.bezierCurveTo(297.6, 258.2, 297.9, 256.7, 300.6, 255.4);
    ctx.bezierCurveTo(302.9, 254.3, 302.6, 261.3, 298.4, 263.9);
    ctx.bezierCurveTo(297.2, 264.6, 305.1, 265.5, 297.3, 272.3);
    ctx.bezierCurveTo(295.7, 273.5, 301.3, 275.3, 295.1, 277.8);
    ctx.bezierCurveTo(290.8, 279.7, 285.2, 282.4, 283.4, 280.8);
    ctx.bezierCurveTo(280.8, 278.5, 285.0, 273.9, 285.8, 272.5);
    ctx.bezierCurveTo(286.6, 270.8, 280.3, 276.3, 282.3, 280.8);
    ctx.bezierCurveTo(283.5, 283.5, 287.0, 301.1, 283.1, 308.5);
    ctx.bezierCurveTo(281.2, 312.2, 280.0, 315.2, 279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 269.1, 319.8, 261.3, 317.5);
    ctx.bezierCurveTo(256.0, 315.9, 255.7, 307.6, 256.8, 301.8);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = dark;
    ctx.lineWidth = thick;
    ctx.stroke();

    // forearmBook/left
    ctx.beginPath();
    ctx.moveTo(204.6, 262.8);
    ctx.bezierCurveTo(204.1, 259.4, 205.6, 244.3, 208.8, 242.1);
    ctx.bezierCurveTo(211.3, 240.4, 215.3, 234.7, 215.6, 232.6);
    ctx.bezierCurveTo(217.5, 227.0, 218.8, 226.2, 221.3, 225.8);
    ctx.bezierCurveTo(222.9, 225.5, 225.9, 225.6, 225.9, 225.6);
    ctx.lineTo(221.3, 238.2);
    ctx.bezierCurveTo(221.3, 238.2, 220.3, 240.5, 216.4, 242.1);
    ctx.bezierCurveTo(219.2, 241.4, 222.7, 235.8, 223.5, 235.2);
    ctx.bezierCurveTo(224.6, 234.4, 227.1, 234.0, 228.3, 234.4);
    ctx.bezierCurveTo(230.3, 235.2, 235.1, 233.8, 237.7, 232.5);
    ctx.bezierCurveTo(238.6, 232.0, 239.7, 235.7, 237.9, 238.1);
    ctx.bezierCurveTo(236.7, 239.7, 234.6, 241.7, 230.4, 242.9);
    ctx.bezierCurveTo(228.8, 243.3, 226.5, 245.6, 226.8, 247.3);
    ctx.bezierCurveTo(227.1, 250.2, 224.4, 256.3, 219.0, 258.3);
    ctx.lineTo(219.4, 264.3);
    ctx.lineTo(204.6, 262.8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  else{
    return;
  }
}
function feet(opt){
  if(opt == "band"){
    // body/sandal thick
    ctx.beginPath();
    ctx.moveTo(302.1, 370.8);
    ctx.bezierCurveTo(305.2, 368.9, 315.5, 370.1, 321.5, 383.3);
    ctx.bezierCurveTo(322.4, 385.3, 314.1, 392.0, 314.1, 392.0);
    ctx.bezierCurveTo(313.1, 387.0, 313.4, 380.0, 308.1, 377.9);
    ctx.fill();
    ctx.lineWidth = thin;
    ctx.stroke();
    ctx.restore();
  }
  else if(opt == "flip"){
    // body/flipflop sandal
    ctx.beginPath();
    ctx.moveTo(302.1, 372.4);
    ctx.bezierCurveTo(306.1, 371.5, 307.6, 369.7, 308.6, 370.0);
    ctx.bezierCurveTo(309.7, 370.4, 318.2, 379.6, 315.4, 390.7);
    ctx.bezierCurveTo(315.4, 390.7, 310.8, 394.5, 309.6, 395.5);
    ctx.bezierCurveTo(308.3, 396.5, 317.0, 379.7, 308.5, 370.8);
    ctx.bezierCurveTo(307.6, 369.9, 305.2, 373.3, 303.1, 375.2);
    ctx.fill();
    ctx.lineWidth = thin;
    ctx.stroke();
    ctx.restore();
  }
  else{
    return;
  }
}
function arms(opt){
  if(opt == "thin"){
    // shoulder/fill thin
    ctx.beginPath();
    ctx.moveTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 227.7, 258.9, 234.9, 268.5);
    ctx.bezierCurveTo(237.5, 272.0, 244.6, 275.8, 247.8, 277.8);
    ctx.bezierCurveTo(253.7, 281.5, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.bezierCurveTo(273.5, 299.7, 287.0, 301.1, 283.1, 308.5);
    ctx.bezierCurveTo(281.2, 312.2, 280.0, 315.2, 279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 268.7, 321.4, 261.3, 317.5);
    ctx.bezierCurveTo(248.5, 310.7, 235.3, 302.7, 229.6, 299.2);
    ctx.bezierCurveTo(224.6, 296.1, 211.0, 294.1, 207.3, 296.7);
    ctx.lineTo(191.6, 253.7);
    ctx.closePath();
    ctx.fill();

    // shoulder/line thin
    ctx.beginPath();
    ctx.moveTo(279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 269.6, 319.0, 261.3, 317.5);
    ctx.bezierCurveTo(257.8, 316.9, 232.6, 301.0, 227.8, 298.0);
    ctx.bezierCurveTo(222.8, 294.9, 211.0, 294.1, 207.3, 296.7);
    ctx.lineTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 222.8, 257.8, 234.9, 268.5);
    ctx.bezierCurveTo(238.1, 271.4, 244.7, 275.7, 247.8, 277.8);
    ctx.bezierCurveTo(254.0, 282.0, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.lineWidth = thick;
    ctx.stroke();
    ctx.restore();
  }
  else if(opt == "thick"){
    // shoulder/fill
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 227.7, 258.9, 234.9, 268.5);
    ctx.bezierCurveTo(237.5, 272.0, 244.2, 276.9, 247.8, 277.8);
    ctx.bezierCurveTo(254.8, 279.7, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.bezierCurveTo(273.5, 299.7, 287.0, 301.1, 283.1, 308.5);
    ctx.bezierCurveTo(281.2, 312.2, 280.0, 315.2, 279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 267.1, 321.3, 258.8, 321.3);
    ctx.bezierCurveTo(245.5, 321.1, 228.8, 308.0, 225.5, 303.4);
    ctx.bezierCurveTo(222.1, 298.6, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // shoulder/line
    ctx.beginPath();
    ctx.moveTo(279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 267.1, 321.3, 258.8, 321.3);
    ctx.bezierCurveTo(245.5, 321.1, 228.8, 308.0, 225.5, 303.4);
    ctx.bezierCurveTo(222.1, 298.6, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 227.7, 258.9, 234.9, 268.5);
    ctx.bezierCurveTo(237.5, 272.0, 244.2, 276.9, 247.8, 277.8);
    ctx.bezierCurveTo(254.8, 279.7, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.strokeStyle = dark;
    ctx.lineWidth = thick;
    ctx.stroke();
    ctx.restore();
  }
  else if(opt == "strong"){
    // shoulder/fill thick
    ctx.beginPath();
    ctx.moveTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 227.4, 261.0, 236.5, 268.8);
    ctx.bezierCurveTo(240.5, 272.2, 246.4, 274.8, 249.5, 276.8);
    ctx.bezierCurveTo(255.6, 280.9, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.bezierCurveTo(273.5, 299.7, 287.0, 301.1, 283.1, 308.5);
    ctx.bezierCurveTo(281.2, 312.2, 280.0, 315.2, 279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 266.4, 323.9, 258.2, 322.6);
    ctx.bezierCurveTo(245.8, 320.7, 229.3, 313.3, 226.0, 308.6);
    ctx.bezierCurveTo(222.6, 303.8, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.closePath();
    ctx.fill();

    // shoulder/line thick
    ctx.beginPath();
    ctx.moveTo(279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 264.5, 323.7, 256.3, 322.3);
    ctx.bezierCurveTo(242.5, 319.9, 233.8, 315.5, 223.5, 306.5);
    ctx.bezierCurveTo(219.1, 302.6, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 202.3, 254.4, 206.7, 254.5);
    ctx.bezierCurveTo(214.4, 254.7, 225.7, 260.7, 234.9, 268.5);
    ctx.bezierCurveTo(237.7, 270.9, 245.7, 274.4, 249.5, 276.8);
    ctx.bezierCurveTo(255.6, 280.7, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.lineWidth = thick;
    ctx.stroke();
  }
  else if(opt == "buff"){
    // shoulder/fill muscle
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 201.7, 250.9, 206.1, 250.9);
    ctx.bezierCurveTo(216.1, 250.9, 236.8, 255.8, 236.7, 271.1);
    ctx.bezierCurveTo(236.7, 275.5, 238.7, 274.3, 242.5, 274.6);
    ctx.bezierCurveTo(259.8, 276.1, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    ctx.bezierCurveTo(273.5, 299.7, 287.0, 301.1, 283.1, 308.5);
    ctx.bezierCurveTo(281.2, 312.2, 280.0, 315.2, 279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 267.1, 321.3, 258.8, 321.3);
    ctx.bezierCurveTo(245.5, 321.1, 226.6, 309.6, 221.7, 302.0);
    ctx.bezierCurveTo(218.5, 297.1, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();

    // shoulder/line muscle
    ctx.beginPath();
    ctx.moveTo(279.1, 318.3);
    ctx.bezierCurveTo(278.4, 320.3, 275.3, 321.2, 273.4, 322.1);
    ctx.bezierCurveTo(271.8, 323.0, 267.1, 321.3, 258.8, 321.3);
    ctx.bezierCurveTo(245.5, 321.1, 228.0, 310.7, 221.7, 302.0);
    ctx.bezierCurveTo(217.8, 296.6, 212.7, 298.6, 209.0, 301.2);
    ctx.lineTo(191.6, 253.7);
    ctx.bezierCurveTo(194.0, 253.3, 194.0, 254.4, 198.0, 252.5);
    ctx.bezierCurveTo(209.2, 247.1, 235.5, 255.7, 236.5, 269.2);
    ctx.bezierCurveTo(236.8, 273.6, 237.8, 274.3, 241.5, 274.5);
    ctx.bezierCurveTo(259.5, 275.4, 270.4, 290.8, 273.0, 295.9);
    ctx.bezierCurveTo(274.6, 299.2, 272.4, 299.8, 272.4, 299.8);
    //ctx.strokeStyle = "rgb(164, 207, 0)";
    ctx.lineWidth = thick;
    ctx.stroke();
  }
  else{
    return;
  }
}

    function draw(ctx) {

      // sky/Rectangle
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, 792.5, 129.8);
      drawPattern(patfill[2]);
      ctx.strokeStyle = empty;
      ctx.lineWidth = 0;
      ctx.stroke();
      //horizon line
      ctx.beginPath();
      ctx.moveTo(792.5, 129.8);
      ctx.lineTo(0.5, 129.8);
      ctx.closePath();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();


      // sky/Path
      ctx.beginPath();
      ctx.moveTo(209.5, 109.2);
      ctx.bezierCurveTo(209.4, 106.3, 213.8, 104.5, 215.4, 106.6);
      ctx.bezierCurveTo(215.7, 107.0, 216.6, 107.1, 216.6, 106.6);
      ctx.bezierCurveTo(216.9, 101.6, 228.8, 99.2, 230.6, 107.9);
      ctx.bezierCurveTo(230.9, 109.8, 209.5, 110.2, 209.5, 109.2);
      ctx.closePath();
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();


      // sky/Path
      ctx.beginPath();
      ctx.moveTo(246.6, 100.5);
      ctx.bezierCurveTo(246.0, 95.3, 253.8, 93.6, 258.5, 93.4);
      ctx.bezierCurveTo(263.2, 93.2, 287.2, 93.7, 287.2, 93.7);
      ctx.bezierCurveTo(287.2, 93.7, 294.8, 92.9, 295.8, 99.0);
      ctx.bezierCurveTo(296.0, 100.3, 292.7, 100.5, 293.5, 100.5);
      ctx.bezierCurveTo(294.7, 100.5, 297.9, 101.0, 299.7, 101.3);
      ctx.bezierCurveTo(303.5, 102.1, 303.0, 102.9, 301.0, 104.2);
      ctx.bezierCurveTo(299.0, 105.4, 282.8, 107.9, 282.0, 107.7);
      ctx.bezierCurveTo(277.6, 106.5, 286.0, 105.9, 285.7, 103.8);
      ctx.bezierCurveTo(285.7, 103.8, 279.4, 103.8, 275.0, 103.8);
      ctx.bezierCurveTo(270.7, 103.8, 260.5, 104.8, 256.2, 104.8);
      ctx.bezierCurveTo(246.3, 104.8, 247.1, 104.8, 246.6, 100.5);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(405.5, 95.0);
      ctx.bezierCurveTo(409.0, 96.3, 471.3, 93.4, 471.3, 93.4);
      ctx.bezierCurveTo(474.0, 95.0, 468.0, 95.1, 465.5, 98.0);
      ctx.bezierCurveTo(463.3, 100.5, 470.3, 98.9, 476.0, 98.3);
      ctx.bezierCurveTo(495.0, 96.0, 505.7, 92.3, 499.8, 91.3);
      ctx.bezierCurveTo(492.7, 90.0, 483.8, 89.3, 483.8, 88.0);
      ctx.bezierCurveTo(483.8, 86.8, 484.1, 79.2, 464.5, 80.8);
      ctx.bezierCurveTo(460.3, 81.1, 461.8, 69.1, 435.3, 69.0);
      ctx.bezierCurveTo(411.8, 68.9, 401.3, 93.4, 405.5, 95.0);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(510.5, 92.0);
      ctx.bezierCurveTo(510.5, 92.7, 538.0, 92.0, 538.0, 92.0);
      ctx.bezierCurveTo(540.2, 88.3, 529.7, 77.3, 518.6, 87.8);
      ctx.bezierCurveTo(517.4, 88.9, 517.1, 89.2, 516.8, 88.6);
      ctx.bezierCurveTo(516.1, 86.8, 510.5, 85.6, 510.5, 92.0);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(471.8, 46.3);
      ctx.bezierCurveTo(471.9, 47.3, 567.3, 47.2, 565.3, 46.3);
      ctx.bezierCurveTo(563.1, 45.3, 562.4, 45.4, 562.5, 44.8);
      ctx.bezierCurveTo(563.8, 38.7, 554.7, 32.9, 547.3, 39.7);
      ctx.bezierCurveTo(547.2, 39.8, 547.1, 39.7, 547.1, 39.6);
      ctx.bezierCurveTo(547.3, 37.8, 545.0, 37.5, 543.9, 38.3);
      ctx.bezierCurveTo(543.6, 38.4, 543.3, 38.3, 543.2, 37.9);
      ctx.bezierCurveTo(542.7, 15.9, 512.4, 15.6, 503.8, 35.8);
      ctx.bezierCurveTo(502.0, 39.8, 508.2, 28.7, 508.2, 28.7);
      ctx.bezierCurveTo(508.2, 28.7, 492.1, 21.5, 485.4, 34.0);
      ctx.bezierCurveTo(483.8, 37.0, 484.2, 40.9, 482.8, 37.9);
      ctx.bezierCurveTo(481.6, 35.5, 471.0, 39.4, 471.8, 46.3);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(507.6, 55.2);
      ctx.bezierCurveTo(508.6, 55.4, 553.7, 55.8, 553.7, 54.8);
      ctx.bezierCurveTo(553.6, 54.2, 550.8, 53.7, 550.8, 53.7);
      ctx.bezierCurveTo(547.8, 47.0, 537.8, 51.2, 538.3, 50.8);
      ctx.bezierCurveTo(542.0, 46.9, 536.3, 43.8, 531.7, 47.0);
      ctx.bezierCurveTo(528.4, 49.3, 531.1, 47.5, 531.7, 46.0);
      ctx.bezierCurveTo(532.2, 44.5, 530.4, 34.7, 514.7, 37.2);
      ctx.bezierCurveTo(504.9, 38.7, 502.5, 54.3, 507.6, 55.2);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(579.9, 62.5);
      ctx.lineTo(656.8, 62.8);
      ctx.bezierCurveTo(655.5, 60.5, 640.3, 55.5, 636.3, 59.7);
      ctx.bezierCurveTo(636.2, 59.8, 635.6, 59.9, 635.7, 58.8);
      ctx.bezierCurveTo(636.0, 55.0, 628.4, 49.9, 623.2, 55.5);
      ctx.bezierCurveTo(622.4, 56.3, 622.0, 56.0, 622.1, 55.6);
      ctx.bezierCurveTo(623.3, 51.3, 616.9, 45.3, 608.6, 52.1);
      ctx.bezierCurveTo(608.4, 52.3, 608.2, 51.6, 608.1, 51.3);
      ctx.bezierCurveTo(605.9, 41.7, 587.9, 37.6, 579.8, 51.3);
      ctx.bezierCurveTo(577.6, 54.9, 578.3, 60.2, 579.9, 62.5);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(662.2, 29.7);
      ctx.bezierCurveTo(664.5, 29.8, 670.0, 30.3, 668.0, 27.0);
      ctx.bezierCurveTo(666.0, 23.7, 662.3, 24.2, 660.7, 25.8);
      ctx.bezierCurveTo(659.0, 27.5, 659.0, 29.5, 662.2, 29.7);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(678.7, 31.8);
      ctx.bezierCurveTo(676.8, 29.2, 679.2, 28.5, 690.8, 26.3);
      ctx.bezierCurveTo(700.7, 24.5, 706.9, 24.8, 706.2, 23.2);
      ctx.bezierCurveTo(705.3, 21.3, 700.8, 20.3, 700.8, 20.3);
      ctx.bezierCurveTo(700.5, 17.5, 711.9, 17.4, 725.2, 20.6);
      ctx.bezierCurveTo(733.3, 22.5, 727.4, 27.2, 727.3, 28.3);
      ctx.bezierCurveTo(727.3, 30.1, 734.6, 28.2, 732.0, 32.8);
      ctx.bezierCurveTo(730.7, 35.3, 718.6, 37.0, 714.0, 37.0);
      ctx.bezierCurveTo(713.8, 37.0, 713.8, 36.7, 714.0, 36.6);
      ctx.bezierCurveTo(720.8, 33.5, 723.6, 34.2, 721.5, 32.5);
      ctx.bezierCurveTo(719.3, 30.8, 699.2, 29.2, 703.0, 32.7);
      ctx.bezierCurveTo(708.7, 37.8, 695.1, 35.9, 689.7, 35.2);
      ctx.bezierCurveTo(683.7, 34.3, 678.7, 31.8, 678.7, 31.8);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // sky/Path
      ctx.beginPath();
      ctx.moveTo(667.5, 92.3);
      ctx.bezierCurveTo(669.0, 93.2, 721.8, 92.3, 723.8, 92.3);
      ctx.bezierCurveTo(728.5, 92.3, 727.5, 94.1, 724.9, 94.4);
      ctx.bezierCurveTo(721.7, 94.8, 719.0, 97.1, 722.3, 96.9);
      ctx.bezierCurveTo(723.4, 96.8, 732.6, 96.8, 732.6, 90.7);
      ctx.bezierCurveTo(732.6, 85.8, 730.5, 83.4, 727.5, 85.3);
      ctx.bezierCurveTo(727.5, 85.3, 724.2, 80.7, 720.7, 80.7);
      ctx.bezierCurveTo(715.2, 80.7, 715.8, 88.0, 715.5, 86.7);
      ctx.bezierCurveTo(714.7, 83.4, 710.5, 82.2, 708.4, 85.1);
      ctx.bezierCurveTo(707.6, 86.2, 708.2, 85.6, 708.4, 84.4);
      ctx.bezierCurveTo(708.9, 81.8, 706.2, 74.7, 698.9, 73.5);
      ctx.bezierCurveTo(692.5, 72.5, 685.6, 75.1, 681.3, 82.3);
      ctx.bezierCurveTo(680.7, 83.4, 679.4, 85.5, 679.5, 84.2);
      ctx.bezierCurveTo(679.7, 80.5, 671.5, 79.7, 666.3, 83.4);
      ctx.bezierCurveTo(662.4, 86.2, 662.3, 89.3, 667.5, 92.3);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      //sand fillctx.beginPath();
      ctx.beginPath();
      ctx.rect(0.5, 200, 792, 413);
      //ctx.fillStyle = "pink";
      drawPattern(patfill[4]);
      //ctx.fill();
      ctx.lineWidth = 0;
      ctx.strokeStyle = empty;
      ctx.stroke();


      // water/Path
      //ocean fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.5, 222.0);
      ctx.bezierCurveTo(0.5, 222.0, 11.0, 213.0, 19.0, 213.5);
      ctx.bezierCurveTo(27.0, 214.0, 30.8, 218.7, 40.2, 219.3);
      ctx.bezierCurveTo(44.2, 219.6, 47.4, 219.6, 52.1, 216.9);
      ctx.bezierCurveTo(56.4, 214.4, 76.8, 212.0, 82.5, 217.7);
      ctx.bezierCurveTo(88.2, 223.5, 157.2, 196.2, 170.8, 213.4);
      ctx.bezierCurveTo(175.5, 211.2, 194.3, 198.7, 213.7, 213.5);
      ctx.bezierCurveTo(228.3, 224.7, 257.3, 210.6, 261.3, 207.7);
      ctx.bezierCurveTo(265.3, 204.7, 291.2, 206.2, 319.7, 218.5);
      ctx.bezierCurveTo(326.3, 221.4, 360.3, 219.0, 387.5, 225.3);
      ctx.bezierCurveTo(404.7, 229.3, 423.8, 237.5, 423.5, 226.5);
      ctx.bezierCurveTo(423.1, 212.2, 421.8, 209.3, 482.5, 217.7);
      ctx.bezierCurveTo(515.3, 222.2, 509.7, 235.0, 505.9, 236.4);
      ctx.bezierCurveTo(499.5, 238.6, 490.0, 251.4, 512.8, 251.8);
      ctx.bezierCurveTo(520.8, 252.0, 521.6, 252.2, 527.5, 255.5);
      ctx.bezierCurveTo(532.2, 258.2, 555.6, 255.3, 561.2, 252.8);
      ctx.bezierCurveTo(570.5, 248.7, 623.0, 256.5, 631.5, 265.0);
      ctx.bezierCurveTo(649.0, 282.5, 687.3, 279.5, 698.0, 271.3);
      ctx.bezierCurveTo(700.4, 269.5, 708.5, 266.8, 710.8, 271.5);
      ctx.bezierCurveTo(713.2, 276.2, 727.7, 274.3, 734.2, 270.8);
      ctx.bezierCurveTo(740.0, 267.8, 744.9, 269.7, 753.2, 272.3);
      ctx.bezierCurveTo(761.0, 274.8, 786.8, 271.0, 792.5, 267.3);
      ctx.lineTo(792.5, 129.8);
      ctx.lineTo(0.5, 129.8);
      ctx.strokeStyle = dark;
      ctx.lineWidth = thin;
      drawPattern(patfill[3]);
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(28.3, 172.2);
      ctx.bezierCurveTo(26.3, 173.6, 27.9, 174.7, 29.1, 175.6);
      ctx.bezierCurveTo(30.8, 176.7, 34.9, 174.7, 38.3, 175.4);
      ctx.bezierCurveTo(43.6, 176.4, 52.2, 175.0, 53.1, 174.3);
      ctx.bezierCurveTo(54.7, 173.0, 59.0, 170.4, 65.0, 174.5);
      ctx.bezierCurveTo(68.4, 176.9, 72.7, 176.1, 74.5, 174.5);
      ctx.bezierCurveTo(76.3, 173.0, 78.5, 176.1, 79.5, 176.9);
      ctx.bezierCurveTo(82.4, 179.5, 86.0, 179.3, 88.3, 178.7);
      ctx.bezierCurveTo(93.3, 177.4, 86.2, 178.2, 83.0, 176.5);
      ctx.bezierCurveTo(79.8, 174.8, 79.5, 171.9, 77.0, 172.3);
      ctx.bezierCurveTo(74.5, 172.6, 70.6, 175.8, 68.5, 174.5);
      ctx.bezierCurveTo(64.1, 171.7, 70.8, 170.8, 63.8, 169.3);
      ctx.bezierCurveTo(62.1, 168.9, 60.4, 171.1, 58.8, 170.9);
      ctx.bezierCurveTo(57.9, 170.9, 56.8, 170.9, 56.6, 170.5);
      ctx.bezierCurveTo(55.7, 168.6, 53.8, 168.8, 49.5, 170.8);
      ctx.bezierCurveTo(43.7, 173.3, 37.8, 170.7, 38.2, 169.6);
      ctx.bezierCurveTo(39.6, 165.1, 35.8, 166.5, 34.7, 164.8);
      ctx.bezierCurveTo(33.3, 162.8, 29.2, 167.1, 31.0, 167.5);
      ctx.bezierCurveTo(33.2, 168.0, 33.5, 168.6, 28.3, 172.2);
      ctx.closePath();
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(194.3, 165.9);
      ctx.bezierCurveTo(194.3, 167.1, 196.9, 169.0, 200.9, 168.0);
      ctx.bezierCurveTo(204.9, 167.0, 207.8, 165.0, 210.9, 166.3);
      ctx.bezierCurveTo(214.0, 167.5, 215.3, 168.5, 218.0, 167.7);
      ctx.bezierCurveTo(220.6, 167.0, 224.1, 169.5, 222.3, 171.0);
      ctx.bezierCurveTo(220.4, 172.5, 218.6, 174.8, 220.3, 176.8);
      ctx.bezierCurveTo(221.9, 178.8, 226.9, 179.9, 232.0, 178.6);
      ctx.bezierCurveTo(234.1, 178.1, 239.5, 175.8, 241.5, 178.1);
      ctx.bezierCurveTo(243.3, 180.1, 251.8, 179.3, 253.9, 174.4);
      ctx.bezierCurveTo(255.4, 170.8, 267.4, 163.6, 274.0, 163.8);
      ctx.bezierCurveTo(283.0, 163.9, 288.2, 164.2, 290.3, 163.8);
      ctx.bezierCurveTo(293.8, 163.0, 298.3, 163.4, 303.4, 165.0);
      ctx.bezierCurveTo(308.5, 166.6, 315.7, 168.2, 316.0, 165.1);
      ctx.bezierCurveTo(316.3, 162.2, 313.8, 158.9, 312.9, 159.5);
      ctx.bezierCurveTo(312.9, 159.5, 313.3, 161.3, 312.8, 162.5);
      ctx.bezierCurveTo(312.0, 164.2, 308.9, 165.4, 307.0, 164.3);
      ctx.bezierCurveTo(302.6, 161.6, 301.6, 160.6, 295.9, 161.6);
      ctx.bezierCurveTo(292.9, 162.2, 285.6, 163.2, 286.4, 161.8);
      ctx.bezierCurveTo(287.8, 159.0, 277.6, 161.3, 274.1, 158.8);
      ctx.bezierCurveTo(269.6, 155.5, 266.4, 162.8, 262.5, 166.3);
      ctx.bezierCurveTo(257.9, 170.4, 256.3, 167.9, 254.5, 168.6);
      ctx.bezierCurveTo(251.2, 170.0, 252.5, 171.9, 246.4, 171.9);
      ctx.bezierCurveTo(235.6, 171.8, 239.1, 173.6, 238.5, 174.4);
      ctx.bezierCurveTo(237.9, 175.1, 229.9, 175.8, 226.3, 174.3);
      ctx.bezierCurveTo(222.6, 172.8, 223.8, 172.0, 225.1, 171.3);
      ctx.bezierCurveTo(228.6, 169.4, 223.6, 169.1, 226.9, 167.3);
      ctx.bezierCurveTo(229.0, 166.0, 232.9, 164.3, 227.1, 163.4);
      ctx.bezierCurveTo(222.1, 162.8, 221.3, 167.1, 215.3, 166.5);
      ctx.bezierCurveTo(212.8, 166.2, 211.4, 161.6, 206.5, 164.4);
      ctx.bezierCurveTo(203.5, 166.1, 198.8, 165.5, 198.5, 163.7);
      ctx.bezierCurveTo(198.0, 160.8, 204.3, 159.9, 199.1, 159.9);
      ctx.bezierCurveTo(198.1, 159.9, 194.2, 161.3, 194.3, 165.9);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(330.8, 167.3);
      ctx.bezierCurveTo(327.7, 168.5, 328.9, 170.1, 330.8, 170.2);
      ctx.bezierCurveTo(334.3, 170.3, 332.6, 174.6, 331.8, 176.0);
      ctx.bezierCurveTo(330.3, 178.6, 332.8, 180.5, 335.7, 180.2);
      ctx.bezierCurveTo(338.5, 179.8, 341.8, 180.2, 341.8, 183.3);
      ctx.bezierCurveTo(341.8, 186.5, 336.5, 186.2, 336.8, 189.5);
      ctx.bezierCurveTo(337.2, 192.8, 340.2, 192.2, 346.3, 192.9);
      ctx.bezierCurveTo(350.8, 193.5, 353.6, 189.5, 355.3, 193.1);
      ctx.bezierCurveTo(357.0, 197.0, 360.6, 194.1, 368.5, 193.7);
      ctx.bezierCurveTo(374.2, 193.3, 375.4, 191.6, 378.2, 192.3);
      ctx.bezierCurveTo(381.3, 193.2, 384.8, 190.0, 385.0, 188.2);
      ctx.bezierCurveTo(385.4, 185.4, 390.0, 183.5, 390.9, 181.8);
      ctx.bezierCurveTo(392.4, 178.8, 388.7, 180.6, 386.3, 182.5);
      ctx.bezierCurveTo(383.0, 185.2, 385.3, 187.3, 379.0, 188.3);
      ctx.bezierCurveTo(374.6, 189.1, 369.7, 188.6, 369.5, 191.0);
      ctx.bezierCurveTo(369.4, 192.0, 360.4, 193.5, 360.4, 190.0);
      ctx.bezierCurveTo(360.4, 187.3, 357.0, 183.5, 349.2, 186.3);
      ctx.bezierCurveTo(340.7, 189.4, 341.8, 183.3, 345.2, 180.6);
      ctx.bezierCurveTo(346.5, 179.6, 345.8, 175.8, 338.3, 175.8);
      ctx.bezierCurveTo(334.9, 175.8, 332.3, 173.0, 335.3, 170.8);
      ctx.bezierCurveTo(338.3, 168.7, 339.0, 166.3, 334.7, 166.3);
      ctx.bezierCurveTo(333.3, 166.3, 332.7, 166.6, 330.8, 167.3);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(0.5, 216.0);
      ctx.bezierCurveTo(6.5, 216.5, 11.6, 216.3, 15.2, 213.5);
      ctx.bezierCurveTo(17.9, 211.3, 25.4, 214.1, 29.2, 216.2);
      ctx.bezierCurveTo(34.0, 218.8, 45.8, 220.0, 49.0, 218.0);
      ctx.bezierCurveTo(52.3, 216.0, 55.9, 216.1, 60.0, 217.5);
      ctx.bezierCurveTo(61.5, 215.8, 53.7, 214.0, 52.5, 213.3);
      ctx.bezierCurveTo(45.0, 209.0, 46.2, 210.2, 43.5, 213.2);
      ctx.bezierCurveTo(42.4, 214.4, 40.8, 215.7, 36.3, 212.0);
      ctx.bezierCurveTo(34.8, 210.8, 36.1, 210.3, 29.1, 211.1);
      ctx.bezierCurveTo(27.3, 211.3, 23.7, 209.1, 25.7, 206.8);
      ctx.bezierCurveTo(27.3, 204.9, 30.3, 203.3, 24.8, 204.0);
      ctx.bezierCurveTo(22.2, 204.3, 20.8, 213.0, 11.5, 205.0);
      ctx.bezierCurveTo(5.6, 199.9, 6.8, 207.6, 0.5, 209.8);
      ctx.lineTo(0.5, 216.0);
      ctx.closePath();
      ctx.strokeStyle = "rgb(154, 154, 154)";
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(174.5, 197.0);
      ctx.bezierCurveTo(183.3, 196.8, 186.8, 198.4, 186.5, 201.5);
      ctx.bezierCurveTo(186.0, 206.2, 187.2, 208.5, 194.3, 208.2);
      ctx.bezierCurveTo(200.9, 207.9, 198.5, 210.5, 206.3, 212.0);
      ctx.bezierCurveTo(211.5, 213.0, 213.8, 219.0, 223.8, 219.7);
      ctx.bezierCurveTo(236.3, 220.5, 230.8, 217.0, 236.3, 217.2);
      ctx.bezierCurveTo(242.6, 217.3, 244.8, 215.0, 240.5, 213.8);
      ctx.bezierCurveTo(237.1, 212.9, 235.9, 212.7, 236.5, 211.3);
      ctx.bezierCurveTo(237.2, 209.7, 234.0, 207.7, 230.0, 208.3);
      ctx.bezierCurveTo(224.5, 209.2, 224.0, 207.3, 223.7, 205.0);
      ctx.bezierCurveTo(223.3, 203.0, 229.7, 201.8, 234.2, 201.7);
      ctx.bezierCurveTo(238.6, 201.5, 237.5, 199.0, 233.5, 198.8);
      ctx.bezierCurveTo(230.0, 198.7, 231.5, 197.2, 228.8, 195.5);
      ctx.bezierCurveTo(226.7, 194.1, 221.3, 196.4, 219.2, 198.7);
      ctx.bezierCurveTo(217.0, 200.9, 212.7, 202.8, 208.0, 202.7);
      ctx.bezierCurveTo(203.3, 202.5, 197.7, 202.1, 200.5, 199.3);
      ctx.bezierCurveTo(202.1, 197.8, 206.4, 196.7, 199.7, 194.7);
      ctx.bezierCurveTo(195.2, 193.3, 193.7, 194.8, 191.5, 195.2);
      ctx.bezierCurveTo(189.3, 195.5, 187.9, 194.8, 185.5, 193.7);
      ctx.bezierCurveTo(182.0, 192.0, 174.2, 191.8, 172.5, 195.5);
      ctx.bezierCurveTo(171.6, 197.5, 172.3, 197.0, 174.5, 197.0);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.strokeStyle = light;
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(212.2, 208.2);
      ctx.bezierCurveTo(214.7, 208.3, 213.2, 212.5, 215.0, 209.8);
      ctx.bezierCurveTo(217.5, 206.2, 219.7, 209.0, 218.5, 206.2);
      ctx.bezierCurveTo(217.5, 203.7, 217.7, 204.4, 213.5, 205.0);
      ctx.bezierCurveTo(212.5, 205.2, 207.0, 207.8, 212.2, 208.2);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(224.7, 212.2);
      ctx.bezierCurveTo(224.2, 210.1, 218.2, 215.4, 224.7, 214.5);
      ctx.bezierCurveTo(225.7, 214.4, 226.4, 212.3, 227.8, 213.5);
      ctx.bezierCurveTo(229.1, 214.7, 230.0, 216.2, 231.0, 214.8);
      ctx.bezierCurveTo(232.0, 213.5, 231.3, 211.0, 229.5, 212.2);
      ctx.bezierCurveTo(227.7, 213.3, 225.2, 214.2, 224.7, 212.2);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(243.2, 210.7);
      ctx.bezierCurveTo(242.0, 208.1, 240.0, 206.8, 238.3, 206.7);
      ctx.bezierCurveTo(230.3, 206.2, 238.2, 202.0, 242.0, 202.8);
      ctx.bezierCurveTo(244.2, 203.3, 246.0, 202.1, 250.8, 198.5);
      ctx.bezierCurveTo(254.0, 196.1, 255.1, 196.7, 257.3, 197.5);
      ctx.bezierCurveTo(261.6, 199.1, 264.3, 201.5, 267.3, 200.2);
      ctx.bezierCurveTo(271.0, 198.4, 274.3, 198.4, 276.0, 198.7);
      ctx.bezierCurveTo(278.0, 199.0, 277.6, 197.5, 277.2, 196.3);
      ctx.bezierCurveTo(276.3, 194.2, 282.3, 198.8, 280.5, 200.3);
      ctx.bezierCurveTo(278.8, 201.7, 277.8, 203.5, 272.7, 203.5);
      ctx.bezierCurveTo(267.6, 203.4, 264.9, 204.3, 261.4, 205.0);
      ctx.bezierCurveTo(257.2, 205.9, 261.4, 208.9, 250.8, 212.7);
      ctx.bezierCurveTo(244.5, 214.9, 244.6, 213.6, 243.2, 210.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(260.5, 191.2);
      ctx.bezierCurveTo(252.1, 193.3, 258.0, 187.8, 262.0, 187.5);
      ctx.bezierCurveTo(265.5, 187.2, 267.5, 189.2, 271.5, 187.7);
      ctx.bezierCurveTo(277.3, 185.5, 276.0, 189.6, 276.0, 189.6);
      ctx.bezierCurveTo(277.5, 191.3, 280.9, 189.6, 277.2, 191.3);
      ctx.bezierCurveTo(276.0, 191.9, 270.6, 190.4, 269.5, 190.7);
      ctx.bezierCurveTo(268.2, 191.0, 271.2, 192.2, 267.7, 192.6);
      ctx.bezierCurveTo(256.3, 194.0, 265.5, 189.9, 260.5, 191.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(288.8, 205.7);
      ctx.bezierCurveTo(285.3, 202.8, 287.6, 199.6, 292.8, 198.5);
      ctx.bezierCurveTo(299.2, 197.2, 297.5, 192.9, 295.7, 192.9);
      ctx.bezierCurveTo(293.0, 192.9, 286.7, 188.5, 288.0, 185.5);
      ctx.bezierCurveTo(289.4, 182.5, 292.2, 182.5, 290.0, 179.1);
      ctx.bezierCurveTo(287.8, 175.7, 287.8, 175.7, 291.2, 178.0);
      ctx.bezierCurveTo(293.3, 179.4, 293.3, 179.5, 292.8, 184.5);
      ctx.bezierCurveTo(292.6, 186.3, 293.8, 188.8, 298.1, 188.3);
      ctx.bezierCurveTo(300.3, 188.1, 300.2, 187.9, 303.7, 190.8);
      ctx.bezierCurveTo(305.9, 192.7, 311.6, 194.3, 316.0, 193.7);
      ctx.bezierCurveTo(321.2, 192.9, 316.0, 185.7, 322.5, 191.2);
      ctx.bezierCurveTo(324.6, 193.0, 324.6, 198.4, 319.2, 198.5);
      ctx.bezierCurveTo(315.9, 198.5, 315.9, 198.5, 307.8, 197.3);
      ctx.bezierCurveTo(305.2, 196.9, 298.2, 197.4, 297.2, 200.4);
      ctx.bezierCurveTo(295.9, 204.2, 300.0, 200.4, 307.5, 200.4);
      ctx.bezierCurveTo(311.2, 200.4, 316.0, 199.9, 316.0, 203.7);
      ctx.bezierCurveTo(316.0, 204.8, 323.9, 204.3, 324.7, 203.7);
      ctx.bezierCurveTo(327.1, 201.9, 315.9, 200.5, 328.9, 201.0);
      ctx.bezierCurveTo(333.0, 201.2, 334.7, 207.8, 339.3, 208.0);
      ctx.bezierCurveTo(341.3, 208.1, 343.5, 207.7, 344.2, 209.4);
      ctx.bezierCurveTo(345.5, 212.7, 360.1, 212.8, 362.3, 211.8);
      ctx.bezierCurveTo(366.0, 210.3, 369.5, 205.0, 374.5, 206.0);
      ctx.bezierCurveTo(379.5, 207.0, 380.5, 206.3, 383.3, 209.8);
      ctx.bezierCurveTo(386.2, 213.3, 387.6, 212.8, 388.7, 208.3);
      ctx.bezierCurveTo(389.5, 204.8, 386.3, 197.5, 388.8, 200.7);
      ctx.bezierCurveTo(391.2, 203.8, 391.8, 205.2, 393.0, 205.8);
      ctx.bezierCurveTo(394.4, 206.5, 396.3, 207.3, 396.5, 210.0);
      ctx.bezierCurveTo(396.7, 212.7, 400.0, 213.8, 404.2, 212.2);
      ctx.bezierCurveTo(410.7, 209.6, 416.7, 213.0, 415.7, 214.5);
      ctx.bezierCurveTo(414.0, 217.1, 413.3, 215.7, 414.1, 217.1);
      ctx.bezierCurveTo(414.9, 218.4, 420.2, 221.0, 415.8, 221.3);
      ctx.bezierCurveTo(411.5, 221.7, 396.3, 221.5, 387.3, 217.3);
      ctx.bezierCurveTo(378.3, 213.2, 357.7, 213.5, 351.0, 217.7);
      ctx.bezierCurveTo(344.3, 221.8, 343.2, 224.8, 338.2, 223.0);
      ctx.bezierCurveTo(333.2, 221.2, 331.8, 226.1, 326.0, 223.5);
      ctx.bezierCurveTo(320.2, 221.0, 316.3, 213.4, 306.7, 213.8);
      ctx.bezierCurveTo(297.0, 214.2, 296.9, 212.2, 288.8, 205.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(299.8, 209.0);
      ctx.bezierCurveTo(300.8, 207.2, 303.6, 204.0, 304.3, 206.2);
      ctx.bezierCurveTo(305.0, 208.6, 304.9, 211.7, 302.5, 210.7);
      ctx.bezierCurveTo(300.2, 209.7, 299.8, 210.4, 299.8, 209.0);
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(310.1, 206.8);
      ctx.bezierCurveTo(313.0, 205.8, 314.8, 203.4, 314.8, 206.2);
      ctx.bezierCurveTo(314.7, 209.4, 313.8, 211.0, 312.0, 210.7);
      ctx.bezierCurveTo(307.7, 210.1, 307.7, 207.5, 310.1, 206.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(320.0, 212.4);
      ctx.bezierCurveTo(320.0, 210.8, 322.0, 209.8, 324.0, 211.6);
      ctx.bezierCurveTo(325.1, 212.6, 325.6, 212.2, 326.4, 211.7);
      ctx.bezierCurveTo(328.1, 210.6, 328.3, 212.2, 331.0, 213.8);
      ctx.bezierCurveTo(332.0, 214.4, 334.5, 213.8, 334.5, 213.8);
      ctx.bezierCurveTo(336.8, 212.2, 337.3, 213.9, 336.9, 217.1);
      ctx.bezierCurveTo(336.8, 218.1, 346.1, 216.7, 335.8, 219.5);
      ctx.bezierCurveTo(331.0, 220.9, 320.0, 216.1, 320.0, 212.4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(399.9, 186.4);
      ctx.bezierCurveTo(397.5, 188.8, 394.8, 193.0, 401.5, 192.3);
      ctx.bezierCurveTo(404.8, 191.9, 405.8, 190.2, 411.3, 187.8);
      ctx.bezierCurveTo(416.3, 185.7, 420.8, 193.6, 424.2, 189.1);
      ctx.bezierCurveTo(425.9, 186.8, 427.8, 186.2, 430.6, 188.2);
      ctx.bezierCurveTo(433.1, 190.0, 439.4, 182.5, 442.5, 180.7);
      ctx.bezierCurveTo(445.7, 178.9, 453.8, 176.1, 445.8, 180.7);
      ctx.bezierCurveTo(437.3, 185.6, 438.8, 187.2, 440.9, 189.9);
      ctx.bezierCurveTo(441.9, 191.1, 440.5, 192.9, 436.0, 191.8);
      ctx.bezierCurveTo(431.5, 190.6, 424.8, 191.9, 417.6, 193.1);
      ctx.bezierCurveTo(404.5, 195.1, 401.1, 199.2, 395.3, 197.8);
      ctx.bezierCurveTo(386.4, 195.6, 387.8, 190.5, 399.5, 183.6);
      ctx.bezierCurveTo(411.1, 176.9, 405.8, 180.5, 399.9, 186.4);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(409.0, 200.4);
      ctx.bezierCurveTo(412.9, 198.3, 416.5, 195.1, 423.3, 195.1);
      ctx.bezierCurveTo(427.8, 195.1, 440.3, 195.2, 446.5, 193.5);
      ctx.bezierCurveTo(461.3, 189.5, 464.8, 186.5, 467.8, 191.6);
      ctx.bezierCurveTo(470.6, 196.3, 472.6, 197.6, 474.3, 196.8);
      ctx.bezierCurveTo(477.5, 195.1, 478.8, 199.3, 478.8, 199.3);
      ctx.bezierCurveTo(475.5, 205.8, 469.6, 201.7, 467.8, 204.3);
      ctx.bezierCurveTo(466.8, 205.6, 463.9, 207.3, 460.3, 207.8);
      ctx.bezierCurveTo(457.9, 208.1, 458.8, 211.8, 458.8, 211.8);
      ctx.bezierCurveTo(463.5, 212.5, 470.8, 215.8, 475.3, 212.5);
      ctx.bezierCurveTo(479.8, 209.3, 479.8, 213.3, 477.5, 214.5);
      ctx.bezierCurveTo(475.3, 215.6, 479.5, 216.8, 485.3, 215.8);
      ctx.bezierCurveTo(491.0, 214.8, 493.8, 215.8, 494.3, 217.8);
      ctx.bezierCurveTo(494.8, 219.8, 497.5, 219.4, 498.8, 217.8);
      ctx.bezierCurveTo(500.6, 215.3, 505.3, 214.3, 505.9, 216.6);
      ctx.bezierCurveTo(505.9, 216.6, 506.1, 220.3, 515.3, 218.0);
      ctx.bezierCurveTo(525.2, 215.5, 520.5, 209.6, 524.8, 214.3);
      ctx.bezierCurveTo(527.5, 217.3, 525.2, 218.3, 514.8, 222.0);
      ctx.bezierCurveTo(512.4, 222.8, 508.0, 225.0, 506.5, 228.8);
      ctx.bezierCurveTo(505.0, 232.5, 500.5, 230.3, 501.5, 226.8);
      ctx.bezierCurveTo(501.9, 225.3, 498.8, 224.3, 498.8, 224.3);
      ctx.bezierCurveTo(498.3, 226.8, 495.0, 226.2, 492.8, 224.3);
      ctx.bezierCurveTo(491.2, 223.0, 491.0, 222.0, 486.3, 221.0);
      ctx.bezierCurveTo(481.5, 220.0, 474.8, 216.0, 468.5, 216.8);
      ctx.bezierCurveTo(462.3, 217.5, 463.0, 219.5, 457.0, 217.0);
      ctx.bezierCurveTo(451.0, 214.5, 447.0, 214.8, 442.3, 216.5);
      ctx.bezierCurveTo(437.5, 218.3, 436.5, 210.8, 438.5, 209.4);
      ctx.bezierCurveTo(440.5, 208.0, 447.8, 204.0, 440.0, 203.3);
      ctx.bezierCurveTo(432.3, 202.5, 432.8, 208.8, 428.0, 207.8);
      ctx.bezierCurveTo(423.3, 206.8, 423.6, 204.5, 417.6, 206.5);
      ctx.bezierCurveTo(411.5, 208.5, 404.0, 209.6, 400.8, 206.5);
      ctx.bezierCurveTo(396.5, 202.5, 404.5, 202.8, 409.0, 200.4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(450.3, 198.0);
      ctx.bezierCurveTo(450.3, 198.0, 451.9, 194.3, 453.3, 195.1);
      ctx.bezierCurveTo(455.6, 196.4, 451.8, 200.7, 450.3, 200.4);
      ctx.bezierCurveTo(448.8, 200.0, 452.3, 199.3, 450.3, 198.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(459.0, 198.0);
      ctx.bezierCurveTo(457.5, 196.3, 461.0, 194.8, 465.3, 196.3);
      ctx.bezierCurveTo(469.5, 197.8, 468.4, 198.8, 462.7, 200.4);
      ctx.bezierCurveTo(460.5, 201.0, 459.5, 200.8, 459.0, 200.4);
      ctx.bezierCurveTo(458.2, 199.6, 459.0, 198.0, 459.0, 198.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(477.0, 188.9);
      ctx.bezierCurveTo(480.8, 186.8, 483.3, 188.0, 483.3, 190.5);
      ctx.bezierCurveTo(483.3, 193.0, 478.9, 191.8, 476.5, 192.0);
      ctx.bezierCurveTo(469.3, 192.6, 473.0, 188.4, 474.5, 188.9);
      ctx.bezierCurveTo(477.9, 190.2, 477.0, 188.9, 477.0, 188.9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(523.5, 197.7);
      ctx.bezierCurveTo(522.5, 200.2, 528.0, 199.2, 529.0, 197.7);
      ctx.bezierCurveTo(530.0, 196.3, 529.8, 195.8, 531.8, 193.8);
      ctx.bezierCurveTo(533.8, 191.8, 532.3, 197.1, 530.5, 200.8);
      ctx.bezierCurveTo(528.8, 204.5, 524.3, 203.1, 522.3, 200.8);
      ctx.bezierCurveTo(520.3, 198.5, 517.3, 201.4, 519.0, 197.7);
      ctx.bezierCurveTo(520.8, 194.0, 524.8, 194.6, 523.5, 197.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(549.8, 203.1);
      ctx.bezierCurveTo(553.2, 203.2, 551.8, 201.8, 555.3, 204.5);
      ctx.bezierCurveTo(556.8, 205.7, 556.3, 206.8, 558.5, 206.3);
      ctx.bezierCurveTo(560.8, 205.8, 556.5, 208.8, 554.0, 208.8);
      ctx.bezierCurveTo(551.5, 208.8, 552.8, 212.8, 552.8, 212.8);
      ctx.bezierCurveTo(555.8, 213.8, 554.3, 213.4, 558.3, 211.4);
      ctx.bezierCurveTo(562.4, 209.4, 559.0, 214.9, 556.8, 216.3);
      ctx.bezierCurveTo(553.7, 218.0, 548.7, 217.9, 549.8, 215.5);
      ctx.bezierCurveTo(550.8, 213.1, 551.1, 210.7, 547.4, 211.4);
      ctx.bezierCurveTo(543.6, 212.2, 547.6, 206.9, 549.5, 206.8);
      ctx.bezierCurveTo(553.3, 206.4, 555.3, 205.0, 551.1, 204.5);
      ctx.bezierCurveTo(547.7, 204.1, 543.3, 202.9, 549.8, 203.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(555.8, 228.3);
      ctx.bezierCurveTo(556.3, 225.3, 558.0, 227.0, 559.0, 225.3);
      ctx.bezierCurveTo(560.0, 223.5, 563.3, 223.3, 561.8, 225.3);
      ctx.bezierCurveTo(560.3, 227.3, 559.3, 233.2, 557.5, 230.7);
      ctx.bezierCurveTo(555.8, 228.3, 555.8, 228.3, 555.8, 228.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(596.8, 222.3);
      ctx.bezierCurveTo(600.5, 221.5, 605.0, 221.3, 602.5, 218.8);
      ctx.bezierCurveTo(597.8, 214.0, 600.9, 214.8, 603.3, 214.8);
      ctx.bezierCurveTo(605.8, 214.8, 613.3, 216.0, 616.2, 215.1);
      ctx.bezierCurveTo(623.0, 212.8, 623.1, 215.9, 622.4, 217.5);
      ctx.bezierCurveTo(621.4, 219.7, 625.3, 222.3, 626.7, 221.8);
      ctx.bezierCurveTo(628.2, 221.3, 632.8, 223.3, 629.8, 223.8);
      ctx.bezierCurveTo(629.8, 223.8, 625.1, 226.2, 626.8, 227.6);
      ctx.bezierCurveTo(629.0, 229.5, 633.3, 225.2, 633.8, 229.0);
      ctx.bezierCurveTo(634.0, 230.7, 631.2, 232.0, 634.5, 232.5);
      ctx.bezierCurveTo(637.5, 233.0, 638.5, 229.5, 641.8, 233.6);
      ctx.bezierCurveTo(645.3, 238.0, 646.5, 237.9, 646.5, 239.1);
      ctx.bezierCurveTo(646.5, 241.6, 642.8, 235.4, 639.3, 236.0);
      ctx.bezierCurveTo(631.0, 237.5, 629.3, 236.3, 629.5, 232.8);
      ctx.bezierCurveTo(629.8, 229.3, 625.4, 232.4, 622.4, 232.3);
      ctx.bezierCurveTo(618.8, 232.0, 619.5, 227.0, 622.4, 226.4);
      ctx.bezierCurveTo(625.0, 225.8, 624.8, 224.2, 620.8, 223.8);
      ctx.bezierCurveTo(620.8, 223.8, 620.5, 223.3, 620.3, 221.0);
      ctx.bezierCurveTo(620.0, 218.7, 618.9, 218.0, 614.8, 218.5);
      ctx.bezierCurveTo(610.8, 218.9, 602.8, 216.5, 605.8, 219.0);
      ctx.bezierCurveTo(608.8, 221.5, 607.2, 222.1, 604.3, 223.8);
      ctx.bezierCurveTo(601.4, 225.6, 596.8, 222.3, 596.8, 222.3);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(526.3, 220.1);
      ctx.bezierCurveTo(528.7, 221.3, 530.3, 223.8, 527.8, 225.3);
      ctx.bezierCurveTo(526.0, 226.2, 520.2, 227.8, 520.0, 229.8);
      ctx.bezierCurveTo(519.7, 232.9, 518.4, 233.0, 516.8, 233.8);
      ctx.bezierCurveTo(511.5, 236.7, 512.4, 238.0, 516.8, 236.7);
      ctx.bezierCurveTo(520.3, 235.6, 524.5, 236.0, 525.8, 237.9);
      ctx.bezierCurveTo(528.0, 241.0, 536.5, 238.9, 536.0, 236.5);
      ctx.bezierCurveTo(535.5, 234.1, 532.5, 233.0, 528.3, 233.5);
      ctx.bezierCurveTo(524.0, 234.0, 523.8, 231.1, 525.6, 229.8);
      ctx.bezierCurveTo(530.9, 226.1, 530.3, 227.0, 529.3, 230.0);
      ctx.bezierCurveTo(528.8, 231.2, 531.2, 230.9, 532.7, 229.2);
      ctx.bezierCurveTo(534.3, 227.4, 540.8, 223.5, 543.3, 227.0);
      ctx.bezierCurveTo(545.8, 230.5, 541.8, 231.3, 544.8, 233.3);
      ctx.bezierCurveTo(546.5, 234.4, 546.4, 236.0, 545.8, 237.3);
      ctx.bezierCurveTo(545.3, 238.5, 547.6, 235.4, 547.0, 232.7);
      ctx.bezierCurveTo(546.6, 230.7, 547.4, 230.5, 549.3, 229.2);
      ctx.bezierCurveTo(551.7, 227.6, 550.2, 230.7, 553.0, 233.3);
      ctx.bezierCurveTo(556.8, 236.7, 558.9, 237.5, 566.8, 235.0);
      ctx.bezierCurveTo(572.3, 233.2, 578.4, 230.7, 578.7, 234.8);
      ctx.bezierCurveTo(578.8, 237.5, 583.5, 241.2, 586.5, 239.7);
      ctx.bezierCurveTo(589.5, 238.3, 593.4, 238.2, 595.7, 238.5);
      ctx.bezierCurveTo(596.8, 238.7, 598.0, 234.7, 601.3, 235.2);
      ctx.bezierCurveTo(608.2, 236.3, 601.3, 237.5, 603.5, 239.7);
      ctx.bezierCurveTo(603.5, 239.7, 606.0, 239.3, 606.0, 241.4);
      ctx.bezierCurveTo(606.0, 243.5, 603.8, 242.2, 599.5, 243.7);
      ctx.bezierCurveTo(595.3, 245.2, 591.0, 245.2, 599.3, 250.2);
      ctx.bezierCurveTo(602.3, 251.9, 604.3, 250.0, 606.3, 249.5);
      ctx.bezierCurveTo(608.3, 249.0, 611.0, 251.0, 613.5, 251.0);
      ctx.bezierCurveTo(618.3, 251.0, 617.2, 247.5, 614.8, 247.2);
      ctx.bezierCurveTo(608.7, 246.2, 605.7, 244.0, 611.8, 244.5);
      ctx.bezierCurveTo(619.1, 245.1, 623.8, 243.7, 629.1, 246.7);
      ctx.bezierCurveTo(634.3, 249.7, 632.5, 251.2, 643.5, 251.0);
      ctx.bezierCurveTo(652.2, 250.9, 652.0, 248.3, 649.0, 248.0);
      ctx.bezierCurveTo(646.0, 247.8, 645.3, 247.0, 649.5, 246.5);
      ctx.bezierCurveTo(653.8, 246.0, 653.4, 250.9, 651.7, 252.7);
      ctx.bezierCurveTo(649.9, 254.4, 648.3, 255.0, 641.8, 254.8);
      ctx.bezierCurveTo(630.0, 254.3, 624.0, 251.3, 616.3, 253.8);
      ctx.bezierCurveTo(607.2, 256.7, 598.9, 256.2, 594.6, 255.1);
      ctx.bezierCurveTo(590.4, 254.1, 588.5, 256.3, 585.5, 251.7);
      ctx.bezierCurveTo(582.6, 247.2, 582.3, 245.3, 578.3, 245.3);
      ctx.bezierCurveTo(574.3, 245.3, 572.0, 247.3, 566.3, 248.3);
      ctx.bezierCurveTo(560.5, 249.3, 552.0, 250.8, 544.3, 250.0);
      ctx.bezierCurveTo(536.5, 249.3, 537.0, 250.5, 533.8, 252.8);
      ctx.bezierCurveTo(530.5, 255.0, 522.8, 253.8, 519.8, 250.3);
      ctx.bezierCurveTo(516.8, 246.8, 516.3, 248.0, 512.3, 248.8);
      ctx.bezierCurveTo(508.3, 249.5, 495.8, 247.0, 499.5, 242.5);
      ctx.bezierCurveTo(503.3, 238.0, 505.9, 240.1, 508.4, 235.6);
      ctx.bezierCurveTo(509.5, 233.6, 510.7, 231.3, 510.7, 231.3);
      ctx.bezierCurveTo(510.2, 227.6, 509.7, 226.1, 515.5, 227.6);
      ctx.bezierCurveTo(518.5, 228.3, 523.9, 224.5, 523.8, 223.2);
      ctx.bezierCurveTo(523.5, 220.3, 524.4, 219.2, 526.3, 220.1);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(534.4, 240.5);
      ctx.bezierCurveTo(536.2, 239.7, 537.2, 237.8, 539.2, 237.9);
      ctx.bezierCurveTo(540.4, 237.9, 542.1, 241.2, 540.4, 241.2);
      ctx.bezierCurveTo(538.2, 241.3, 541.2, 241.3, 538.7, 242.5);
      ctx.bezierCurveTo(536.0, 243.8, 534.4, 246.8, 533.5, 244.8);
      ctx.bezierCurveTo(532.6, 242.8, 534.4, 240.5, 534.4, 240.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(552.2, 239.7);
      ctx.bezierCurveTo(555.3, 237.7, 556.7, 238.5, 558.9, 239.7);
      ctx.bezierCurveTo(561.2, 241.0, 561.9, 242.9, 566.3, 240.5);
      ctx.bezierCurveTo(570.7, 238.2, 573.4, 242.6, 573.5, 243.5);
      ctx.bezierCurveTo(573.6, 245.0, 572.0, 244.5, 570.7, 244.5);
      ctx.bezierCurveTo(568.0, 244.5, 566.5, 244.3, 566.2, 245.5);
      ctx.bezierCurveTo(565.8, 246.7, 562.0, 248.2, 560.2, 245.5);
      ctx.bezierCurveTo(558.5, 242.8, 558.3, 242.8, 554.2, 243.1);
      ctx.bezierCurveTo(550.0, 243.3, 547.0, 243.0, 552.2, 239.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(614.8, 258.7);
      ctx.bezierCurveTo(617.0, 258.3, 617.9, 256.1, 620.3, 257.3);
      ctx.bezierCurveTo(621.7, 257.9, 625.0, 257.8, 627.0, 257.2);
      ctx.bezierCurveTo(629.0, 256.6, 631.3, 256.8, 632.2, 258.0);
      ctx.bezierCurveTo(633.0, 259.2, 637.4, 257.0, 635.3, 260.2);
      ctx.bezierCurveTo(632.8, 264.0, 631.2, 260.9, 628.0, 264.0);
      ctx.bezierCurveTo(626.3, 265.7, 623.8, 265.5, 623.0, 263.3);
      ctx.bezierCurveTo(623.0, 263.3, 620.8, 264.0, 617.5, 263.7);
      ctx.bezierCurveTo(614.2, 263.3, 607.8, 259.9, 614.8, 258.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(656.5, 250.2);
      ctx.bezierCurveTo(659.0, 248.2, 660.7, 247.3, 662.0, 248.7);
      ctx.bezierCurveTo(663.3, 250.0, 662.8, 251.7, 664.6, 251.0);
      ctx.bezierCurveTo(666.5, 250.4, 673.2, 250.3, 674.5, 251.5);
      ctx.bezierCurveTo(675.8, 252.7, 675.8, 252.3, 679.0, 251.5);
      ctx.bezierCurveTo(682.2, 250.7, 684.5, 249.9, 683.3, 252.2);
      ctx.bezierCurveTo(682.2, 254.5, 676.7, 257.0, 675.3, 256.0);
      ctx.bezierCurveTo(673.6, 254.6, 671.4, 255.5, 668.7, 255.0);
      ctx.bezierCurveTo(664.7, 254.3, 667.0, 257.0, 662.7, 257.0);
      ctx.bezierCurveTo(656.7, 257.0, 659.0, 254.9, 656.5, 256.0);
      ctx.bezierCurveTo(654.0, 257.0, 654.3, 251.8, 656.5, 250.2);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(637.2, 262.0);
      ctx.bezierCurveTo(638.3, 260.2, 640.4, 258.4, 646.5, 259.5);
      ctx.bezierCurveTo(652.1, 260.6, 656.1, 263.5, 663.0, 262.0);
      ctx.bezierCurveTo(666.1, 261.3, 663.5, 258.7, 667.2, 259.3);
      ctx.bezierCurveTo(670.8, 260.0, 672.8, 261.5, 676.3, 262.4);
      ctx.bezierCurveTo(679.8, 263.3, 676.0, 270.0, 671.2, 270.7);
      ctx.bezierCurveTo(664.0, 271.7, 663.8, 266.8, 651.0, 268.0);
      ctx.bezierCurveTo(643.5, 268.7, 644.2, 273.3, 640.5, 267.8);
      ctx.bezierCurveTo(638.6, 264.9, 639.0, 266.0, 636.5, 265.1);
      ctx.bezierCurveTo(634.0, 264.3, 637.2, 262.0, 637.2, 262.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(683.6, 266.5);
      ctx.bezierCurveTo(684.0, 264.5, 682.0, 262.8, 687.8, 263.3);
      ctx.bezierCurveTo(693.7, 263.8, 704.3, 263.2, 706.8, 261.0);
      ctx.bezierCurveTo(709.3, 258.8, 722.7, 252.0, 728.0, 255.3);
      ctx.bezierCurveTo(734.3, 259.1, 735.0, 254.4, 740.2, 259.1);
      ctx.bezierCurveTo(744.3, 262.9, 752.3, 262.2, 753.5, 261.8);
      ctx.bezierCurveTo(757.4, 260.8, 762.6, 260.9, 762.6, 263.3);
      ctx.bezierCurveTo(762.6, 264.2, 754.0, 268.7, 748.2, 268.3);
      ctx.bezierCurveTo(742.3, 268.0, 747.3, 270.0, 740.2, 269.8);
      ctx.bezierCurveTo(733.0, 269.7, 719.0, 266.3, 709.7, 269.8);
      ctx.bezierCurveTo(705.1, 271.6, 694.5, 271.8, 691.2, 270.8);
      ctx.bezierCurveTo(689.3, 270.3, 689.2, 272.5, 683.6, 272.5);
      ctx.bezierCurveTo(677.2, 272.5, 676.5, 273.9, 677.7, 270.8);
      ctx.bezierCurveTo(678.7, 268.3, 683.6, 266.5, 683.6, 266.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // water/Path
      ctx.beginPath();
      ctx.moveTo(683.6, 226.2);
      ctx.bezierCurveTo(682.5, 230.5, 683.6, 231.0, 686.2, 231.2);
      ctx.bezierCurveTo(690.0, 231.4, 689.7, 229.3, 695.5, 231.2);
      ctx.bezierCurveTo(701.3, 233.0, 708.1, 232.5, 707.0, 230.0);
      ctx.bezierCurveTo(706.5, 228.8, 711.2, 226.2, 714.3, 228.7);
      ctx.bezierCurveTo(717.5, 231.2, 716.1, 233.4, 719.0, 234.0);
      ctx.bezierCurveTo(726.5, 235.5, 732.2, 234.6, 737.0, 232.7);
      ctx.bezierCurveTo(741.9, 230.9, 742.7, 231.3, 745.3, 232.3);
      ctx.bezierCurveTo(748.0, 233.3, 748.0, 230.5, 747.2, 230.1);
      ctx.bezierCurveTo(746.3, 229.7, 746.2, 228.5, 752.2, 230.1);
      ctx.bezierCurveTo(757.6, 231.5, 756.5, 229.8, 763.8, 234.0);
      ctx.bezierCurveTo(771.2, 238.2, 777.2, 241.7, 784.8, 241.5);
      ctx.bezierCurveTo(792.5, 241.3, 792.5, 241.3, 792.5, 241.3);
      ctx.lineTo(792.5, 250.1);
      ctx.bezierCurveTo(792.5, 250.1, 784.8, 249.2, 776.3, 251.7);
      ctx.bezierCurveTo(767.8, 254.2, 760.5, 253.6, 754.3, 254.4);
      ctx.bezierCurveTo(748.2, 255.2, 738.3, 254.3, 736.3, 250.5);
      ctx.bezierCurveTo(734.1, 246.3, 734.1, 246.6, 742.2, 247.3);
      ctx.bezierCurveTo(749.7, 248.0, 747.8, 244.7, 751.5, 245.5);
      ctx.bezierCurveTo(759.5, 247.3, 763.6, 238.8, 759.5, 239.3);
      ctx.bezierCurveTo(755.8, 239.8, 757.5, 242.0, 746.8, 241.2);
      ctx.bezierCurveTo(743.5, 240.9, 738.7, 240.8, 735.3, 240.4);
      ctx.bezierCurveTo(732.0, 240.0, 729.1, 240.4, 729.3, 242.2);
      ctx.bezierCurveTo(729.8, 245.7, 734.3, 245.8, 729.8, 247.2);
      ctx.bezierCurveTo(725.3, 248.5, 717.8, 249.0, 715.0, 247.0);
      ctx.bezierCurveTo(712.2, 245.0, 710.3, 245.5, 707.3, 246.3);
      ctx.bezierCurveTo(704.3, 247.2, 700.7, 246.7, 701.7, 243.2);
      ctx.bezierCurveTo(702.3, 240.9, 707.7, 238.0, 701.8, 236.0);
      ctx.bezierCurveTo(697.3, 234.4, 689.0, 235.0, 681.2, 234.8);
      ctx.bezierCurveTo(677.2, 234.7, 673.6, 233.2, 675.5, 229.8);
      ctx.bezierCurveTo(677.3, 226.5, 679.4, 225.0, 682.3, 225.0);
      ctx.bezierCurveTo(685.3, 225.0, 683.6, 226.2, 683.6, 226.2);
      ctx.closePath();
      ctx.fillStyle = empty;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // shadow/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.5, 392.4);
      ctx.bezierCurveTo(11.2, 390.4, 11.8, 391.2, 21.2, 391.2);
      ctx.bezierCurveTo(30.5, 391.2, 40.5, 385.2, 44.5, 379.2);
      ctx.bezierCurveTo(48.5, 373.2, 50.9, 371.2, 58.7, 372.5);
      ctx.bezierCurveTo(66.5, 373.8, 76.5, 370.5, 81.8, 367.2);
      ctx.bezierCurveTo(87.2, 363.8, 91.2, 363.8, 101.2, 367.2);
      ctx.bezierCurveTo(111.2, 370.5, 200.5, 364.7, 200.5, 364.7);
      ctx.lineTo(255.1, 354.5);
      ctx.lineTo(299.8, 354.5);
      ctx.lineTo(333.8, 354.5);
      ctx.bezierCurveTo(333.8, 354.5, 337.2, 371.2, 346.5, 374.2);
      ctx.bezierCurveTo(355.8, 377.2, 359.8, 369.2, 364.5, 374.2);
      ctx.bezierCurveTo(369.2, 379.2, 379.8, 384.5, 389.5, 387.8);
      ctx.bezierCurveTo(399.2, 391.2, 416.6, 409.8, 417.6, 419.8);
      ctx.bezierCurveTo(418.5, 429.8, 419.5, 433.2, 419.3, 441.2);
      ctx.bezierCurveTo(419.2, 449.2, 409.3, 461.8, 404.6, 462.5);
      ctx.bezierCurveTo(399.8, 463.2, 392.0, 461.2, 391.3, 462.5);
      ctx.bezierCurveTo(390.5, 463.8, 384.0, 466.5, 391.3, 469.2);
      ctx.bezierCurveTo(398.5, 471.8, 392.5, 472.5, 385.8, 474.5);
      ctx.bezierCurveTo(379.2, 476.5, 364.3, 485.2, 360.1, 488.5);
      ctx.bezierCurveTo(355.8, 491.8, 338.6, 492.5, 328.9, 491.8);
      ctx.bezierCurveTo(319.2, 491.2, 312.8, 487.8, 304.6, 488.5);
      ctx.bezierCurveTo(296.5, 489.2, 286.6, 492.5, 274.6, 497.2);
      ctx.bezierCurveTo(262.5, 501.8, 224.3, 508.5, 214.4, 507.8);
      ctx.bezierCurveTo(204.5, 507.2, 180.5, 504.5, 189.8, 501.2);
      ctx.bezierCurveTo(199.2, 497.8, 204.5, 491.8, 199.8, 491.2);
      ctx.bezierCurveTo(195.2, 490.5, 179.7, 495.2, 172.1, 496.5);
      ctx.bezierCurveTo(164.5, 497.8, 155.8, 501.8, 146.5, 500.5);
      ctx.bezierCurveTo(137.2, 499.2, 117.2, 501.2, 112.5, 503.2);
      ctx.bezierCurveTo(107.8, 505.2, 76.5, 503.2, 69.8, 501.2);
      ctx.bezierCurveTo(63.2, 499.2, 57.2, 502.5, 50.5, 502.5);
      ctx.bezierCurveTo(43.8, 502.5, 30.5, 503.8, 24.5, 499.2);
      ctx.bezierCurveTo(18.5, 494.5, 9.2, 494.6, 0.5, 493.3);
      ctx.lineTo(0.5, 392.4);
      ctx.closePath();
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      drawPattern(patfill[6]);
      //["umbOut", "umbIn", "sky", "ocean", "sand", "chair", "shade"];
      ctx.stroke();
      ctx.restore();

      // body/body base
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(242.6, 293.8);
      ctx.bezierCurveTo(249.3, 282.1, 275.6, 267.8, 280.3, 265.5);
      ctx.bezierCurveTo(288.8, 261.3, 303.7, 260.3, 307.6, 268.7);
      ctx.bezierCurveTo(310.1, 274.1, 310.7, 278.9, 311.8, 283.5);
      ctx.bezierCurveTo(313.0, 288.4, 303.8, 344.0, 302.1, 349.0);
      ctx.bezierCurveTo(300.5, 354.0, 303.5, 354.5, 303.5, 354.5);
      ctx.bezierCurveTo(303.5, 354.5, 294.0, 371.0, 307.4, 378.8);
      ctx.bezierCurveTo(303.4, 376.3, 302.8, 374.8, 301.5, 372.7);
      ctx.bezierCurveTo(301.3, 368.1, 303.6, 365.9, 306.2, 365.9);
      ctx.bezierCurveTo(307.4, 365.8, 307.8, 367.0, 309.1, 367.2);
      ctx.bezierCurveTo(309.9, 366.0, 312.9, 367.8, 312.3, 368.7);
      ctx.bezierCurveTo(313.0, 370.2, 321.6, 371.1, 322.9, 374.3);
      ctx.bezierCurveTo(326.5, 382.9, 303.7, 399.7, 294.7, 401.3);
      ctx.bezierCurveTo(287.6, 402.7, 277.7, 399.0, 280.7, 390.5);
      ctx.bezierCurveTo(283.5, 382.5, 285.9, 380.0, 280.7, 363.0);
      ctx.bezierCurveTo(262.1, 370.4, 199.8, 380.8, 199.8, 380.8);
      ctx.lineTo(166.6, 277.1);
      ctx.bezierCurveTo(166.6, 277.1, 197.5, 271.3, 208.5, 275.4);
      ctx.bezierCurveTo(219.5, 279.5, 242.6, 293.8, 242.6, 293.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // body/ankle
      ctx.beginPath();
      ctx.moveTo(302.1, 383.0);
      ctx.bezierCurveTo(302.0, 385.2, 300.5, 386.7, 298.7, 386.8);
      ctx.bezierCurveTo(296.8, 387.0, 293.8, 385.0, 295.2, 381.7);
      ctx.bezierCurveTo(296.5, 378.3, 297.3, 375.7, 295.7, 370.8);
      ctx.stroke();

      feet(characterData.sa); //footOption
      //personalize is in heads.js
      eval(personalize.head.cheeky.round + personalize.hair[2] + personalize.hair["bangsides"]);

      // chairMetalunder/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(64.2, 234.5);
      ctx.bezierCurveTo(64.2, 234.5, 62.3, 224.0, 59.5, 214.0);
      ctx.bezierCurveTo(55.6, 200.0, 58.4, 192.2, 70.9, 193.9);
      ctx.bezierCurveTo(79.8, 195.2, 95.2, 195.8, 102.0, 196.9);
      ctx.bezierCurveTo(108.8, 197.9, 147.5, 199.5, 158.2, 200.4);
      ctx.bezierCurveTo(173.0, 201.5, 175.5, 207.9, 181.8, 226.5);
      ctx.bezierCurveTo(188.9, 247.3, 237.5, 378.5, 237.5, 378.5);
      ctx.lineTo(232.6, 388.4);
      ctx.bezierCurveTo(232.6, 388.4, 195.4, 286.9, 172.2, 223.8);
      ctx.bezierCurveTo(167.4, 210.9, 167.2, 208.6, 154.8, 207.8);
      ctx.bezierCurveTo(139.1, 206.9, 77.5, 202.9, 70.8, 202.2);
      ctx.bezierCurveTo(62.2, 201.2, 64.2, 208.3, 66.3, 216.4);
      ctx.bezierCurveTo(68.7, 225.4, 71.2, 232.2, 71.2, 232.2);
      ctx.lineTo(64.2, 234.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // chairMetalunder/Path
      ctx.beginPath();
      ctx.moveTo(314.0, 284.3);
      ctx.bezierCurveTo(315.8, 286.5, 317.5, 290.0, 314.0, 293.5);
      ctx.bezierCurveTo(310.5, 297.0, 267.6, 322.8, 261.1, 327.5);
      ctx.bezierCurveTo(254.6, 332.3, 247.5, 334.9, 241.0, 333.8);
      ctx.bezierCurveTo(236.1, 332.9, 229.2, 337.5, 224.5, 340.0);
      ctx.bezierCurveTo(219.8, 342.5, 215.7, 342.2, 212.8, 338.0);
      ctx.bezierCurveTo(208.9, 332.4, 214.0, 333.8, 214.0, 333.8);
      ctx.lineWidth = thick;
      ctx.stroke();
      ctx.restore();

      // chairFabric/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(73.8, 237.4);
      ctx.bezierCurveTo(70.6, 239.2, 63.9, 241.5, 62.9, 239.2);
      ctx.bezierCurveTo(61.9, 236.9, 58.5, 230.4, 60.6, 228.1);
      ctx.bezierCurveTo(62.7, 225.9, 70.0, 228.4, 71.5, 223.5);
      ctx.bezierCurveTo(73.2, 217.7, 73.1, 206.0, 70.6, 204.8);
      ctx.bezierCurveTo(67.0, 203.0, 67.3, 196.7, 68.8, 193.3);
      ctx.bezierCurveTo(70.4, 189.5, 74.1, 191.9, 79.2, 191.5);
      ctx.bezierCurveTo(82.3, 191.3, 81.6, 192.7, 81.3, 193.5);
      ctx.bezierCurveTo(80.8, 194.7, 79.2, 196.0, 79.2, 197.2);
      ctx.bezierCurveTo(79.2, 198.8, 80.6, 195.3, 81.1, 194.0);
      ctx.bezierCurveTo(81.2, 193.7, 81.5, 193.6, 81.8, 193.6);
      ctx.lineTo(93.8, 194.9);
      ctx.lineTo(144.6, 198.2);
      ctx.bezierCurveTo(145.0, 198.2, 145.3, 198.6, 145.1, 199.0);
      ctx.lineTo(143.6, 203.8);
      ctx.bezierCurveTo(143.6, 203.8, 144.2, 199.2, 147.1, 197.5);
      ctx.bezierCurveTo(149.8, 195.9, 155.3, 196.8, 156.2, 197.0);
      ctx.bezierCurveTo(156.3, 197.0, 156.4, 197.0, 156.5, 197.1);
      ctx.bezierCurveTo(157.1, 197.5, 160.1, 199.6, 158.9, 199.6);
      ctx.bezierCurveTo(152.3, 200.0, 151.4, 209.3, 154.4, 211.3);
      ctx.bezierCurveTo(157.4, 213.3, 156.7, 205.3, 156.7, 208.0);
      ctx.bezierCurveTo(156.5, 216.1, 156.5, 217.3, 156.5, 220.3);
      ctx.bezierCurveTo(156.5, 223.8, 161.8, 236.2, 168.1, 235.3);
      ctx.bezierCurveTo(173.9, 234.6, 175.2, 233.6, 175.1, 233.4);
      ctx.bezierCurveTo(175.1, 233.3, 176.7, 236.2, 181.0, 234.3);
      ctx.bezierCurveTo(185.1, 232.4, 183.7, 227.4, 185.8, 230.9);
      ctx.bezierCurveTo(189.0, 236.2, 188.8, 242.0, 185.8, 243.8);
      ctx.bezierCurveTo(182.9, 245.5, 180.3, 245.8, 179.0, 244.5);
      ctx.bezierCurveTo(173.4, 239.0, 176.8, 242.8, 178.3, 244.8);
      ctx.bezierCurveTo(178.9, 245.7, 179.4, 245.9, 179.6, 245.9);
      ctx.bezierCurveTo(180.0, 245.8, 180.3, 245.9, 180.4, 246.3);
      ctx.bezierCurveTo(183.2, 253.9, 198.7, 296.7, 198.8, 297.9);
      ctx.bezierCurveTo(198.9, 301.6, 197.0, 321.1, 204.2, 325.8);
      ctx.bezierCurveTo(211.4, 330.5, 229.2, 318.0, 237.5, 312.9);
      ctx.bezierCurveTo(245.8, 307.8, 284.8, 283.2, 288.8, 281.2);
      ctx.bezierCurveTo(292.8, 279.2, 296.3, 277.4, 300.6, 280.0);
      ctx.bezierCurveTo(301.6, 280.6, 308.7, 281.1, 309.7, 281.0);
      ctx.bezierCurveTo(312.5, 280.6, 318.1, 280.3, 317.1, 283.5);
      ctx.bezierCurveTo(316.1, 286.7, 310.5, 290.5, 303.5, 295.2);
      ctx.bezierCurveTo(296.5, 299.8, 271.9, 314.2, 263.7, 319.5);
      ctx.bezierCurveTo(255.6, 324.7, 249.1, 329.2, 244.2, 326.9);
      ctx.bezierCurveTo(239.6, 324.8, 232.9, 328.2, 226.8, 331.5);
      ctx.bezierCurveTo(221.7, 334.3, 217.4, 338.4, 212.8, 337.6);
      ctx.bezierCurveTo(212.3, 337.5, 211.8, 337.4, 211.3, 337.2);
      ctx.bezierCurveTo(206.2, 335.2, 207.1, 337.0, 207.1, 337.0);
      ctx.bezierCurveTo(207.1, 337.0, 213.2, 335.3, 212.8, 337.6);
      ctx.bezierCurveTo(212.5, 339.7, 210.8, 357.6, 222.8, 365.4);
      ctx.bezierCurveTo(223.6, 365.9, 230.5, 385.4, 231.5, 385.5);
      ctx.bezierCurveTo(232.7, 385.7, 240.4, 382.7, 238.5, 378.1);
      ctx.bezierCurveTo(236.1, 372.4, 233.5, 366.8, 234.4, 366.9);
      ctx.bezierCurveTo(254.0, 367.7, 265.2, 357.3, 274.3, 322.5);
      ctx.bezierCurveTo(274.6, 321.2, 274.8, 320.4, 275.2, 319.3);
      ctx.bezierCurveTo(275.2, 319.2, 275.3, 319.0, 275.5, 319.0);
      ctx.lineTo(288.9, 310.7);
      ctx.bezierCurveTo(289.1, 310.6, 289.4, 310.6, 289.6, 310.7);
      ctx.bezierCurveTo(299.4, 316.8, 309.3, 343.5, 307.1, 347.0);
      ctx.bezierCurveTo(303.8, 352.3, 280.6, 373.6, 278.2, 375.9);
      ctx.bezierCurveTo(275.9, 378.2, 268.1, 386.6, 259.2, 388.4);
      ctx.bezierCurveTo(247.9, 390.6, 241.7, 394.2, 226.3, 398.5);
      ctx.bezierCurveTo(213.3, 402.1, 184.8, 411.1, 162.3, 409.5);
      ctx.bezierCurveTo(147.4, 408.4, 139.0, 405.9, 124.1, 397.0);
      ctx.bezierCurveTo(124.0, 396.9, 121.3, 395.3, 121.2, 395.2);
      ctx.bezierCurveTo(120.3, 394.2, 109.9, 383.0, 109.9, 383.0);
      ctx.bezierCurveTo(109.8, 382.9, 107.8, 382.5, 99.5, 363.8);
      ctx.bezierCurveTo(91.2, 345.2, 83.5, 315.4, 76.3, 276.3);
      ctx.bezierCurveTo(74.2, 265.2, 72.4, 260.4, 71.3, 250.9);
      ctx.bezierCurveTo(71.2, 250.3, 71.3, 242.7, 71.4, 240.2);
      ctx.bezierCurveTo(71.4, 239.8, 71.0, 239.5, 70.6, 239.5);
      ctx.lineTo(68.4, 240.0);
      ctx.lineTo(73.8, 237.4);
      ctx.closePath();
      //ctx.fillStyle = "rgb(255, 255, 255)";
      drawPattern(patfill[5]);
      //ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // chairFabric/Path
      ctx.beginPath();
      ctx.moveTo(73.3, 228.0);
      ctx.lineTo(74.2, 232.8);
      ctx.lineWidth = thin;
      ctx.stroke();

      // chairFabric/Path
      ctx.beginPath();
      ctx.moveTo(78.0, 204.3);
      ctx.lineTo(86.5, 205.2);
      ctx.stroke();

      // chairFabric/Path
      ctx.beginPath();
      ctx.moveTo(125.0, 209.5);
      ctx.lineTo(147.7, 211.8);
      ctx.stroke();
      ctx.restore();

      // chairMetalCopy/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(70.8, 238.8);
      ctx.bezierCurveTo(70.8, 238.8, 70.4, 251.2, 70.8, 256.2);
      ctx.bezierCurveTo(71.3, 261.7, 71.7, 265.0, 76.5, 265.2);
      ctx.bezierCurveTo(85.0, 265.5, 151.8, 273.3, 157.8, 273.5);
      ctx.bezierCurveTo(166.0, 273.8, 167.7, 270.0, 171.8, 262.8);
      ctx.bezierCurveTo(175.8, 255.8, 178.6, 249.1, 180.6, 244.8);
      ctx.bezierCurveTo(182.6, 245.1, 183.2, 245.0, 183.2, 245.0);
      ctx.lineTo(186.8, 243.6);
      ctx.bezierCurveTo(186.8, 243.6, 178.1, 264.6, 174.8, 271.2);
      ctx.bezierCurveTo(170.8, 279.4, 170.0, 282.8, 156.5, 282.5);
      ctx.bezierCurveTo(141.7, 282.2, 85.3, 274.2, 78.2, 273.6);
      ctx.bezierCurveTo(66.5, 272.5, 66.6, 268.5, 66.5, 262.8);
      ctx.bezierCurveTo(66.2, 252.1, 67.2, 239.9, 67.2, 239.9);
      ctx.lineTo(70.8, 238.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // chairMetalCopy/Path
      ctx.beginPath();
      ctx.moveTo(228.5, 394.8);
      ctx.bezierCurveTo(233.8, 395.3, 304.8, 394.8, 312.5, 393.5);
      ctx.bezierCurveTo(320.3, 392.3, 323.5, 391.0, 317.0, 376.8);
      ctx.bezierCurveTo(310.5, 362.5, 287.8, 313.3, 286.0, 311.8);
      ctx.lineTo(293.3, 307.2);
      ctx.bezierCurveTo(293.3, 307.2, 297.8, 315.0, 302.8, 323.8);
      ctx.bezierCurveTo(307.8, 332.5, 330.0, 381.0, 330.8, 385.3);
      ctx.bezierCurveTo(331.5, 389.5, 335.8, 402.3, 322.0, 402.4);
      ctx.bezierCurveTo(311.2, 402.5, 233.4, 405.3, 227.0, 403.5);
      ctx.bezierCurveTo(220.6, 401.7, 228.5, 394.8, 228.5, 394.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // chairMetalCopy/Path
      ctx.beginPath();
      ctx.moveTo(114.0, 379.5);
      ctx.bezierCurveTo(108.8, 386.5, 107.3, 388.4, 95.5, 405.5);
      ctx.bezierCurveTo(93.5, 408.5, 91.8, 409.8, 97.0, 412.8);
      ctx.bezierCurveTo(103.3, 416.4, 171.3, 437.5, 181.8, 440.5);
      ctx.bezierCurveTo(192.3, 443.5, 196.5, 443.5, 200.8, 437.0);
      ctx.bezierCurveTo(205.0, 430.5, 261.1, 327.5, 261.1, 327.5);
      ctx.lineTo(275.5, 318.3);
      ctx.bezierCurveTo(275.5, 318.3, 247.9, 369.5, 217.4, 425.6);
      ctx.bezierCurveTo(206.0, 446.7, 205.3, 456.0, 188.3, 451.8);
      ctx.bezierCurveTo(171.3, 447.5, 90.5, 422.0, 85.5, 419.5);
      ctx.bezierCurveTo(80.5, 417.0, 79.2, 415.8, 88.3, 400.8);
      ctx.bezierCurveTo(98.8, 383.3, 106.8, 371.8, 106.8, 371.8);
      ctx.lineTo(114.0, 379.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      hands(handOption);

      arms(characterData.ar); //armWeight

      // sand/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(133.5, 415.5);
      ctx.bezierCurveTo(139.5, 414.5, 154.5, 410.4, 154.2, 413.2);
      ctx.bezierCurveTo(153.7, 417.5, 152.3, 419.9, 159.3, 417.0);
      ctx.bezierCurveTo(163.9, 415.0, 167.3, 411.8, 178.8, 413.2);
      ctx.bezierCurveTo(189.3, 414.5, 187.1, 413.0, 190.0, 412.0);
      ctx.bezierCurveTo(193.0, 410.9, 195.2, 411.6, 195.5, 414.2);
      ctx.bezierCurveTo(195.8, 416.8, 196.5, 414.1, 198.8, 414.6);
      ctx.bezierCurveTo(201.2, 415.2, 198.8, 420.2, 195.2, 420.2);
      ctx.bezierCurveTo(191.5, 420.2, 190.8, 423.8, 193.5, 425.5);
      ctx.bezierCurveTo(196.2, 427.2, 199.8, 430.2, 197.2, 433.5);
      ctx.bezierCurveTo(194.5, 436.8, 193.8, 443.6, 181.2, 440.2);
      ctx.bezierCurveTo(171.1, 437.4, 171.6, 437.9, 178.3, 435.3);
      ctx.bezierCurveTo(184.9, 432.6, 187.8, 432.0, 179.2, 428.5);
      ctx.bezierCurveTo(172.5, 425.8, 177.5, 420.0, 164.8, 426.6);
      ctx.bezierCurveTo(156.4, 430.9, 159.5, 429.4, 159.5, 429.4);
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(159.0, 427.1);
      ctx.bezierCurveTo(155.3, 425.8, 157.7, 423.1, 161.0, 423.8);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(182.3, 420.5);
      ctx.bezierCurveTo(178.7, 422.0, 185.0, 415.8, 186.0, 417.3);
      ctx.bezierCurveTo(187.0, 418.8, 188.8, 419.3, 187.0, 420.5);
      ctx.bezierCurveTo(185.3, 421.8, 185.8, 419.0, 182.3, 420.5);
      ctx.closePath();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(212.3, 438.8);
      ctx.bezierCurveTo(215.5, 439.3, 217.3, 442.0, 215.3, 442.7);
      ctx.bezierCurveTo(213.3, 443.5, 212.1, 444.5, 214.2, 444.8);
      ctx.bezierCurveTo(216.3, 445.0, 221.3, 447.5, 217.3, 448.3);
      ctx.bezierCurveTo(213.3, 449.0, 210.5, 450.3, 203.5, 449.8);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(278.5, 408.8);
      ctx.bezierCurveTo(276.8, 407.5, 278.0, 407.2, 280.3, 406.5);
      ctx.bezierCurveTo(282.5, 405.8, 287.3, 408.3, 284.8, 408.8);
      ctx.bezierCurveTo(282.3, 409.3, 278.5, 408.8, 278.5, 408.8);
      ctx.closePath();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(255.3, 399.7);
      ctx.bezierCurveTo(257.8, 395.0, 268.8, 386.9, 279.5, 392.3);
      ctx.bezierCurveTo(281.0, 393.0, 279.3, 392.0, 276.5, 396.8);
      ctx.bezierCurveTo(274.9, 399.4, 276.5, 396.8, 276.5, 396.8);
      ctx.bezierCurveTo(283.3, 390.0, 294.0, 385.3, 306.0, 394.0);
      ctx.bezierCurveTo(308.8, 396.1, 307.1, 392.7, 301.8, 395.5);
      ctx.bezierCurveTo(298.6, 397.1, 298.3, 402.3, 302.5, 405.3);
      ctx.bezierCurveTo(306.8, 408.3, 302.3, 411.3, 293.3, 413.8);
      ctx.bezierCurveTo(293.3, 413.8, 264.5, 414.2, 257.9, 410.7);
      ctx.bezierCurveTo(251.2, 407.2, 255.3, 401.3, 255.3, 401.3);
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(255.3, 399.7);
      ctx.bezierCurveTo(257.8, 395.0, 268.8, 386.9, 279.5, 392.3);
      ctx.bezierCurveTo(281.0, 393.0, 279.3, 392.0, 276.5, 396.8);
      ctx.bezierCurveTo(274.9, 399.4, 276.5, 396.8, 276.5, 396.8);
      ctx.bezierCurveTo(283.3, 390.0, 294.0, 385.3, 306.0, 394.0);
      ctx.bezierCurveTo(308.8, 396.1, 307.1, 392.7, 301.8, 395.5);
      ctx.bezierCurveTo(298.6, 397.1, 298.3, 402.3, 302.5, 405.3);
      ctx.bezierCurveTo(306.8, 408.3, 302.3, 411.3, 293.3, 413.8);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(243.2, 412.5);
      ctx.bezierCurveTo(240.4, 409.3, 248.3, 405.6, 249.3, 403.9);
      ctx.bezierCurveTo(250.3, 402.3, 251.8, 399.3, 258.8, 399.8);
      ctx.bezierCurveTo(265.8, 400.3, 264.8, 402.6, 267.3, 403.9);
      ctx.bezierCurveTo(269.8, 405.3, 273.3, 408.3, 272.3, 410.3);
      ctx.bezierCurveTo(271.3, 412.3, 268.8, 412.5, 265.3, 411.5);
      ctx.bezierCurveTo(261.8, 410.5, 269.0, 414.8, 261.5, 415.3);
      ctx.bezierCurveTo(254.0, 415.8, 246.4, 416.3, 243.2, 412.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(244.8, 406.3);
      ctx.bezierCurveTo(242.0, 406.7, 239.5, 406.8, 240.0, 404.8);
      ctx.bezierCurveTo(240.5, 402.8, 241.8, 400.8, 243.5, 401.5);
      ctx.bezierCurveTo(245.3, 402.3, 248.5, 405.7, 244.8, 406.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(161.0, 444.3);
      ctx.bezierCurveTo(162.0, 442.2, 162.2, 440.4, 164.0, 441.1);
      ctx.bezierCurveTo(165.8, 441.8, 167.3, 446.8, 165.3, 447.2);
      ctx.bezierCurveTo(163.3, 447.5, 159.6, 447.2, 161.0, 444.3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(73.5, 417.8);
      ctx.bezierCurveTo(73.5, 413.2, 76.8, 407.6, 81.0, 404.7);
      ctx.bezierCurveTo(83.8, 402.7, 85.2, 405.0, 84.7, 407.2);
      ctx.bezierCurveTo(84.2, 409.3, 84.6, 412.2, 86.3, 411.5);
      ctx.bezierCurveTo(89.0, 410.3, 89.9, 412.1, 89.7, 414.8);
      ctx.bezierCurveTo(89.5, 417.0, 90.3, 418.1, 91.8, 417.8);
      ctx.bezierCurveTo(93.3, 417.5, 95.9, 418.7, 94.2, 421.7);
      ctx.bezierCurveTo(93.0, 423.7, 79.1, 422.9, 74.2, 421.7);
      ctx.bezierCurveTo(71.8, 421.1, 73.5, 417.8, 73.5, 417.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(71.0, 422.2);
      ctx.bezierCurveTo(71.3, 419.8, 79.2, 415.7, 78.8, 420.8);
      ctx.bezierCurveTo(78.6, 423.7, 78.7, 423.7, 76.2, 423.7);
      ctx.bezierCurveTo(72.0, 423.7, 70.8, 423.7, 71.0, 422.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(174.3, 455.8);
      ctx.bezierCurveTo(171.0, 454.0, 169.8, 449.1, 172.5, 447.3);
      ctx.bezierCurveTo(175.3, 445.5, 178.5, 446.5, 178.8, 444.1);
      ctx.bezierCurveTo(179.0, 441.8, 184.8, 441.0, 186.8, 444.1);
      ctx.bezierCurveTo(188.8, 447.3, 184.5, 450.5, 189.3, 451.8);
      ctx.bezierCurveTo(194.0, 453.0, 191.5, 455.3, 189.3, 455.8);
      ctx.bezierCurveTo(187.0, 456.3, 174.3, 455.8, 174.3, 455.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(68.0, 449.9);
      ctx.bezierCurveTo(73.3, 431.0, 107.8, 411.5, 125.0, 413.8);
      ctx.bezierCurveTo(141.2, 415.9, 146.8, 419.7, 151.5, 427.1);
      ctx.bezierCurveTo(152.9, 429.3, 150.6, 426.5, 154.0, 427.1);
      ctx.bezierCurveTo(160.0, 428.2, 159.1, 431.7, 159.1, 431.7);
      ctx.bezierCurveTo(161.0, 430.5, 168.7, 428.3, 171.0, 434.8);
      ctx.bezierCurveTo(171.8, 437.0, 170.7, 434.9, 163.5, 434.9);
      ctx.bezierCurveTo(156.0, 434.9, 157.1, 445.8, 163.5, 449.0);
      ctx.bezierCurveTo(166.1, 450.3, 175.5, 457.5, 171.0, 459.5);
      ctx.bezierCurveTo(166.5, 461.5, 163.5, 466.3, 154.0, 461.3);
      ctx.bezierCurveTo(144.5, 456.3, 139.2, 456.2, 133.5, 459.5);
      ctx.bezierCurveTo(124.7, 464.5, 99.9, 469.4, 96.2, 465.6);
      ctx.bezierCurveTo(93.2, 462.5, 97.8, 466.2, 86.5, 464.8);
      ctx.bezierCurveTo(82.0, 464.2, 53.9, 462.1, 65.3, 449.9);
      ctx.bezierCurveTo(70.4, 444.3, 68.0, 449.9, 68.0, 449.9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(83.8, 432.2);
      ctx.bezierCurveTo(86.3, 436.5, 87.7, 436.3, 91.8, 433.8);
      ctx.bezierCurveTo(96.0, 431.3, 104.2, 433.2, 108.2, 436.3);
      ctx.bezierCurveTo(112.2, 439.5, 114.5, 438.2, 116.4, 436.3);
      ctx.bezierCurveTo(118.4, 434.5, 119.0, 433.7, 123.0, 437.2);
      ctx.bezierCurveTo(125.5, 439.3, 132.2, 438.2, 134.2, 432.2);
      ctx.bezierCurveTo(135.7, 427.4, 135.2, 428.3, 137.2, 428.2);
      ctx.bezierCurveTo(139.2, 428.0, 147.9, 426.2, 146.2, 422.9);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(86.8, 441.1);
      ctx.bezierCurveTo(87.8, 445.0, 92.2, 449.9, 96.7, 447.3);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(72.9, 444.6);
      ctx.bezierCurveTo(72.8, 448.0, 74.2, 450.0, 75.7, 449.0);
      ctx.bezierCurveTo(77.2, 448.0, 79.0, 447.8, 78.8, 452.8);
      ctx.bezierCurveTo(78.7, 457.8, 88.5, 461.8, 94.8, 461.0);
      ctx.bezierCurveTo(101.0, 460.2, 102.2, 457.2, 107.3, 459.0);
      ctx.bezierCurveTo(112.5, 460.8, 121.7, 462.9, 124.0, 456.0);
      ctx.bezierCurveTo(126.3, 449.0, 126.8, 446.3, 129.2, 446.0);
      ctx.bezierCurveTo(131.5, 445.7, 131.5, 446.9, 133.5, 448.0);
      ctx.bezierCurveTo(135.5, 449.2, 141.2, 452.9, 144.8, 448.0);
      ctx.bezierCurveTo(148.5, 443.2, 146.0, 439.3, 147.7, 435.7);
      ctx.bezierCurveTo(149.3, 432.0, 154.0, 428.5, 157.1, 429.1);
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(121.7, 415.7);
      ctx.bezierCurveTo(118.0, 417.2, 123.7, 411.8, 125.2, 411.5);
      ctx.bezierCurveTo(126.7, 411.2, 127.3, 412.6, 128.8, 413.6);
      ctx.bezierCurveTo(130.3, 414.6, 131.3, 417.4, 130.2, 417.0);
      ctx.bezierCurveTo(129.0, 416.7, 123.3, 415.0, 121.7, 415.7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(134.5, 444.1);
      ctx.bezierCurveTo(135.5, 441.3, 136.7, 440.1, 138.3, 442.1);
      ctx.bezierCurveTo(140.0, 444.0, 140.5, 444.6, 138.3, 444.6);
      ctx.bezierCurveTo(136.2, 444.5, 134.5, 444.1, 134.5, 444.1);
      ctx.closePath();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(106.3, 469.0);
      ctx.bezierCurveTo(105.3, 465.0, 108.1, 461.9, 109.9, 459.8);
      ctx.bezierCurveTo(111.7, 457.7, 116.9, 454.2, 120.4, 461.1);
      ctx.bezierCurveTo(124.0, 468.0, 121.7, 465.6, 118.8, 467.0);
      ctx.bezierCurveTo(116.0, 468.3, 113.0, 470.3, 109.7, 469.7);
      ctx.bezierCurveTo(106.3, 469.0, 106.3, 469.0, 106.3, 469.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(93.0, 436.5);
      ctx.bezierCurveTo(95.7, 432.1, 100.3, 414.2, 116.4, 416.8);
      ctx.bezierCurveTo(132.6, 419.4, 117.3, 428.8, 111.5, 433.0);
      ctx.bezierCurveTo(105.7, 437.2, 99.3, 440.5, 96.7, 441.0);
      ctx.bezierCurveTo(94.0, 441.5, 90.8, 440.0, 93.0, 436.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // sand/Path
      ctx.beginPath();
      ctx.moveTo(96.7, 431.3);
      ctx.bezierCurveTo(97.3, 425.0, 114.2, 412.1, 121.5, 423.7);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // umbrella/Path - inner umbrella
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.5, 14.2);
      ctx.lineTo(408.0, 25.8);
      ctx.bezierCurveTo(408.0, 25.8, 406.2, 62.2, 407.2, 66.8);
      ctx.bezierCurveTo(408.3, 71.4, 416.2, 83.4, 405.8, 84.2);
      ctx.bezierCurveTo(397.8, 84.8, 377.1, 84.4, 371.5, 87.0);
      ctx.bezierCurveTo(364.0, 90.5, 321.2, 91.9, 313.9, 92.5);
      ctx.bezierCurveTo(304.5, 93.4, 301.0, 93.4, 299.8, 82.0);
      ctx.bezierCurveTo(298.9, 74.0, 299.5, 67.3, 291.0, 69.0);
      ctx.bezierCurveTo(287.1, 69.8, 287.3, 81.7, 287.3, 87.0);
      ctx.bezierCurveTo(287.2, 94.2, 286.5, 97.5, 275.5, 97.0);
      ctx.bezierCurveTo(267.5, 96.6, 229.1, 99.7, 220.0, 99.4);
      ctx.bezierCurveTo(211.0, 99.0, 187.9, 101.8, 180.5, 102.1);
      ctx.bezierCurveTo(162.3, 103.0, 150.5, 105.0, 150.5, 96.5);
      ctx.bezierCurveTo(150.5, 88.0, 144.8, 70.6, 136.3, 71.5);
      ctx.bezierCurveTo(131.8, 72.0, 133.3, 85.1, 134.3, 93.0);
      ctx.bezierCurveTo(135.5, 103.4, 131.3, 104.3, 114.5, 103.6);
      ctx.bezierCurveTo(104.5, 103.3, 69.5, 108.3, 0.5, 105.9);
      ctx.lineTo(0.5, 14.2);
      ctx.closePath();
      //ctx.fillStyle =  "pink";
      drawPattern(patfill[1]);
      //ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // umbrella/Path - pole
      ctx.beginPath();
      ctx.moveTo(91.8, 62.9);
      ctx.lineTo(102.5, 438.2);
      ctx.lineTo(116.4, 429.2);
      ctx.bezierCurveTo(116.4, 424.1, 116.6, 424.1, 104.2, 55.4);
      ctx.lineTo(91.8, 62.9);
      ctx.closePath();
      ctx.fillStyle =  "white";
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(121.8, 37.3);
      ctx.bezierCurveTo(129.0, 45.0, 136.7, 58.8, 136.3, 71.5);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(372.5, 34.0);
      ctx.bezierCurveTo(386.2, 35.8, 396.7, 36.5, 404.6, 50.5);
      ctx.stroke();

      // umbrella/Path - outer umbrella
      ctx.beginPath();
      ctx.moveTo(361.8, 0.5);
      ctx.bezierCurveTo(372.1, 1.8, 390.3, 8.3, 408.5, 24.8);
      ctx.bezierCurveTo(410.0, 26.2, 409.7, 28.8, 409.7, 28.8);
      ctx.lineTo(408.2, 34.7);
      ctx.bezierCurveTo(422.8, 43.5, 422.6, 45.8, 422.5, 52.2);
      ctx.bezierCurveTo(422.3, 62.7, 428.2, 70.7, 428.2, 75.3);
      ctx.bezierCurveTo(428.2, 80.0, 429.5, 83.2, 420.5, 77.0);
      ctx.bezierCurveTo(409.0, 69.1, 402.3, 66.2, 403.2, 59.8);
      ctx.bezierCurveTo(404.2, 52.3, 404.5, 49.8, 405.3, 42.2);
      ctx.bezierCurveTo(406.3, 33.2, 409.1, 29.5, 404.6, 28.6);
      ctx.bezierCurveTo(396.0, 27.0, 390.7, 41.8, 389.7, 51.8);
      ctx.bezierCurveTo(388.6, 61.8, 390.8, 69.0, 379.8, 69.0);
      ctx.bezierCurveTo(369.5, 69.0, 281.5, 61.5, 264.2, 63.2);
      ctx.bezierCurveTo(246.8, 64.8, 176.8, 67.5, 162.2, 67.8);
      ctx.bezierCurveTo(147.5, 68.2, 137.8, 71.5, 138.8, 58.5);
      ctx.bezierCurveTo(139.8, 45.5, 143.8, 20.8, 133.5, 19.5);
      ctx.bezierCurveTo(123.2, 18.2, 125.5, 52.2, 125.0, 58.5);
      ctx.bezierCurveTo(124.5, 64.8, 127.8, 67.5, 114.8, 67.8);
      ctx.bezierCurveTo(101.8, 68.2, 15.8, 69.8, 0.5, 78.5);
      ctx.lineTo(0.5, 0.5);
      ctx.lineTo(361.8, 0.5);
      ctx.closePath();
      //ctx.fillStyle =  "pink";
      drawPattern(patfill[0]);
      //ctx.fill();
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(410.0, 64.0);
      ctx.bezierCurveTo(412.8, 66.8, 418.8, 70.2, 421.0, 70.8);
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(393.8, 26.5);
      ctx.bezierCurveTo(390.5, 29.0, 389.6, 32.5, 388.5, 36.0);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(386.3, 41.0);
      ctx.bezierCurveTo(384.8, 44.0, 383.5, 50.5, 383.3, 53.0);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(381.3, 64.0);
      ctx.bezierCurveTo(374.0, 63.3, 296.0, 60.0, 283.5, 60.5);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(226.3, 62.2);
      ctx.bezierCurveTo(214.8, 61.5, 160.8, 59.4, 153.8, 60.4);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(145.8, 61.2);
      ctx.bezierCurveTo(146.5, 51.8, 147.0, 26.3, 145.8, 22.0);
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(128.0, 2.8);
      ctx.bezierCurveTo(130.0, 5.8, 135.0, 18.0, 133.5, 19.5);
      ctx.strokeStyle = dark;
      ctx.stroke();

      // umbrella/Path
      ctx.beginPath();
      ctx.moveTo(116.5, 25.3);
      ctx.bezierCurveTo(114.8, 31.8, 113.3, 51.0, 113.5, 56.8);
      ctx.bezierCurveTo(113.8, 62.5, 113.8, 62.5, 113.8, 62.5);
      ctx.strokeStyle = light;
      ctx.stroke();
      ctx.restore();

      // table/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(300.2, 425.6);
      ctx.bezierCurveTo(300.2, 421.0, 305.7, 416.8, 311.3, 413.8);
      ctx.bezierCurveTo(318.3, 410.0, 337.3, 409.7, 345.5, 412.8);
      ctx.bezierCurveTo(354.0, 416.1, 365.8, 423.5, 355.8, 429.8);
      ctx.bezierCurveTo(346.5, 435.5, 333.0, 439.5, 320.8, 438.0);
      ctx.bezierCurveTo(306.8, 436.3, 300.2, 431.5, 300.2, 425.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(360.5, 423.6);
      ctx.bezierCurveTo(360.2, 422.7, 362.1, 431.2, 360.9, 433.5);
      ctx.bezierCurveTo(358.5, 438.0, 346.7, 444.7, 330.7, 445.7);
      ctx.bezierCurveTo(315.3, 446.6, 303.7, 441.5, 300.2, 437.5);
      ctx.bezierCurveTo(299.1, 436.3, 297.4, 428.7, 299.3, 425.3);
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(323.3, 359.5);
      ctx.bezierCurveTo(323.3, 359.5, 323.3, 417.0, 323.3, 419.7);
      ctx.bezierCurveTo(323.3, 427.7, 336.3, 427.0, 336.7, 421.0);
      ctx.bezierCurveTo(337.0, 415.0, 338.5, 358.3, 338.5, 358.3);
      ctx.lineTo(323.3, 359.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(323.3, 407.6);
      ctx.bezierCurveTo(325.5, 413.8, 333.7, 417.0, 337.2, 406.4);
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(323.3, 422.2);
      ctx.bezierCurveTo(318.7, 422.3, 317.1, 424.0, 316.4, 421.5);
      ctx.bezierCurveTo(315.8, 419.0, 316.7, 419.8, 318.2, 419.3);
      ctx.bezierCurveTo(319.7, 418.8, 318.2, 415.7, 322.5, 415.6);
      ctx.strokeStyle = light;
      ctx.lineWidth = thin;
      ctx.stroke();

      // table/Compound Path
      ctx.beginPath();

      // table/Compound Path/Path
      ctx.moveTo(338.5, 438.3);
      ctx.bezierCurveTo(335.3, 433.8, 330.3, 434.0, 328.8, 434.6);
      ctx.bezierCurveTo(327.3, 435.3, 327.0, 434.3, 327.3, 431.8);
      ctx.bezierCurveTo(327.7, 429.3, 322.7, 426.7, 319.8, 428.0);
      ctx.bezierCurveTo(316.9, 429.3, 313.0, 427.2, 311.3, 426.8);
      ctx.bezierCurveTo(309.7, 426.5, 310.7, 424.2, 312.5, 422.9);
      ctx.bezierCurveTo(314.3, 421.6, 314.9, 421.4, 314.2, 419.2);
      ctx.bezierCurveTo(310.6, 408.4, 298.8, 413.1, 297.1, 417.1);
      ctx.bezierCurveTo(295.3, 421.4, 294.9, 419.3, 290.2, 419.2);
      ctx.bezierCurveTo(283.5, 419.1, 277.8, 423.7, 274.5, 428.0);
      ctx.bezierCurveTo(274.5, 428.0, 270.7, 431.9, 273.4, 432.6);
      ctx.bezierCurveTo(276.0, 433.3, 261.9, 442.1, 271.4, 448.6);
      ctx.bezierCurveTo(279.9, 454.5, 285.2, 449.7, 302.3, 460.0);
      ctx.bezierCurveTo(307.4, 463.0, 309.7, 459.2, 313.3, 455.5);
      ctx.bezierCurveTo(317.0, 451.8, 336.0, 451.0, 340.2, 449.2);
      ctx.bezierCurveTo(344.3, 447.3, 341.7, 442.8, 338.5, 438.3);
      ctx.closePath();

      // table/Compound Path/Path
      ctx.moveTo(301.0, 440.0);
      ctx.lineTo(300.9, 438.8);
      ctx.bezierCurveTo(298.6, 433.7, 297.2, 426.5, 300.2, 424.1);
      ctx.bezierCurveTo(301.1, 423.3, 299.7, 432.1, 315.0, 439.7);
      ctx.bezierCurveTo(327.2, 445.7, 312.1, 440.5, 301.0, 440.0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(335.4, 431.8);
      ctx.bezierCurveTo(333.1, 430.4, 333.8, 429.8, 334.8, 429.0);
      ctx.bezierCurveTo(335.8, 428.3, 337.8, 427.9, 338.0, 429.0);
      ctx.bezierCurveTo(338.3, 430.1, 339.1, 431.9, 338.0, 431.8);
      ctx.bezierCurveTo(336.9, 431.6, 335.4, 431.8, 335.4, 431.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(348.6, 419.2);
      ctx.bezierCurveTo(346.8, 417.6, 346.5, 416.0, 348.6, 415.6);
      ctx.bezierCurveTo(350.8, 415.2, 353.8, 413.1, 354.0, 417.2);
      ctx.bezierCurveTo(354.1, 419.7, 351.6, 419.6, 350.1, 419.2);
      ctx.bezierCurveTo(348.6, 418.9, 348.6, 419.2, 348.6, 419.2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(340.0, 409.8);
      ctx.bezierCurveTo(343.8, 409.0, 346.8, 408.0, 349.9, 408.4);
      ctx.bezierCurveTo(354.8, 408.9, 347.9, 411.0, 350.6, 411.5);
      ctx.bezierCurveTo(353.2, 412.0, 353.6, 411.3, 355.8, 409.8);
      ctx.bezierCurveTo(357.9, 408.3, 368.2, 408.8, 367.3, 413.8);
      ctx.bezierCurveTo(366.8, 416.3, 370.4, 417.0, 371.6, 416.1);
      ctx.bezierCurveTo(373.9, 414.4, 379.0, 419.9, 375.6, 421.5);
      ctx.bezierCurveTo(372.3, 423.1, 366.5, 428.9, 362.4, 429.1);
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(328.0, 364.8);
      ctx.bezierCurveTo(347.5, 365.5, 369.2, 360.4, 375.8, 356.8);
      ctx.bezierCurveTo(386.8, 350.7, 382.6, 340.8, 383.5, 337.8);
      ctx.bezierCurveTo(384.3, 334.8, 285.5, 338.3, 282.3, 337.8);
      ctx.bezierCurveTo(281.0, 337.5, 281.5, 343.8, 281.6, 348.0);
      ctx.bezierCurveTo(281.6, 348.0, 287.0, 363.3, 328.0, 364.8);
      ctx.closePath();
      ctx.fill();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(282.3, 337.8);
      ctx.bezierCurveTo(281.3, 328.3, 307.3, 318.4, 329.9, 318.3);
      ctx.bezierCurveTo(352.8, 318.2, 376.8, 320.8, 382.8, 334.3);
      ctx.bezierCurveTo(389.6, 349.7, 346.0, 355.8, 329.9, 355.5);
      ctx.bezierCurveTo(313.8, 355.3, 283.6, 350.4, 282.3, 337.8);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = dark;
      ctx.lineWidth = thick;
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(284.7, 350.7);
      ctx.bezierCurveTo(283.2, 349.0, 281.5, 349.5, 281.6, 346.2);
      ctx.bezierCurveTo(281.7, 341.7, 281.6, 337.6, 281.6, 337.6);
      ctx.fill();
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(310.0, 320.9);
      ctx.bezierCurveTo(310.0, 320.9, 299.4, 331.6, 296.6, 333.5);
      ctx.bezierCurveTo(293.8, 335.4, 284.7, 341.7, 284.7, 343.1);
      ctx.bezierCurveTo(284.7, 343.9, 284.6, 352.1, 284.7, 352.5);
      ctx.bezierCurveTo(284.8, 352.9, 293.3, 359.2, 294.1, 358.8);
      ctx.bezierCurveTo(294.8, 358.3, 294.7, 352.5, 294.7, 350.7);
      ctx.bezierCurveTo(294.7, 348.9, 294.8, 349.5, 296.8, 347.4);
      ctx.bezierCurveTo(298.0, 346.0, 324.3, 321.5, 328.6, 319.7);
      ctx.bezierCurveTo(332.8, 317.8, 330.0, 319.3, 326.8, 321.8);
      ctx.bezierCurveTo(323.7, 324.4, 296.3, 349.5, 295.9, 350.0);
      ctx.bezierCurveTo(295.3, 351.0, 295.5, 357.0, 295.1, 358.7);
      ctx.bezierCurveTo(294.8, 360.1, 297.4, 360.8, 299.8, 361.2);
      ctx.bezierCurveTo(302.3, 361.5, 309.4, 363.3, 310.6, 363.3);
      ctx.bezierCurveTo(311.8, 363.3, 312.1, 363.0, 312.2, 361.2);
      ctx.bezierCurveTo(312.3, 359.3, 311.6, 355.3, 311.6, 354.6);
      ctx.bezierCurveTo(311.6, 353.8, 311.1, 353.4, 313.1, 351.7);
      ctx.bezierCurveTo(315.1, 349.9, 329.6, 336.2, 332.0, 334.5);
      ctx.bezierCurveTo(334.4, 332.8, 350.1, 319.6, 351.0, 319.2);
      ctx.bezierCurveTo(351.9, 318.8, 313.3, 351.5, 312.5, 353.4);
      ctx.bezierCurveTo(311.7, 355.4, 312.7, 362.1, 312.7, 363.3);
      ctx.bezierCurveTo(312.7, 364.6, 319.3, 365.1, 321.8, 364.9);
      ctx.bezierCurveTo(324.3, 364.8, 329.9, 365.6, 330.1, 364.9);
      ctx.bezierCurveTo(330.5, 363.5, 330.3, 356.3, 330.3, 355.8);
      ctx.bezierCurveTo(330.2, 355.2, 348.5, 338.8, 350.2, 336.5);
      ctx.bezierCurveTo(351.8, 334.2, 363.3, 321.8, 364.1, 321.5);
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(330.7, 365.2);
      ctx.bezierCurveTo(331.8, 365.7, 343.3, 365.2, 347.6, 364.3);
      ctx.bezierCurveTo(349.0, 364.1, 348.7, 363.2, 348.6, 362.2);
      ctx.bezierCurveTo(348.5, 361.1, 348.1, 355.0, 348.6, 354.1);
      ctx.bezierCurveTo(349.1, 353.2, 371.7, 329.6, 372.9, 328.0);
      ctx.bezierCurveTo(374.2, 326.4, 373.6, 326.2, 373.6, 326.2);
      ctx.stroke();

      // table/Path
      ctx.beginPath();
      ctx.moveTo(349.3, 363.0);
      ctx.bezierCurveTo(351.0, 363.1, 361.6, 363.4, 365.9, 359.3);
      ctx.bezierCurveTo(366.5, 358.7, 366.3, 350.3, 366.3, 350.3);
      ctx.bezierCurveTo(367.1, 348.7, 382.3, 333.8, 382.3, 333.8);
      ctx.lineTo(367.7, 349.9);
      ctx.bezierCurveTo(367.7, 349.9, 365.9, 359.5, 367.2, 359.4);
      ctx.bezierCurveTo(368.4, 359.3, 376.4, 357.4, 381.0, 352.3);
      ctx.bezierCurveTo(382.5, 350.7, 383.5, 347.0, 383.8, 338.2);
      ctx.stroke();
      ctx.restore();

      // border/Rectangle
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0.5, 0.5);
      ctx.lineTo(792.5, 0.5);
      ctx.lineTo(792.5, 612.5);
      ctx.lineTo(0.5, 612.5);
      ctx.lineTo(0.5, 0.5);
      ctx.closePath();
      ctx.strokeStyle = "rgb(154, 154, 154)";
      ctx.stroke();
      ctx.restore();
    }
