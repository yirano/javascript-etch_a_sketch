let canvas = document.getElementById('canvas');
let pixels;


for (let i = 0; i < 44; i++) {
  pixels = document.createElement('div');
  pixels.style.cssText = "width: 16px; height: 16px; background-color: black; float: left;";
  canvas.appendChild(pixels);
  for (let j = 0; j < 28; j++) {
    pixels = document.createElement('div');
    pixels.style.cssText = "width: 16px; height: 16px; background-color: black; float:left;";
    canvas.appendChild(pixels);
  }
}

function entered(event) {
  event.style.cssText = "width: 16px; height: 16px; background-color: #fff; float:left;";
  console.log(event);
}

console.log(pixels);