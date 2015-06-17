
var img = new Image();
img.src = 'images/mypicture.JPG';
img.onload = function() {
	draw(this);
};

function draw(img) {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	img.style.display = 'none';
	var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);

	var data = imageData.data;

	for (var i = 0; i < data.length; i += 4) {
      data[i]     = data[i] - 30;     // red
      data[i + 1] = data[i + 1]; // green
      data[i + 2] = data[i + 2] + 150; // blue
      data[i + 3] = data[i + 3]/1.5;
      }

  ctx.putImageData(imageData, 460, 0);
}




// var img = new Image();
// img.src = 'images/mypicture.JPG';
// img.onload = function() {
//   draw(this);
// };

// function draw(img) {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   ctx.drawImage(img, 0, 0);
//   img.style.display = 'none';
//   var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
//   var data = imageData.data;

//     for (var i = 0; i < data.length; i += 4) {
//       data[i]     = 255 - data[i];     // red
//       data[i + 1] = 255 - data[i + 1]; // green
//       data[i + 2] = 255 - data[i + 2]; // blue
//     }
//     ctx.putImageData(imageData, 460, 0);
// }


