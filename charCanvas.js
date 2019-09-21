var canvas = document.querySelector('canvas');
var inches = 100;
canvas.width = 500;
canvas.height = 690;
var ctx = canvas.getContext('2d');

var light = 'rgb(170, 170, 170)';
var dark = 'rgb(0, 0, 0)';
var empty = 'rgb(255, 255, 255)';
var thick = 2;
var thin = 1;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);


visuals2 = {
  "hair": {
    "special": { "jenny": "ctx.beginPath();ctx.moveTo(188.9, 81.2);ctx.bezierCurveTo(163.4, 86.6, 139.7, 72.4, 139.2, 59.8);ctx.bezierCurveTo(138.4, 42.4, 162.4, 18.9, 210.7, 20.7);ctx.bezierCurveTo(240.5, 21.7, 268.4, 45.1, 273.4, 81.2);ctx.bezierCurveTo(277.2, 107.8, 254.8, 144.5, 233.6, 126.4);ctx.bezierCurveTo(216.7, 112.1, 224.5, 76.5, 230.9, 71.7);ctx.bezierCurveTo(219.2, 75.9, 188.5, 81.8, 171.4, 71.7);ctx.bezierCurveTo(162.4, 66.4, 177.8, 77.5, 188.9, 81.2);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();"},
    "bangs": {
      "none": "",
      "lapiz": "ctx.beginPath();ctx.moveTo(134.2, 76.9);ctx.bezierCurveTo(118.6, 64.2, 101.5, 31.3, 130.8, 8.8);ctx.bezierCurveTo(158.5, -12.6, 186.2, 12.8, 188.0, 16.3);ctx.bezierCurveTo(189.7, 19.7, 206.5, 53.2, 208.8, 57.9);ctx.bezierCurveTo(211.1, 62.5, 215.7, 79.2, 208.8, 87.9);ctx.bezierCurveTo(204.7, 74.0, 190.3, 78.7, 183.9, 57.9);ctx.bezierCurveTo(181.6, 59.0, 190.3, 70.6, 192.6, 72.9);ctx.bezierCurveTo(175.8, 74.6, 160.2, 63.6, 162.0, 55.0);ctx.bezierCurveTo(163.7, 46.3, 155.6, 65.4, 166.0, 76.3);ctx.bezierCurveTo(141.2, 74.6, 133.7, 57.9, 136.0, 42.3);ctx.bezierCurveTo(133.0, 39.3, 133.1, 53.8, 137.7, 60.2);ctx.bezierCurveTo(138.9, 61.9, 132.5, 70.0, 134.2, 76.9);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "connie": "ctx.beginPath();ctx.moveTo(205.2, 52.2);ctx.bezierCurveTo(212.7, 60.0, 218.4, 67.7, 218.1, 68.0);ctx.bezierCurveTo(213.7, 72.5, 181.5, 78.5, 169.8, 49.4);ctx.bezierCurveTo(166.9, 50.6, 170.4, 63.4, 171.0, 66.9);ctx.bezierCurveTo(164.7, 67.4, 149.4, 51.7, 158.9, 38.4);ctx.bezierCurveTo(159.2, 38.0, 159.1, 37.6, 158.9, 37.2);ctx.bezierCurveTo(157.0, 34.3, 155.9, 32.0, 156.5, 27.3);ctx.bezierCurveTo(161.1, 30.8, 166.3, 33.7, 180.9, 35.5);ctx.closePath();ctx.fill();ctx.strokeStyle = dark;ctx.lineWidth = thick;ctx.stroke();",
      "rose": "ctx.beginPath();ctx.moveTo(204.8, 46.4);ctx.bezierCurveTo(213.8, 56.4, 221.6, 72.9, 208.3, 86.3);ctx.bezierCurveTo(199.6, 70.5, 178.4, 72.4, 176.7, 54.5);ctx.bezierCurveTo(179.5, 65.9, 182.1, 64.7, 182.0, 66.4);ctx.bezierCurveTo(181.3, 74.6, 177.5, 81.4, 174.6, 83.4);ctx.bezierCurveTo(178.4, 67.4, 143.6, 64.0, 152.4, 36.7);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",

      "ribbon": "ctx.beginPath();ctx.moveTo(167.1, 58.5);ctx.bezierCurveTo(174.7, 52.1, 180.5, 48.1, 194.5, 48.1);ctx.bezierCurveTo(204.4, 48.1, 252.6, 54.4, 245.1, 116.7);ctx.bezierCurveTo(244.9, 118.0, 247.9, 127.9, 252.6, 131.2);ctx.bezierCurveTo(258.4, 135.3, 264.8, 156.2, 261.9, 158.0);ctx.bezierCurveTo(259.0, 159.7, 249.7, 166.1, 249.1, 166.1);ctx.bezierCurveTo(248.0, 162.0, 250.3, 135.3, 247.4, 135.3);ctx.bezierCurveTo(242.7, 135.3, 244.5, 170.7, 242.7, 171.3);ctx.bezierCurveTo(241.0, 171.9, 218.9, 165.5, 217.1, 164.4);ctx.bezierCurveTo(215.4, 163.2, 241.6, 149.8, 241.0, 128.9);ctx.bezierCurveTo(241.6, 113.2, 233.4, 86.4, 216.6, 69.0);ctx.bezierCurveTo(196.8, 55.0, 180.5, 57.4, 167.1, 58.5);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",

      "lapizSide": "ctx.beginPath();ctx.moveTo(208.2, 60.7);ctx.bezierCurveTo(213.4, 64.2, 214.5, 84.4, 204.1, 101.2);ctx.bezierCurveTo(194.9, 116.0, 191.4, 149.1, 201.8, 160.7);ctx.bezierCurveTo(201.3, 154.9, 201.3, 149.1, 204.7, 142.2);ctx.bezierCurveTo(203.0, 146.8, 202.4, 162.4, 209.9, 167.0);ctx.bezierCurveTo(209.9, 143.9, 231.9, 130.7, 231.9, 104.1);ctx.bezierCurveTo(231.9, 85.0, 246.9, 41.1, 194.3, 32.4);ctx.bezierCurveTo(190.3, 31.8, 201.3, 47.5, 208.2, 60.7);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.beginPath();ctx.moveTo(208.2, 60.7);ctx.bezierCurveTo(213.4, 64.2, 214.5, 84.4, 204.1, 101.2);ctx.bezierCurveTo(194.9, 116.0, 191.4, 149.1, 201.8, 160.7);ctx.bezierCurveTo(201.3, 154.9, 201.3, 149.1, 204.7, 142.2);ctx.bezierCurveTo(203.0, 146.8, 202.4, 162.4, 209.9, 167.0);ctx.bezierCurveTo(209.9, 143.9, 237.9, 125.0, 233.8, 90.1);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",

      "roseSide": "ctx.beginPath();ctx.moveTo(147.4, 118.8);ctx.bezierCurveTo(148.2, 128.6, 154.8, 137.7, 165.4, 134.6);ctx.bezierCurveTo(166.1, 139.7, 155.1, 145.2, 152.8, 144.0);ctx.bezierCurveTo(150.5, 142.7, 152.8, 148.1, 158.1, 142.4);ctx.bezierCurveTo(158.1, 142.4, 161.7, 143.6, 163.9, 142.7);ctx.bezierCurveTo(167.5, 141.2, 159.0, 150.9, 147.7, 148.9);ctx.bezierCurveTo(133.1, 146.1, 118.3, 118.4, 123.9, 88.5);ctx.bezierCurveTo(124.5, 85.3, 127.5, 82.5, 127.5, 82.5);ctx.bezierCurveTo(124.3, 72.8, 121.1, 8.8, 194.3, 28.2);ctx.bezierCurveTo(267.4, 47.6, 235.1, 58.0, 245.4, 62.7);ctx.bezierCurveTo(260.8, 69.7, 266.8, 150.1, 207.7, 145.0);ctx.bezierCurveTo(212.3, 142.5, 215.1, 137.7, 215.7, 137.3);ctx.bezierCurveTo(216.7, 136.6, 214.8, 137.9, 224.4, 135.5);ctx.bezierCurveTo(224.9, 133.1, 211.3, 140.2, 207.5, 136.6);ctx.bezierCurveTo(215.3, 130.5, 227.7, 108.6, 215.8, 92.2);ctx.bezierCurveTo(199.0, 69.2, 184.5, 67.3, 175.0, 64.7);ctx.bezierCurveTo(165.5, 62.1, 143.2, 65.4, 147.4, 118.8);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(245.4, 62.7);ctx.bezierCurveTo(260.8, 69.7, 266.8, 150.1, 207.7, 145.0);ctx.bezierCurveTo(212.3, 142.5, 215.1, 137.7, 215.7, 137.3);ctx.bezierCurveTo(216.7, 136.6, 214.8, 137.9, 224.4, 135.5);ctx.bezierCurveTo(224.9, 133.1, 211.3, 140.2, 207.5, 136.6);ctx.bezierCurveTo(215.3, 130.5, 227.7, 108.6, 215.8, 92.2);ctx.bezierCurveTo(199.0, 69.2, 184.5, 67.3, 175.0, 64.7);ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(127.5, 82.5);ctx.bezierCurveTo(124.3, 72.8, 121.1, 8.8, 194.3, 28.2);ctx.stroke();ctx.beginPath();ctx.moveTo(147.4, 118.8);ctx.bezierCurveTo(148.2, 128.6, 154.8, 137.7, 165.4, 134.6);ctx.bezierCurveTo(166.1, 139.7, 155.1, 145.2, 152.8, 144.0);ctx.bezierCurveTo(150.5, 142.7, 152.8, 148.1, 158.1, 142.4);ctx.bezierCurveTo(158.1, 142.4, 161.7, 143.6, 163.9, 142.7);ctx.bezierCurveTo(167.5, 141.2, 159.0, 150.9, 147.7, 148.9);ctx.bezierCurveTo(133.1, 146.1, 118.3, 118.4, 123.9, 88.5);ctx.stroke();",
    },
    "dependent": {
      "none": "",
      "roseSide": "ctx.beginPath();ctx.moveTo(218.6, 89.0);ctx.bezierCurveTo(218.3, 114.6, 197.2, 135.0, 171.6, 134.6);ctx.bezierCurveTo(146.0, 134.3, 125.6, 113.2, 126.0, 87.6);ctx.bezierCurveTo(126.3, 62.0, 147.4, 41.6, 173.0, 42.0);ctx.bezierCurveTo(198.6, 42.4, 219.0, 63.4, 218.6, 89.0);ctx.closePath();ctx.fillStyle = 'rgb(203, 201, 201)';ctx.fill();ctx.fillStyle = empty;",
      "lapizSide": "ctx.beginPath();ctx.moveTo(144.6, 136.4);ctx.bezierCurveTo(141.7, 141.1, 140.7, 149.7, 140.6, 153.2);ctx.bezierCurveTo(137.7, 150.9, 136.2, 148.9, 136.3, 141.9);ctx.bezierCurveTo(132.5, 148.0, 134.2, 154.3, 137.1, 160.7);ctx.bezierCurveTo(136.5, 163.6, 117.4, 142.1, 123.8, 119.1);ctx.bezierCurveTo(129.9, 97.4, 132.5, 97.1, 135.4, 79.2);ctx.bezierCurveTo(137.1, 68.9, 134.4, 58.9, 136.8, 56.2);ctx.bezierCurveTo(139.1, 53.5, 149.0, 90.5, 149.0, 90.5);ctx.lineTo(144.6, 136.4);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "jenny": "ctx.beginPath();ctx.moveTo(137.1, 54.9);ctx.bezierCurveTo(146.1, 50.1, 156.8, 63.9, 154.7, 77.8);ctx.bezierCurveTo(152.5, 91.6, 157.3, 100.5, 150.4, 105.4);ctx.bezierCurveTo(146.7, 108.0, 144.2, 108.6, 133.9, 102.2);ctx.bezierCurveTo(121.2, 94.2, 117.5, 65.5, 137.1, 54.9);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
    },
    "back": {
      "none": "",
      "lapiz": "ctx.beginPath();ctx.moveTo(151.6, 76.5);ctx.bezierCurveTo(151.6, 48.6, 182.2, 27.4, 213.4, 25.1);ctx.bezierCurveTo(244.6, 22.8, 261.6, 54.3, 287.6, 53.7);ctx.bezierCurveTo(287.0, 60.6, 285.0, 63.2, 281.0, 68.4);ctx.bezierCurveTo(281.0, 68.4, 286.2, 66.1, 289.6, 63.8);ctx.bezierCurveTo(293.1, 61.5, 284.0, 133.2, 227.9, 147.6);ctx.bezierCurveTo(171.8, 162.0, 151.6, 84.0, 151.6, 76.5);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "steven": "ctx.beginPath();ctx.moveTo(143.1, 93.0);ctx.bezierCurveTo(118.7, 86.1, 120.4, 48.8, 140.2, 44.2);ctx.bezierCurveTo(138.4, 19.2, 176.8, 3.5, 191.4, 16.3);ctx.bezierCurveTo(225.7, 1.2, 248.9, 29.1, 246.6, 46.5);ctx.bezierCurveTo(272.9, 56.5, 271.0, 93.0, 258.8, 102.3);ctx.bezierCurveTo(257.5, 103.4, 258.9, 103.7, 259.4, 105.3);ctx.bezierCurveTo(267.5, 133.7, 232.6, 157.6, 212.9, 142.5);ctx.lineTo(143.1, 93.0);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "connie": "ctx.beginPath();ctx.moveTo(192.5, 32.6);ctx.bezierCurveTo(207.1, 32.6, 225.7, 44.2, 232.1, 57.0);ctx.bezierCurveTo(237.1, 67.0, 247.8, 65.1, 249.5, 65.1);ctx.bezierCurveTo(251.2, 65.1, 265.2, 69.8, 269.9, 84.3);ctx.bezierCurveTo(274.8, 99.7, 266.9, 116.3, 254.7, 118.6);ctx.bezierCurveTo(254.7, 130.3, 246.0, 149.4, 225.7, 151.2);ctx.bezierCurveTo(205.3, 152.9, 194.3, 141.9, 190.2, 133.2);ctx.bezierCurveTo(186.1, 124.4, 162.3, 129.1, 161.1, 131.4);ctx.bezierCurveTo(160.0, 133.7, 160.0, 143.6, 143.7, 145.4);ctx.bezierCurveTo(127.4, 147.1, 116.9, 136.1, 116.9, 122.1);ctx.bezierCurveTo(104.7, 115.7, 98.0, 101.1, 103.0, 86.6);ctx.bezierCurveTo(107.6, 73.3, 115.8, 68.0, 132.6, 66.3);ctx.bezierCurveTo(136.1, 50.6, 152.4, 37.8, 159.4, 37.8);ctx.bezierCurveTo(166.3, 35.5, 167.5, 32.6, 192.5, 32.6);ctx.closePath();ctx.fill();ctx.strokeStyle = thick;ctx.stroke();",
      "kiki": "ctx.beginPath();ctx.moveTo(184.4, 42.4);ctx.bezierCurveTo(181.5, 19.8, 204.1, 5.8, 222.8, 18.0);ctx.bezierCurveTo(232.6, 9.3, 246.4, 5.0, 260.0, 11.0);ctx.bezierCurveTo(275.7, 18.0, 278.0, 30.2, 277.4, 34.9);ctx.bezierCurveTo(293.1, 36.6, 300.6, 45.3, 304.2, 51.8);ctx.bezierCurveTo(309.4, 61.1, 308.2, 78.5, 296.6, 89.5);ctx.bezierCurveTo(303.0, 95.4, 313.5, 109.9, 302.4, 126.8);ctx.bezierCurveTo(293.2, 140.8, 275.1, 139.6, 270.4, 139.0);ctx.bezierCurveTo(266.4, 151.2, 236.7, 168.1, 225.7, 139.6);ctx.bezierCurveTo(212.3, 149.4, 198.6, 143.6, 196.0, 138.4);ctx.bezierCurveTo(194.8, 136.1, 194.8, 130.3, 194.8, 125.6);ctx.bezierCurveTo(194.8, 121.0, 184.4, 42.4, 184.4, 42.4);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",

    },
  }, //end hair
  "face": {
    "nose": {
      "lapiz": "ctx.beginPath();ctx.moveTo(172.7, 134.6);ctx.bezierCurveTo(170.3, 135.1, 160.5, 124.2, 160.5, 120.1);ctx.bezierCurveTo(163.4, 116.7, 170.9, 113.8, 172.7, 110.9);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "rose": "ctx.beginPath();ctx.moveTo(178.6, 126.2);ctx.bezierCurveTo(176.7, 121.8, 174.1, 118.7, 180.1, 104.8);ctx.bezierCurveTo(186.0, 90.9, 187.7, 122.1, 188.1, 124.6);ctx.bezierCurveTo(188.4, 127.2, 179.8, 128.9, 178.6, 126.2);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.beginPath();ctx.moveTo(178.6, 126.2);ctx.bezierCurveTo(176.7, 121.8, 174.1, 118.7, 180.1, 104.8);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(179.1, 118.8);ctx.lineTo(180.5, 124.9);ctx.stroke();ctx.beginPath();ctx.moveTo(181.7, 118.5);ctx.lineTo(183.1, 124.5);ctx.stroke();",
      "steven": "ctx.beginPath();ctx.moveTo(175.9, 119.0);ctx.bezierCurveTo(175.3, 114.9, 174.1, 108.5, 182.3, 105.0);ctx.bezierCurveTo(190.4, 101.5, 185.7, 120.7, 185.7, 120.7);ctx.lineTo(175.9, 119.0);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.beginPath();ctx.moveTo(175.9, 119.0);ctx.bezierCurveTo(175.3, 114.9, 174.1, 108.5, 182.3, 105.0);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(181.7, 114.3);ctx.lineTo(182.3, 119.6);ctx.stroke();ctx.beginPath();ctx.moveTo(178.2, 114.3);ctx.lineTo(178.8, 118.4);ctx.stroke();",
      "kiki": "ctx.beginPath();ctx.moveTo(172.4, 117.8);ctx.bezierCurveTo(169.4, 117.4, 166.0, 110.9, 172.4, 107.9);ctx.bezierCurveTo(178.8, 105.0, 185.7, 119.6, 172.4, 117.8);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.beginPath();ctx.moveTo(171.8, 109.7);ctx.bezierCurveTo(167.1, 112.0, 170.0, 115.5, 171.8, 116.7);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(175.9, 116.7);ctx.bezierCurveTo(176.4, 116.1, 177.6, 114.3, 179.3, 114.3);ctx.stroke();",
      "jenny": "ctx.beginPath();ctx.moveTo(175.1, 124.3);ctx.bezierCurveTo(173.5, 122.2, 171.9, 120.6, 170.3, 120.6);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(180.4, 124.3);ctx.bezierCurveTo(181.0, 122.7, 183.1, 120.6, 185.2, 120.6);ctx.stroke();",
      "connie": "ctx.beginPath();ctx.moveTo(184.0, 93.4);ctx.bezierCurveTo(181.7, 96.9, 174.1, 114.8, 174.1, 123.1);ctx.bezierCurveTo(174.1, 124.2, 181.7, 129.5, 184.0, 130.6);ctx.bezierCurveTo(186.3, 131.8, 185.7, 95.2, 185.7, 95.2);ctx.lineTo(184.0, 93.4);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.beginPath();ctx.moveTo(184.0, 93.4);ctx.bezierCurveTo(181.7, 96.9, 174.1, 114.8, 174.1, 123.1);ctx.bezierCurveTo(174.1, 124.2, 181.7, 129.5, 184.0, 130.6);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
    },
    "shape": {
      "lapiz": "ctx.beginPath();ctx.moveTo(154.5, 108.3);ctx.bezierCurveTo(151.3, 98.7, 142.8, 77.8, 158.2, 61.8);ctx.bezierCurveTo(172.9, 46.5, 203.0, 34.9, 229.3, 62.4);ctx.bezierCurveTo(241.4, 75.1, 239.7, 96.4, 237.4, 108.0);ctx.bezierCurveTo(242.6, 102.8, 256.6, 105.1, 251.8, 123.0);ctx.bezierCurveTo(245.4, 146.7, 235.2, 131.5, 234.5, 134.0);ctx.bezierCurveTo(230.5, 146.7, 228.0, 148.0, 223.5, 150.7);ctx.bezierCurveTo(211.9, 157.7, 190.6, 165.8, 185.9, 166.9);ctx.bezierCurveTo(181.3, 168.1, 179.6, 168.6, 175.5, 165.2);ctx.bezierCurveTo(171.5, 161.7, 147.2, 146.1, 150.7, 126.5);ctx.bezierCurveTo(151.8, 120.2, 155.9, 112.6, 154.5, 108.3);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "rose": "ctx.beginPath();ctx.moveTo(191.8, 148.3);ctx.bezierCurveTo(180.5, 159.5, 149.6, 154.6, 140.2, 138.7);ctx.bezierCurveTo(135.8, 131.2, 134.4, 115.2, 138.3, 104.1);ctx.bezierCurveTo(141.8, 94.0, 141.9, 84.8, 140.8, 81.3);ctx.bezierCurveTo(139.3, 76.0, 147.5, 54.2, 161.7, 52.7);ctx.bezierCurveTo(174.2, 51.4, 210.1, 44.9, 218.5, 76.5);ctx.bezierCurveTo(223.4, 95.3, 217.6, 126.4, 210.1, 135.0);ctx.bezierCurveTo(202.7, 143.6, 200.1, 144.0, 191.8, 148.3);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "jenny": "ctx.beginPath();ctx.moveTo(188.2, 149.0);ctx.bezierCurveTo(169.5, 152.7, 145.6, 149.5, 136.6, 134.6);ctx.bezierCurveTo(124.4, 114.6, 138.2, 103.3, 142.4, 99.5);ctx.bezierCurveTo(143.3, 98.8, 135.5, 81.5, 145.6, 58.6);ctx.bezierCurveTo(150.0, 48.8, 161.1, 38.1, 173.8, 36.8);ctx.bezierCurveTo(221.1, 32.0, 236.6, 47.6, 236.0, 80.4);ctx.bezierCurveTo(235.5, 110.2, 221.6, 132.0, 202.5, 142.1);ctx.bezierCurveTo(199.2, 143.8, 192.4, 147.9, 188.2, 149.0);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "steven": "ctx.beginPath();ctx.moveTo(139.6, 98.9);ctx.bezierCurveTo(139.0, 77.3, 146.6, 58.7, 158.2, 54.1);ctx.bezierCurveTo(166.7, 50.7, 184.4, 45.4, 201.2, 58.1);ctx.bezierCurveTo(218.1, 70.9, 218.7, 91.9, 218.1, 98.9);ctx.bezierCurveTo(217.5, 105.8, 216.3, 93.0, 230.9, 93.6);ctx.bezierCurveTo(244.9, 94.2, 244.3, 108.7, 241.9, 115.1);ctx.bezierCurveTo(239.6, 121.5, 230.9, 133.2, 220.4, 126.8);ctx.bezierCurveTo(221.6, 134.3, 217.5, 143.0, 210.5, 147.1);ctx.bezierCurveTo(198.6, 154.1, 176.8, 157.0, 157.0, 151.8);ctx.bezierCurveTo(141.2, 147.6, 129.1, 136.7, 129.1, 119.2);ctx.bezierCurveTo(129.1, 105.8, 139.7, 101.8, 139.6, 98.9);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "connie": "ctx.beginPath();ctx.moveTo(229.7, 114.0);ctx.bezierCurveTo(227.2, 121.6, 221.0, 128.5, 210.5, 125.6);ctx.bezierCurveTo(210.5, 140.1, 193.8, 154.1, 174.5, 154.1);ctx.bezierCurveTo(153.3, 154.1, 136.1, 129.1, 136.1, 100.3);ctx.bezierCurveTo(136.1, 71.6, 153.3, 46.5, 174.5, 46.5);ctx.bezierCurveTo(206.8, 46.5, 211.3, 73.3, 212.3, 98.9);ctx.bezierCurveTo(221.0, 90.7, 234.4, 100.0, 229.7, 114.0);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
    },
  }, // end face
  "body": {
    "neck": {
      "thin": "ctx.beginPath();ctx.moveTo(192.8, 182.4);ctx.lineTo(192.8, 147.4);ctx.lineTo(211.8, 147.4);ctx.lineTo(211.8, 182.4);ctx.fill();ctx.lineWidth = thick;ctx.stroke();",
      "strong": "ctx.beginPath();ctx.moveTo(182.3, 182.9);ctx.lineTo(182.3, 143.9);ctx.lineTo(227.8, 143.9);ctx.lineTo(227.8, 183.3);ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
      "thick": "ctx.beginPath();ctx.moveTo(171.8, 183.9);ctx.lineTo(171.8, 143.4);ctx.lineTo(229.8, 143.4);ctx.lineTo(229.8, 183.9);ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
    },
    "arms": {
      "left": {
        "thin": {
          "shape":"ctx.beginPath();ctx.moveTo(175.6, 180.1);ctx.bezierCurveTo(155.5, 179.7, 149.7, 178.4, 143.9, 199.3);ctx.bezierCurveTo(133.2, 225.2, 127.6, 246.9, 124.6, 258.7);ctx.bezierCurveTo(113.6, 270.6, 91.8, 318.3, 82.9, 334.4);ctx.bezierCurveTo(82.0, 334.3, 95.3, 342.4, 82.9, 334.4);ctx.bezierCurveTo(57.0, 330.8, 51.6, 355.6, 42.3, 356.2);ctx.bezierCurveTo(35.6, 356.7, 42.7, 374.5, 62.4, 351.3);ctx.bezierCurveTo(52.6, 377.2, 38.3, 398.6, 48.5, 397.2);ctx.bezierCurveTo(52.1, 384.8, 60.6, 375.4, 61.5, 367.4);ctx.bezierCurveTo(60.6, 378.1, 35.6, 408.4, 56.1, 403.9);ctx.bezierCurveTo(52.6, 396.8, 64.1, 381.6, 69.0, 368.7);ctx.bezierCurveTo(56.1, 391.4, 50.8, 405.7, 60.6, 403.9);ctx.bezierCurveTo(68.6, 394.1, 75.3, 375.8, 78.0, 371.4);ctx.bezierCurveTo(80.6, 379.4, 62.4, 400.4, 72.2, 403.0);ctx.bezierCurveTo(79.3, 398.6, 87.8, 377.6, 90.0, 367.4);ctx.bezierCurveTo(91.9, 358.6, 98.0, 341.5, 94.0, 342.0);ctx.bezierCurveTo(97.1, 343.3, 95.8, 343.7, 98.5, 338.4);ctx.bezierCurveTo(101.1, 333.0, 137.4, 275.1, 139.8, 268.0);ctx.bezierCurveTo(142.2, 260.8, 164.4, 206.4, 166.2, 202.0);ctx.bezierCurveTo(168.0, 197.5, 175.6, 180.1, 175.6, 180.1);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(134.3, 225.1);ctx.bezierCurveTo(137.8, 231.4, 147.8, 235.3, 154.3, 231.4);ctx.stroke();",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
        "strong": {
          "shape": "ctx.beginPath();ctx.moveTo(171.1, 184.7);ctx.bezierCurveTo(158.5, 164.4, 112.9, 179.5, 117.3, 216.7);ctx.bezierCurveTo(101.0, 242.5, 99.8, 261.7, 99.1, 270.9);ctx.bezierCurveTo(75.6, 290.8, 71.4, 311.9, 51.9, 324.3);ctx.bezierCurveTo(34.0, 324.4, 30.4, 330.1, 29.0, 331.4);ctx.bezierCurveTo(39.6, 328.1, 42.0, 330.0, 43.9, 330.3);ctx.bezierCurveTo(26.1, 327.8, 12.6, 336.5, 12.6, 350.9);ctx.bezierCurveTo(16.6, 340.7, 35.1, 336.7, 39.5, 336.2);ctx.bezierCurveTo(11.8, 336.8, 1.9, 368.6, 25.5, 357.7);ctx.bezierCurveTo(28.6, 350.4, 37.6, 347.6, 47.9, 346.2);ctx.bezierCurveTo(16.7, 346.9, 15.8, 381.3, 52.3, 360.1);ctx.bezierCurveTo(65.3, 361.4, 65.3, 358.7, 67.2, 359.0);ctx.bezierCurveTo(72.7, 359.9, 75.0, 363.8, 73.4, 376.0);ctx.bezierCurveTo(71.8, 388.2, 90.0, 388.8, 93.9, 369.6);ctx.bezierCurveTo(97.8, 350.4, 133.6, 335.7, 141.9, 316.0);ctx.bezierCurveTo(150.2, 296.4, 194.2, 244.5, 171.1, 184.7);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.stroke();",
          "tshirt": "",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
        "thick": {
          "shape": "ctx.beginPath();ctx.moveTo(162.8, 266.4);ctx.bezierCurveTo(156.8, 292.4, 185.3, 324.9, 51.3, 411.9);ctx.bezierCurveTo(35.3, 416.9, 31.8, 401.4, 58.8, 393.4);ctx.bezierCurveTo(39.8, 399.4, 35.4, 406.0, 40.8, 411.4);ctx.bezierCurveTo(43.8, 419.4, 1.8, 419.4, 47.8, 390.4);ctx.bezierCurveTo(25.8, 405.4, 27.8, 406.4, 25.8, 412.4);ctx.bezierCurveTo(3.8, 410.4, 19.8, 390.4, 39.8, 380.4);ctx.bezierCurveTo(23.8, 391.4, 14.8, 397.4, 14.8, 406.4);ctx.bezierCurveTo(-7.2, 402.4, 11.8, 382.4, 28.8, 370.4);ctx.bezierCurveTo(6.8, 380.4, -1.2, 373.4, 0.8, 363.4);ctx.bezierCurveTo(1.8, 358.4, 10.8, 359.4, 14.8, 358.4);ctx.bezierCurveTo(20.8, 353.4, 28.8, 351.4, 31.8, 349.4);ctx.bezierCurveTo(34.8, 347.4, 68.8, 292.4, 81.8, 288.4);ctx.bezierCurveTo(87.8, 258.4, 84.8, 195.9, 147.8, 184.4);ctx.bezierCurveTo(158.8, 182.4, 162.8, 266.4, 162.8, 266.4);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(56.8, 387.4);ctx.bezierCurveTo(51.8, 379.4, 51.8, 368.4, 60.8, 364.4);ctx.fill();ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(88.8, 251.4);ctx.bezierCurveTo(98.8, 264.4, 120.8, 267.4, 127.8, 267.4);ctx.stroke();",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
      },
      "right": {
        "thin": {
          "shape": "ctx.beginPath();ctx.moveTo(234.8, 181.4);ctx.bezierCurveTo(253.8, 181.4, 252.8, 183.4, 260.3, 191.7);ctx.bezierCurveTo(272.3, 217.8, 287.3, 254.7, 288.8, 262.2);ctx.bezierCurveTo(289.1, 263.4, 283.2, 330.5, 280.8, 331.7);ctx.lineTo(280.8, 332.6);ctx.bezierCurveTo(287.9, 338.0, 289.3, 346.6, 281.1, 359.1);ctx.bezierCurveTo(282.1, 364.9, 280.8, 369.2, 294.1, 381.4);ctx.bezierCurveTo(297.9, 390.8, 280.2, 384.8, 273.7, 365.3);ctx.bezierCurveTo(280.9, 382.2, 288.6, 384.4, 291.8, 386.3);ctx.bezierCurveTo(291.7, 396.4, 269.5, 379.9, 267.3, 368.1);ctx.bezierCurveTo(271.2, 380.4, 281.4, 387.0, 288.0, 389.8);ctx.bezierCurveTo(284.8, 401.0, 263.1, 382.7, 261.6, 372.0);ctx.bezierCurveTo(265.1, 382.3, 273.9, 390.4, 279.7, 393.0);ctx.bezierCurveTo(276.4, 401.3, 248.4, 388.7, 259.4, 353.8);ctx.bezierCurveTo(256.1, 362.1, 257.4, 367.1, 257.2, 368.0);ctx.bezierCurveTo(255.4, 374.0, 242.5, 374.0, 246.8, 368.7);ctx.bezierCurveTo(257.7, 359.8, 254.1, 343.0, 264.6, 340.4);ctx.lineTo(263.9, 340.6);ctx.bezierCurveTo(261.2, 336.2, 269.9, 262.6, 268.3, 259.5);ctx.bezierCurveTo(258.5, 239.9, 242.5, 206.9, 240.7, 205.1);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(257.4, 237.4);ctx.bezierCurveTo(254.8, 227.4, 273.4, 219.9, 276.6, 228.1);ctx.stroke();",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
        "strong": {
          "shape": "ctx.beginPath();ctx.moveTo(242.9, 183.8);ctx.bezierCurveTo(266.2, 171.2, 299.7, 159.4, 319.6, 207.0);ctx.bezierCurveTo(352.3, 230.2, 353.4, 257.0, 361.0, 267.0);ctx.bezierCurveTo(364.6, 271.8, 364.4, 323.3, 359.2, 336.0);ctx.bezierCurveTo(352.3, 352.9, 365.2, 377.9, 347.1, 384.0);ctx.bezierCurveTo(349.7, 378.1, 349.3, 376.3, 349.8, 368.9);ctx.bezierCurveTo(348.1, 379.3, 344.2, 402.9, 328.6, 397.6);ctx.bezierCurveTo(334.9, 387.2, 338.3, 381.1, 335.0, 368.0);ctx.bezierCurveTo(339.4, 381.8, 326.2, 414.5, 313.8, 396.7);ctx.bezierCurveTo(320.0, 395.5, 322.1, 372.7, 319.1, 366.4);ctx.bezierCurveTo(322.4, 384.1, 316.6, 407.1, 302.2, 393.3);ctx.bezierCurveTo(296.7, 388.9, 309.9, 366.3, 291.4, 355.1);ctx.bezierCurveTo(284.3, 371.0, 251.8, 361.4, 298.8, 329.4);ctx.bezierCurveTo(290.9, 286.9, 287.9, 282.5, 299.0, 268.5);ctx.bezierCurveTo(294.0, 271.3, 296.1, 272.7, 293.1, 276.0);ctx.bezierCurveTo(279.3, 265.8, 265.4, 250.1, 264.9, 242.8);ctx.bezierCurveTo(257.8, 248.7, 256.4, 246.2, 256.4, 246.2);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(337.4, 222.0);ctx.bezierCurveTo(308.4, 213.5, 274.5, 230.9, 276.1, 259.0);ctx.lineWidth = thick;ctx.stroke();",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
        "thick": {
          "shape": "ctx.beginPath();ctx.moveTo(255.8, 262.4);ctx.bezierCurveTo(262.8, 287.4, 282.8, 314.4, 290.8, 319.4);ctx.bezierCurveTo(276.8, 352.4, 283.8, 387.4, 286.8, 396.4);ctx.bezierCurveTo(282.3, 412.5, 278.7, 435.4, 295.8, 424.4);ctx.bezierCurveTo(299.8, 419.4, 300.3, 414.1, 300.8, 406.4);ctx.bezierCurveTo(300.8, 419.4, 293.0, 441.3, 302.8, 442.4);ctx.bezierCurveTo(311.8, 443.4, 313.8, 431.4, 315.8, 418.4);ctx.bezierCurveTo(315.8, 434.4, 311.8, 438.4, 308.8, 440.4);ctx.bezierCurveTo(318.8, 455.4, 328.8, 430.4, 328.8, 417.4);ctx.bezierCurveTo(326.8, 434.4, 324.8, 434.4, 322.8, 439.4);ctx.bezierCurveTo(324.8, 442.4, 330.5, 440.6, 332.8, 434.4);ctx.bezierCurveTo(336.1, 425.4, 337.2, 414.5, 337.8, 410.4);ctx.bezierCurveTo(335.8, 426.4, 335.8, 427.4, 333.8, 433.4);ctx.bezierCurveTo(343.8, 432.4, 366.8, 352.4, 353.8, 307.4);ctx.bezierCurveTo(346.8, 262.4, 313.8, 183.4, 251.8, 181.4);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(263.8, 277.4);ctx.bezierCurveTo(281.8, 278.4, 320.8, 257.4, 328.8, 242.4);ctx.stroke();",
          "dress":"", "bikini":"", "onepiece":"", "tanktop":"", "shorts":"",
        },
      }, //end right
    }, //end arms
    "chest": {
      "fm": {
        "narrow": {
          "shape": "ctx.beginPath();ctx.moveTo(177.4, 241.7);ctx.bezierCurveTo(157.8, 237.2, 146.2, 198.9, 173.8, 180.1);ctx.bezierCurveTo(185.4, 180.1, 218.4, 180.1, 238.9, 181.9);ctx.bezierCurveTo(249.6, 197.1, 254.0, 233.6, 220.2, 243.4);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "dress": "ctx.beginPath();ctx.moveTo(160.0, 197.0);ctx.bezierCurveTo(166.8, 192.4, 178.8, 191.4, 182.8, 190.4);ctx.bezierCurveTo(175.8, 187.4, 174.8, 183.4, 173.8, 180.4);ctx.bezierCurveTo(179.8, 180.4, 191.8, 180.4, 191.3, 181.0);ctx.bezierCurveTo(194.8, 188.4, 212.1, 190.7, 219.0, 181.0);ctx.bezierCurveTo(218.8, 181.4, 233.6, 180.8, 233.8, 181.4);ctx.bezierCurveTo(237.8, 186.4, 228.8, 192.4, 221.8, 194.4);ctx.bezierCurveTo(243.8, 204.4, 235.8, 217.4, 245.6, 218.1);ctx.stroke();ctx.beginPath();ctx.moveTo(188.8, 192.4);ctx.bezierCurveTo(187.8, 191.4, 196.8, 192.4, 191.8, 193.4);ctx.bezierCurveTo(186.8, 194.4, 190.8, 196.4, 193.8, 196.4);ctx.bezierCurveTo(196.8, 196.4, 198.8, 195.4, 196.8, 193.4);ctx.bezierCurveTo(194.8, 191.4, 201.8, 193.4, 199.8, 195.4);ctx.bezierCurveTo(197.8, 197.4, 199.8, 197.4, 202.8, 197.4);ctx.bezierCurveTo(205.8, 197.4, 199.8, 195.4, 202.8, 194.4);ctx.bezierCurveTo(205.8, 193.4, 216.8, 193.4, 210.8, 194.4);ctx.bezierCurveTo(204.8, 195.4, 207.8, 198.4, 210.8, 197.4);ctx.bezierCurveTo(213.8, 196.4, 216.8, 196.4, 214.8, 194.4);ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(182.6, 181.0);ctx.bezierCurveTo(177.8, 187.4, 196.8, 203.7, 223.3, 181.0);ctx.stroke();",
          "bikini": "ctx.beginPath();ctx.moveTo(188.8, 180.4);ctx.bezierCurveTo(165.8, 187.4, 162.7, 211.3, 169.8, 207.4);ctx.bezierCurveTo(180.8, 201.4, 190.8, 216.4, 193.8, 223.4);ctx.bezierCurveTo(199.8, 213.4, 202.8, 205.4, 215.8, 206.4);ctx.bezierCurveTo(228.8, 207.4, 228.8, 186.4, 210.8, 180.4);ctx.bezierCurveTo(208.8, 180.4, 219.8, 180.4, 219.8, 180.4);ctx.bezierCurveTo(229.8, 185.4, 234.8, 199.4, 234.8, 212.4);ctx.bezierCurveTo(234.8, 218.4, 243.8, 223.4, 243.8, 223.4);ctx.stroke();" + "ctx.beginPath();ctx.moveTo(177.8, 241.4);ctx.bezierCurveTo(182.8, 244.4, 212.8, 246.4, 219.8, 243.4);ctx.stroke();",
          "onepiece": "ctx.beginPath();ctx.moveTo(243.8, 223.4);ctx.bezierCurveTo(231.8, 224.4, 228.8, 199.4, 236.8, 181.4);ctx.stroke();ctx.beginPath();ctx.moveTo(182.6, 181.0);ctx.bezierCurveTo(146.8, 216.4, 214.8, 232.4, 223.3, 181.0);ctx.stroke();",
          "tanktop": "ctx.beginPath();ctx.moveTo(243.8, 223.4);ctx.bezierCurveTo(231.8, 224.4, 228.8, 199.4, 236.8, 181.4);ctx.stroke();ctx.beginPath();ctx.moveTo(182.6, 181.0);ctx.bezierCurveTo(146.8, 216.4, 214.8, 232.4, 223.3, 181.0);ctx.stroke();",
          "shorts": "",
        },
        "large": {
          "shape": "ctx.beginPath();ctx.moveTo(143.9, 302.4);ctx.bezierCurveTo(143.9, 297.4, 145.9, 305.4, 143.9, 297.4);ctx.bezierCurveTo(82.8, 255.4, 130.4, 218.7, 143.8, 193.4);ctx.bezierCurveTo(152.8, 176.4, 184.7, 180.4, 247.7, 182.3);ctx.bezierCurveTo(285.8, 229.3, 287.8, 261.3, 266.9, 295.3);ctx.bezierCurveTo(267.9, 296.3, 267.9, 296.3, 267.9, 296.3);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "dress": "ctx.beginPath();ctx.moveTo(121.8, 227.4);ctx.bezierCurveTo(128.2, 213.3, 167.6, 211.3, 168.8, 208.4);ctx.bezierCurveTo(157.2, 208.5, 151.8, 189.4, 157.8, 183.4);ctx.bezierCurveTo(157.8, 183.4, 177.6, 180.7, 177.8, 181.4);ctx.bezierCurveTo(180.0, 190.9, 180.9, 217.6, 228.1, 182.2);ctx.bezierCurveTo(231.8, 182.4, 237.8, 182.4, 242.8, 182.4);ctx.bezierCurveTo(251.5, 182.4, 233.8, 206.4, 216.8, 209.4);ctx.bezierCurveTo(256.6, 230.7, 232.3, 267.3, 267.3, 264.7);ctx.stroke();ctx.beginPath();ctx.moveTo(175.1, 215.2);ctx.bezierCurveTo(176.2, 213.3, 179.8, 214.4, 178.1, 215.4);ctx.bezierCurveTo(174.7, 217.2, 188.0, 217.5, 183.1, 214.7);ctx.bezierCurveTo(181.2, 213.6, 191.2, 214.1, 188.0, 217.0);ctx.bezierCurveTo(184.8, 219.8, 201.0, 217.7, 197.1, 215.5);ctx.bezierCurveTo(193.2, 213.3, 200.2, 213.7, 202.1, 214.8);ctx.bezierCurveTo(204.1, 215.9, 206.1, 216.0, 205.2, 213.0);ctx.fill();ctx.stroke();",
          "tshirt": "ctx.beginPath();ctx.moveTo(230.8, 183.4);ctx.bezierCurveTo(210.8, 211.4, 159.7, 205.5, 180.8, 180.4);ctx.stroke();ctx.beginPath();ctx.moveTo(266.8, 295.4);ctx.bezierCurveTo(206.8, 302.4, 188.8, 302.4, 143.8, 297.4);ctx.stroke();",
          "bikini": "ctx.beginPath();ctx.moveTo(124.8, 280.4);ctx.bezierCurveTo(143.8, 308.4, 220.8, 317.4, 277.8, 270.4);ctx.lineWidth = thick;ctx.stroke();ctx.beginPath();ctx.moveTo(179.8, 180.4);ctx.bezierCurveTo(142.8, 189.4, 132.6, 222.0, 135.8, 226.4);ctx.bezierCurveTo(141.5, 234.2, 159.8, 205.7, 169.8, 259.4);ctx.bezierCurveTo(192.6, 199.8, 218.2, 242.4, 225.6, 235.8);ctx.bezierCurveTo(245.1, 218.5, 236.6, 200.3, 229.3, 180.0);ctx.stroke();ctx.beginPath();ctx.moveTo(230.8, 183.4);ctx.bezierCurveTo(266.8, 174.4, 225.9, 260.5, 270.8, 254.4);ctx.stroke();",
          "onepiece": "ctx.beginPath();ctx.moveTo(232.8, 181.4);ctx.bezierCurveTo(210.8, 244.4, 117.8, 249.4, 165.8, 183.4);ctx.stroke();ctx.beginPath();ctx.moveTo(242.8, 183.4);ctx.bezierCurveTo(227.8, 214.4, 232.8, 263.4, 269.8, 258.4);ctx.stroke();",
          "tanktop": "ctx.beginPath();ctx.moveTo(232.8, 181.4);ctx.bezierCurveTo(210.8, 244.4, 117.8, 249.4, 165.8, 183.4);ctx.stroke();ctx.beginPath();ctx.moveTo(242.8, 183.4);ctx.bezierCurveTo(227.8, 214.4, 232.8, 263.4, 269.8, 258.4);ctx.stroke();ctx.beginPath();ctx.moveTo(266.8, 295.4);ctx.bezierCurveTo(248.8, 305.4, 182.8, 312.4, 143.8, 297.4);ctx.stroke();",
          "shorts": "",
        },
      }, //end female chest
      "am":{

      },  //end male chest
    }, //end chest
    "waist": {
      "thin": {
        "shape": "ctx.beginPath();ctx.moveTo(220.2, 279.9);ctx.bezierCurveTo(220.2, 279.9, 219.3, 250.6, 220.2, 231.7);ctx.bezierCurveTo(206.8, 231.6, 188.8, 229.4, 177.4, 229.7);ctx.bezierCurveTo(177.4, 235.6, 178.3, 280.9, 178.3, 280.9);ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
        "dress": "ctx.beginPath();ctx.moveTo(177.8, 254.4);ctx.bezierCurveTo(182.8, 258.4, 206.8, 259.4, 219.8, 255.9);ctx.stroke();",
        "tanktop": "ctx.beginPath();ctx.moveTo(177.8, 275.4);ctx.bezierCurveTo(181.8, 292.4, 210.8, 290.4, 219.8, 274.4);ctx.stroke();",
        "tshirt": "ctx.beginPath();ctx.moveTo(177.8, 275.4);ctx.bezierCurveTo(181.8, 292.4, 210.8, 290.4, 219.8, 274.4);ctx.lineWidth = thick;ctx.stroke();",
        "bikini":"", "onepiece":"", "shorts":"",
      },
    }, //end waist
    "legs": {
      "curvy": {
        "shape": "ctx.beginPath();ctx.moveTo(143.5, 624.8);ctx.bezierCurveTo(143.1, 626.0, 58.8, 627.5, 58.8, 625.7);ctx.bezierCurveTo(58.8, 621.2, 65.0, 619.4, 70.4, 619.4);ctx.bezierCurveTo(63.2, 619.4, 59.7, 621.2, 58.8, 625.7);ctx.bezierCurveTo(53.4, 626.6, 52.6, 624.8, 59.7, 619.4);ctx.bezierCurveTo(55.2, 622.1, 55.2, 620.3, 54.3, 624.8);ctx.bezierCurveTo(39.2, 620.3, 109.6, 604.3, 121.2, 598.9);ctx.bezierCurveTo(121.2, 588.2, 125.7, 477.0, 126.6, 468.1);ctx.bezierCurveTo(108.7, 429.8, 90.0, 304.1, 170.2, 274.6);ctx.bezierCurveTo(200.6, 266.6, 223.6, 272.2, 230.9, 274.6);ctx.bezierCurveTo(233.5, 275.5, 328.1, 308.5, 280.8, 462.8);ctx.bezierCurveTo(307.5, 510.0, 317.4, 593.6, 311.1, 623.0);ctx.bezierCurveTo(310.2, 654.2, 308.4, 655.1, 299.5, 655.1);ctx.bezierCurveTo(298.6, 653.3, 296.8, 651.5, 301.3, 648.9);ctx.bezierCurveTo(297.7, 650.6, 297.7, 651.5, 298.6, 655.1);ctx.bezierCurveTo(289.7, 656.9, 289.7, 653.3, 293.3, 648.0);ctx.bezierCurveTo(290.6, 651.5, 290.6, 652.4, 292.4, 655.1);ctx.bezierCurveTo(281.7, 657.8, 283.5, 653.3, 287.0, 647.1);ctx.bezierCurveTo(283.5, 651.5, 283.5, 653.3, 285.3, 655.1);ctx.bezierCurveTo(277.2, 655.1, 269.2, 655.1, 279.0, 646.2);ctx.bezierCurveTo(274.6, 649.8, 273.7, 650.6, 274.6, 653.3);ctx.bezierCurveTo(263.0, 654.2, 258.5, 653.3, 282.6, 623.0);ctx.bezierCurveTo(273.7, 582.0, 251.4, 494.9, 251.4, 484.2);ctx.bezierCurveTo(229.1, 458.3, 191.6, 387.9, 200.1, 354.4);ctx.bezierCurveTo(200.6, 354.0, 191.6, 355.8, 179.6, 349.1);ctx.bezierCurveTo(170.0, 343.7, 183.6, 353.1, 192.1, 353.6);ctx.bezierCurveTo(200.6, 354.0, 183.6, 442.3, 159.1, 461.4);ctx.bezierCurveTo(171.1, 516.3, 168.5, 552.6, 143.5, 624.8);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
        "clothes": {
          "shorts": "ctx.beginPath();ctx.moveTo(202.1, 387.9);ctx.bezierCurveTo(217.8, 407.4, 283.4, 408.3, 293.6, 372.4);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(111.3, 372.4);ctx.bezierCurveTo(115.8, 389.4, 176.6, 407.1, 191.2, 386.3);ctx.stroke();ctx.beginPath();ctx.moveTo(185.8, 354.4);ctx.bezierCurveTo(186.8, 361.4, 181.8, 390.4, 179.8, 392.4);ctx.lineWidth = thin;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(198.8, 288.4);ctx.bezierCurveTo(194.8, 307.4, 193.8, 344.0, 195.3, 354.2);ctx.bezierCurveTo(195.8, 338.4, 186.8, 343.4, 182.8, 342.4);ctx.bezierCurveTo(179.8, 331.4, 182.8, 296.8, 187.3, 286.6);ctx.stroke();ctx.beginPath();ctx.moveTo(230.8, 302.4);ctx.bezierCurveTo(235.8, 305.4, 250.8, 304.4, 250.8, 292.4);ctx.bezierCurveTo(257.8, 301.4, 283.3, 359.9, 281.5, 390.1);ctx.stroke();ctx.beginPath();ctx.moveTo(169.8, 274.4);ctx.bezierCurveTo(161.8, 286.4, 223.8, 294.4, 228.8, 274.4);ctx.lineWidth=thick;ctx.strokeStyle = dark;ctx.stroke();",
          "onepiece": "ctx.beginPath();ctx.moveTo(282.6, 325.9);ctx.bezierCurveTo(274.8, 298.4, 217.8, 303.4, 199.8, 354.4);ctx.bezierCurveTo(199.8, 354.4, 191.8, 357.4, 177.8, 348.4);ctx.bezierCurveTo(168.3, 342.3, 146.8, 305.4, 124.8, 316.4);ctx.stroke();",
          "bikini": "ctx.beginPath();ctx.moveTo(282.6, 325.9);ctx.bezierCurveTo(274.8, 298.4, 217.8, 303.4, 199.8, 354.4);ctx.bezierCurveTo(199.8, 354.4, 191.8, 357.4, 177.8, 348.4);ctx.bezierCurveTo(168.3, 342.3, 146.8, 305.4, 124.8, 316.4);ctx.stroke();ctx.beginPath();ctx.moveTo(138.0, 296.4);ctx.bezierCurveTo(142.8, 311.4, 256.8, 306.4, 252.8, 287.4);ctx.stroke();",
          "dress": "ctx.beginPath();ctx.moveTo(133.8, 301.4);ctx.bezierCurveTo(115.7, 323.5, 81.8, 429.4, 82.8, 522.4);ctx.bezierCurveTo(107.8, 543.4, 136.8, 528.4, 130.8, 540.4);ctx.bezierCurveTo(124.8, 552.4, 215.4, 556.6, 230.8, 549.4);ctx.bezierCurveTo(245.8, 542.4, 235.8, 538.4, 239.8, 535.4);ctx.bezierCurveTo(243.8, 532.4, 314.8, 542.4, 318.8, 532.4);ctx.bezierCurveTo(318.8, 431.4, 297.8, 324.4, 254.8, 288.4);ctx.bezierCurveTo(225.5, 263.9, 169.8, 257.4, 133.8, 301.4);ctx.closePath();ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(168.8, 365.4);ctx.bezierCurveTo(163.8, 394.4, 141.8, 514.4, 136.8, 520.4);ctx.fill();ctx.stroke();ctx.beginPath();ctx.moveTo(219.8, 383.4);ctx.bezierCurveTo(219.8, 417.4, 226.8, 498.4, 233.8, 507.4);ctx.stroke();",
        "tanktop":"", "tshirt":"",
        }, //end beachwear
        "sandals": {
          "none": "",
          "band": "ctx.beginPath();ctx.moveTo(265.8, 644.4);ctx.bezierCurveTo(259.8, 648.4, 261.8, 657.4, 263.8, 659.4);ctx.bezierCurveTo(267.9, 663.5, 307.8, 664.4, 310.8, 657.4);ctx.bezierCurveTo(313.8, 650.4, 318.8, 628.4, 310.8, 628.4);ctx.stroke();ctx.beginPath();ctx.moveTo(311.8, 653.4);ctx.bezierCurveTo(310.7, 647.9, 276.8, 639.4, 267.8, 644.4);ctx.bezierCurveTo(258.8, 649.4, 271.3, 632.3, 273.8, 630.4);ctx.bezierCurveTo(277.8, 627.4, 303.9, 621.5, 313.8, 641.4);ctx.bezierCurveTo(316.8, 647.4, 311.8, 653.4, 311.8, 653.4);ctx.closePath();ctx.fill();ctx.stroke();" + "ctx.beginPath();ctx.moveTo(51.8, 624.4);ctx.bezierCurveTo(50.8, 627.4, 51.8, 633.4, 53.8, 633.4);ctx.bezierCurveTo(57.0, 633.4, 135.8, 633.4, 145.8, 632.4);ctx.bezierCurveTo(146.8, 632.3, 147.8, 624.4, 144.8, 624.4);ctx.stroke();ctx.beginPath();ctx.moveTo(76.8, 632.4);ctx.bezierCurveTo(76.8, 628.4, 77.8, 616.4, 59.8, 617.4);ctx.bezierCurveTo(58.8, 614.4, 86.8, 605.4, 89.8, 607.4);ctx.bezierCurveTo(92.8, 609.4, 114.8, 619.4, 107.8, 632.4);ctx.bezierCurveTo(107.1, 633.6, 76.8, 632.4, 76.8, 632.4);ctx.closePath();ctx.fill();ctx.stroke();",
          "flip": "ctx.beginPath();ctx.moveTo(265.8, 644.4);ctx.bezierCurveTo(259.8, 648.4, 261.8, 657.4, 263.8, 659.4);ctx.bezierCurveTo(267.9, 663.5, 307.8, 664.4, 310.8, 657.4);ctx.bezierCurveTo(313.8, 650.4, 318.8, 628.4, 310.8, 628.4);ctx.stroke();ctx.beginPath();ctx.moveTo(270.8, 637.4);ctx.bezierCurveTo(273.8, 638.4, 278.8, 644.4, 278.8, 645.4);ctx.bezierCurveTo(278.8, 646.4, 306.8, 629.4, 313.8, 642.4);ctx.bezierCurveTo(315.3, 645.2, 315.2, 638.2, 314.8, 635.4);ctx.bezierCurveTo(313.8, 628.4, 292.8, 630.4, 280.8, 641.4);ctx.bezierCurveTo(279.1, 642.9, 279.8, 631.4, 275.8, 631.4);ctx.bezierCurveTo(269.8, 631.4, 270.8, 637.4, 270.8, 637.4);ctx.closePath();ctx.fill();ctx.stroke();" + "ctx.beginPath();ctx.moveTo(51.8, 624.4);ctx.bezierCurveTo(50.8, 627.4, 51.8, 633.4, 53.8, 633.4);ctx.bezierCurveTo(57.0, 633.4, 135.8, 633.4, 145.8, 632.4);ctx.bezierCurveTo(146.8, 632.3, 147.8, 624.4, 144.8, 624.4);ctx.stroke();ctx.beginPath();ctx.moveTo(102.8, 632.4);ctx.bezierCurveTo(99.8, 628.4, 79.8, 617.5, 69.8, 619.4);ctx.bezierCurveTo(64.8, 620.4, 78.8, 602.4, 80.8, 611.4);ctx.bezierCurveTo(81.0, 612.4, 77.8, 608.4, 72.8, 617.4);ctx.bezierCurveTo(79.8, 615.4, 103.8, 613.4, 109.8, 632.4);ctx.bezierCurveTo(109.8, 634.4, 102.8, 632.4, 102.8, 632.4);ctx.closePath();ctx.fill();ctx.stroke();",
        },
      }, //end curvy
      "strong": {
        "shape": "ctx.beginPath();ctx.moveTo(141.8, 295.4);ctx.bezierCurveTo(80.3, 373.0, 97.4, 455.3, 95.5, 471.4);ctx.bezierCurveTo(93.6, 487.4, 80.4, 574.5, 79.4, 582.1);ctx.bezierCurveTo(65.2, 590.1, 22.5, 598.7, 21.7, 610.5);ctx.bezierCurveTo(29.3, 609.5, 15.1, 610.5, 24.5, 619.0);ctx.bezierCurveTo(23.6, 612.4, 34.7, 609.7, 32.1, 610.5);ctx.bezierCurveTo(22.7, 613.3, 20.8, 623.7, 32.1, 622.8);ctx.bezierCurveTo(23.6, 606.7, 49.0, 612.8, 47.3, 612.4);ctx.bezierCurveTo(19.8, 605.7, 30.2, 633.2, 48.3, 625.9);ctx.bezierCurveTo(69.9, 631.0, 107.5, 630.3, 130.1, 621.4);ctx.bezierCurveTo(137.1, 576.6, 179.5, 520.7, 162.0, 480.0);ctx.bezierCurveTo(161.8, 479.7, 161.9, 472.4, 162.1, 472.2);ctx.bezierCurveTo(192.0, 441.2, 189.2, 405.2, 196.8, 376.9);ctx.lineTo(203.4, 376.9);ctx.bezierCurveTo(210.0, 411.0, 227.1, 482.4, 242.2, 497.6);ctx.bezierCurveTo(245.1, 553.4, 264.9, 568.8, 268.7, 624.7);ctx.bezierCurveTo(276.6, 631.4, 284.9, 636.2, 293.1, 639.2);ctx.bezierCurveTo(295.2, 652.1, 328.3, 648.3, 311.3, 629.4);ctx.bezierCurveTo(315.1, 633.2, 317.9, 638.9, 315.1, 642.6);ctx.bezierCurveTo(317.9, 643.2, 333.1, 643.6, 323.6, 629.4);ctx.bezierCurveTo(326.1, 634.8, 328.3, 636.0, 325.5, 640.8);ctx.bezierCurveTo(337.8, 640.8, 337.7, 635.4, 334.0, 628.5);ctx.bezierCurveTo(332.8, 626.3, 336.9, 629.4, 335.9, 637.0);ctx.bezierCurveTo(342.5, 638.9, 350.1, 630.3, 343.5, 624.7);ctx.bezierCurveTo(345.4, 626.6, 346.3, 626.6, 346.3, 632.2);ctx.bezierCurveTo(353.9, 632.2, 351.6, 626.2, 352.0, 625.6);ctx.bezierCurveTo(343.5, 592.5, 323.6, 622.8, 329.3, 542.3);ctx.bezierCurveTo(332.8, 492.3, 309.4, 466.6, 303.7, 456.2);ctx.bezierCurveTo(302.8, 418.4, 303.8, 304.4, 240.3, 285.9);ctx.bezierCurveTo(204.8, 267.4, 165.8, 280.4, 141.8, 295.4);ctx.closePath();ctx.fillStyle = empty;ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
        "clothes": {
          "shorts": "ctx.beginPath();ctx.moveTo(137.8, 303.4);ctx.bezierCurveTo(121.8, 319.4, 94.8, 375.2, 94.8, 403.9);ctx.bezierCurveTo(126.2, 386.2, 188.0, 403.9, 187.1, 418.3);ctx.bezierCurveTo(196.3, 405.6, 195.4, 392.9, 196.3, 378.5);ctx.bezierCurveTo(188.0, 377.7, 180.6, 376.8, 176.9, 371.8);ctx.bezierCurveTo(182.4, 374.3, 183.4, 380.2, 202.7, 377.7);ctx.bezierCurveTo(202.7, 385.3, 207.3, 407.3, 215.7, 425.9);ctx.bezierCurveTo(235.0, 403.9, 284.8, 383.6, 303.3, 403.1);ctx.bezierCurveTo(301.5, 372.6, 287.8, 304.4, 243.8, 287.4);ctx.fill();ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(184.8, 313.4);ctx.bezierCurveTo(183.0, 330.3, 188.9, 363.3, 196.3, 376.0);ctx.bezierCurveTo(190.7, 364.2, 178.7, 365.9, 178.7, 365.9);ctx.bezierCurveTo(178.7, 365.9, 165.8, 349.4, 169.8, 313.4);ctx.lineWidth = thin;ctx.strokeStyle = dark;ctx.stroke();ctx.beginPath();ctx.moveTo(188.0, 379.4);ctx.bezierCurveTo(187.1, 383.6, 184.3, 399.7, 181.5, 405.6);ctx.stroke();ctx.beginPath();ctx.moveTo(234.1, 314.3);ctx.bezierCurveTo(240.6, 324.4, 261.9, 320.0, 264.5, 310.0);ctx.bezierCurveTo(286.8, 325.2, 289.4, 378.6, 286.7, 390.4);ctx.stroke();ctx.beginPath();ctx.moveTo(260.8, 297.4);ctx.bezierCurveTo(227.8, 316.4, 132.8, 313.4, 138.8, 297.4);ctx.lineWidth = thick;ctx.strokeStyle = dark;ctx.stroke();",
          "onepiece": "ctx.beginPath();ctx.moveTo(120.5, 328.7);ctx.bezierCurveTo(140.1, 328.3, 169.7, 376.9, 194.8, 376.9);ctx.bezierCurveTo(198.5, 376.9, 203.8, 376.9, 203.8, 376.9);ctx.bezierCurveTo(212.7, 365.2, 230.1, 313.5, 283.8, 328.4);ctx.lineWidth = thick;ctx.stroke();",
          "bikini": "ctx.beginPath();ctx.moveTo(120.5, 328.7);ctx.bezierCurveTo(140.1, 328.3, 169.7, 376.9, 194.8, 376.9);ctx.bezierCurveTo(198.5, 376.9, 203.8, 376.9, 203.8, 376.9);ctx.bezierCurveTo(212.7, 365.2, 230.1, 313.5, 283.8, 328.4);ctx.lineWidth = thick;ctx.stroke();ctx.beginPath();ctx.moveTo(131.8, 309.4);ctx.bezierCurveTo(161.9, 327.2, 204.6, 333.4, 266.8, 302.4);ctx.stroke();",
          "dress": "ctx.beginPath();ctx.moveTo(260.8, 298.4);ctx.bezierCurveTo(246.8, 309.4, 169.1, 316.5, 136.8, 304.4);ctx.bezierCurveTo(91.8, 347.4, 70.8, 466.4, 59.8, 518.4);ctx.bezierCurveTo(48.8, 570.4, 126.6, 536.7, 131.8, 552.4);ctx.bezierCurveTo(132.8, 555.4, 114.8, 567.4, 136.8, 576.4);ctx.bezierCurveTo(158.8, 585.4, 266.8, 589.4, 242.8, 555.4);ctx.bezierCurveTo(272.8, 552.4, 276.8, 586.4, 347.8, 558.4);ctx.bezierCurveTo(358.3, 554.2, 358.8, 328.4, 260.8, 298.4);ctx.closePath();ctx.fill();ctx.lineWidth = thick;ctx.stroke();ctx.beginPath();ctx.moveTo(140.8, 498.4);ctx.bezierCurveTo(148.8, 468.4, 164.8, 381.4, 164.8, 369.4);ctx.stroke();ctx.beginPath();ctx.moveTo(248.6, 529.9);ctx.bezierCurveTo(240.8, 501.4, 221.8, 404.4, 221.8, 380.4);ctx.stroke();",
          "tanktop":"", "tshirt":"",
        }, //end Clothes
        "sandals": {
          "none": "",
          "band": "ctx.beginPath();ctx.moveTo(20.8, 616.2);ctx.bezierCurveTo(17.0, 621.8, 21.7, 629.4, 21.7, 632.2);ctx.bezierCurveTo(35.5, 639.8, 119.7, 634.6, 126.5, 633.7);ctx.bezierCurveTo(133.4, 632.7, 132.4, 628.0, 131.5, 624.2);ctx.lineWidth = thick;ctx.stroke();ctx.beginPath();ctx.moveTo(62.4, 628.5);ctx.bezierCurveTo(64.3, 613.3, 38.7, 604.8, 27.4, 603.8);ctx.bezierCurveTo(27.4, 602.9, 53.6, 590.3, 57.7, 592.5);ctx.bezierCurveTo(68.8, 593.2, 96.5, 610.5, 95.5, 628.5);ctx.stroke();" + "ctx.beginPath();ctx.moveTo(268.7, 624.7);ctx.bezierCurveTo(267.8, 629.4, 267.9, 634.8, 270.6, 637.0);ctx.bezierCurveTo(280.1, 644.5, 294.8, 654.2, 302.8, 655.0);ctx.bezierCurveTo(318.8, 656.5, 337.1, 649.1, 352.0, 639.8);ctx.bezierCurveTo(355.8, 637.0, 356.7, 633.2, 353.7, 628.5);ctx.stroke();ctx.beginPath();ctx.moveTo(292.4, 638.9);ctx.bezierCurveTo(290.4, 626.7, 345.6, 614.9, 350.1, 620.9);ctx.bezierCurveTo(350.8, 621.8, 342.7, 607.3, 340.6, 606.7);ctx.bezierCurveTo(329.2, 603.1, 282.9, 606.7, 276.3, 630.3);ctx.stroke();",
          "flip": "ctx.beginPath();ctx.moveTo(20.8, 616.2);ctx.bezierCurveTo(17.0, 621.8, 21.7, 629.4, 21.7, 632.2);ctx.bezierCurveTo(35.5, 639.8, 119.7, 634.6, 126.5, 633.7);ctx.bezierCurveTo(133.4, 632.7, 132.4, 628.0, 131.5, 624.2);ctx.lineWidth = thick;ctx.stroke();ctx.beginPath();ctx.moveTo(41.6, 596.3);ctx.bezierCurveTo(42.5, 601.0, 36.9, 604.8, 44.4, 611.4);ctx.bezierCurveTo(58.3, 610.0, 77.7, 624.2, 76.6, 629.4);ctx.bezierCurveTo(89.7, 628.9, 89.8, 629.4, 89.8, 629.4);ctx.bezierCurveTo(90.5, 630.2, 76.6, 603.8, 51.0, 607.6);ctx.bezierCurveTo(48.2, 605.7, 48.2, 600.1, 48.2, 593.4);ctx.lineWidth = thick;ctx.stroke();" + "ctx.beginPath();ctx.moveTo(268.7, 624.7);ctx.bezierCurveTo(267.8, 629.4, 267.9, 634.8, 270.6, 637.0);ctx.bezierCurveTo(280.1, 644.5, 294.8, 654.2, 302.8, 655.0);ctx.bezierCurveTo(318.8, 656.5, 337.1, 649.1, 352.0, 639.8);ctx.bezierCurveTo(355.8, 637.0, 356.7, 633.2, 353.7, 628.5);ctx.stroke();ctx.beginPath();ctx.moveTo(282.0, 634.1);ctx.bezierCurveTo(288.6, 627.5, 305.3, 622.8, 312.2, 630.3);ctx.bezierCurveTo(317.9, 628.5, 327.4, 603.8, 346.3, 612.4);ctx.bezierCurveTo(346.3, 610.5, 340.6, 606.7, 339.7, 605.7);ctx.bezierCurveTo(331.6, 603.2, 319.4, 608.4, 307.3, 622.8);ctx.bezierCurveTo(290.5, 614.3, 282.0, 622.8, 275.3, 629.4);ctx.stroke();",
        }, //end sandals
      }, //end strong
    }, //end legs
  }// end body
};

////////////////   hair, face, body, clothes
////////////////  [ hair:[ hairback, bangs, dependents, special], face:[ shape, nose], body:[ neck, arms-left-right-sleeves, chest-clothing, waist-clothing?, legs-clothing], clothing options ]
var allOptions2 = [["Hair",["Back", "none", "kiki", "connie", "steven", "lapiz"],["Front", "none", "lapiz", "connie", "ribbon", "lapizSide", "roseSide"],["Sides","roseSide", "lapizSide", "jenny"],["jenny"]], ["Face",["Face Shape", "connie", "steven", "jenny", "rose", "lapiz"],["Nose", "connie", "steven", "jenny", "rose", "lapiz", "kiki"]], ["Body",["Arms", "thin", "strong", "thick"],["Chest", "narrow", "large"],["Waist", "thin"], ["Legs", "curvy", "strong"]], ["Beachwear",["Top", "onepiece", "bikini", "dress", "tanktop", "tshirt"],["Bottom", "onepiece", "bikini", "shorts", "dress"],["Sandals", "none", "band", "flip"]]];

var optionIndex2 = allOptions2.slice(0);

////////////////  [Hair-back, [hair-front], Faceshape, nose, Arms, chest, waist, legs, sandals, hair-dependent, [clothing]]

var nowPlaying = ["lapiz", ["none"], "steven", "connie", "thin", "narrow", "thin", "curvy", "none", "none", ["onepiece", "onepiece"]];

//var category;
var html= "";


var oldpassed = "HairOption";
function placeHTML(passed){
  switch (passed) {
    case 'hair':
      makeInviz(oldpassed);
      makeViz("HairOption");
      oldpassed= "HairOption";
      break;
    case 'face':
      makeInviz(oldpassed);
      makeViz("FaceOption");
      oldpassed= "FaceOption";
      break;
    case 'body':
      makeInviz(oldpassed);
      makeViz("BodyOption");
      oldpassed= "BodyOption";
      break;
    case 'clothes':
      makeInviz(oldpassed);
      makeViz("BeachwearOption");
      oldpassed= "BeachwearOption";
      break;
    default:
    ////// find new default /////
      category = ["oops"];
  }
}

function makeViz(clickedon){
  document.getElementById(clickedon).hidden = false;
  return;
}
function makeInviz(lastChoice){
  document.getElementById(lastChoice).hidden = true;
  return;
}
function chekin(theray, thething){
  for(e=0; e<theray.length; e++){
    if(theray[e]==thething){
      console.log("found match "+e);
      return e;
    }
  }
  return false;
}
function getHairCombo(){
  var hairComboCode = [];
  for(f=0; f<nowPlaying[1].length; f++){
    hairComboCode.push(visuals2.hair.bangs[nowPlaying[1][f]]);
  }
  return hairComboCode.join(" ");
}

function options(chosen){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var theDigits = chosen.match(/\d+/g);
  var category = theDigits[0];
  var label = theDigits[1];
  var item = chosen.match(/[a-zA-Z]+/)[0];  //take out digit
////////////////  [Hair-back, hair-front, Faceshape, nose, Arms, chest, waist, legs, sandals, hair-dependent, [clothing-top, clothing-bottom]]
  switch (category) {
    case "0":
          switch (label) {
            case "1":
              nowPlaying[0]= item;
              break;
            case "2":
                var rip= chekin(nowPlaying[1], item);
                if(item=="none"){
                  nowPlaying[1]= ["none"];
                }
                else if(rip!==false){
                  nowPlaying[1].splice(rip,1);
                  if(item=="roseSide" || item=="lapizSide" || item=="jenny"){
                    nowPlaying[9] = "none";
                  }
                }
                else{
                  nowPlaying[1].push(item);
                  if(item=="roseSide" || item=="lapizSide" || item=="jenny"){
                    nowPlaying[9] = item;
                  }
                  //else{
                    //nowPlaying[9] = "none";
                  //}
                }
              break;
            case "3":
              break;
            case "4":
              break;
          }
      break;
    case '1':
          switch (label) {
            case "1":
              nowPlaying[2]= item;
              break;
            case "2":
              nowPlaying[3] = item;
              break;
          }
      break;
    case '2':
          switch (label) {
            case "1":
              nowPlaying[4]= item;
              break;
            case "2":
              nowPlaying[5] = item;
              break;
            case "3":
              nowPlaying[6] = item;
              break;
            case "4":
              nowPlaying[7] = item;
              break;
          }
      break;
    case '3':
          switch (label) {
            case "1":
              nowPlaying[10][0]= item;
              break;
            case "2":
              nowPlaying[10][1]= item;
              break;
            case "3":
              nowPlaying[8] = item;
              break;
          }
      break;
    default:
    ////// find new default /////
      category = ["oops"];
  }
  draw(ctx);
}
function trafficControl(){
  var clicked = this.getAttribute('id');
  if(clicked == "clear"){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ////////////   set up starting/generic   //////////////////////////////
    nowPlaying = ["lapiz", ["none"], "steven", "connie", "thin", "narrow", "thin", "curvy", "none", "none", ["onepiece", "onepiece"]];
    //////////  [Hair-back, [hair-front], Faceshape, nose, Arms, chest, waist, legs, sandals, hair-dependent, [clothing]]
    draw(ctx);
  }
  else if(clicked == "submit"){
    var front= "";
    for(f=0; f<nowPlaying[1].length; f++){
      front+= nowPlaying[1][f]+'-';
    }
    var url = 'beach.html?hb=' +encodeURIComponent(nowPlaying[0]+' ') +'hf='+encodeURIComponent(front+' ') +'fa='+encodeURIComponent(nowPlaying[2]+' ') +'no='+encodeURIComponent(nowPlaying[3]+' ') +'ar='+encodeURIComponent(nowPlaying[4]+' ') +'sa='+encodeURIComponent(nowPlaying[8]+' ') +'to='+encodeURIComponent(nowPlaying[10][0]+' ') +'bo='+encodeURIComponent(nowPlaying[10][1]+' ');
    console.log(url);
    document.location.href = url;
  }
  else if(clicked == "hair" || clicked == "face" || clicked == "body" || clicked == "clothes"){
    placeHTML(clicked);
  }
  else{
    options(clicked);
  }
}



//onload assembles html & listeners
var section = [];
/////   create button options   //////////////////
for(i=0; i<optionIndex2.length; i++){
  for(j=0; j<optionIndex2[i].length; j++){
    if(j==0){
     html += '<div id="' +optionIndex2[i][j]+'Option'+'">';
     section.push(optionIndex2[i][j]+'Option');
    }
    else{
      for(a=0; a<optionIndex2[i][j].length; a++){
        if(a==0){
          optionIndex2[i][j][a]= '<h3 id="' + optionIndex2[i][j][a] + i+'-'+j + '">' + optionIndex2[i][j][a] + i+'-'+j +'</h3>';
          html += optionIndex2[i][j][a];
        }
        else{
          optionIndex2[i][j][a]= '<div class="btn" id="' + optionIndex2[i][j][a] + i+'-'+j + '">' + optionIndex2[i][j][a] + i+'-'+j +'</div>';
           html += optionIndex2[i][j][a];
        }
      }//for
    }//else
  }//for j
html+= '</div><!-- end div -->';
}//for i
document.getElementById('options').innerHTML += html;
for(c=1; c<section.length; c++){
  makeInviz(section[c]);
}
////// add listeners to EVERY button on screen --not just options    ////////////////////
var opButton= document.getElementsByClassName("btn");
for (var i = 0; i < opButton.length; i++) {
    opButton[i].addEventListener('click', trafficControl, false);
}

function draw(ctx) {
  ////////////////  [Hair-back, hair-front, Faceshape, nose, Arms, chest, waist, legs, sandals, [clothing]]
  //visuals2.hair.bangs[nowPlaying[1][0]]
  eval(visuals2.body.arms.left[nowPlaying[4]].shape + visuals2.body.arms.left[nowPlaying[4]][nowPlaying[10][0]] + visuals2.body.legs[nowPlaying[7]].shape + visuals2.body.legs[nowPlaying[7]].sandals[nowPlaying[8]] + visuals2.body.legs[nowPlaying[7]].clothes[nowPlaying[10][1]] + visuals2.hair.back[nowPlaying[0]] + visuals2.body.waist[nowPlaying[6]].shape + visuals2.body.waist[nowPlaying[6]][nowPlaying[10][0]] + visuals2.body.chest.fm[nowPlaying[5]].shape + visuals2.body.chest.fm[nowPlaying[5]][nowPlaying[10][0]] + visuals2.body.neck[nowPlaying[4]] + visuals2.body.arms.right[nowPlaying[4]].shape + visuals2.body.arms.right[nowPlaying[4]][nowPlaying[10][0]] + visuals2.hair.dependent[nowPlaying[9]] + visuals2.face.shape[nowPlaying[2]] + visuals2.face.nose[nowPlaying[3]] + getHairCombo());
}
draw(ctx);
