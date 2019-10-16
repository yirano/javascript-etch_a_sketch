let canvas = document.getElementById('canvas');
let pixels;


for (let i = 0; i < 44; i++) {
  pixels = document.createElement('div');
  pixels.classList.add = "pixels"
  pixels.style.cssText = "width: 16px; height: 16px; background-color: black; float: left;";
  canvas.appendChild(pixels);
  for (let j = 0; j < 28; j++) {
    pixels = document.createElement('div');
    pixels.classList.add("pixels")
    pixels.style.cssText = "width: 16px; height: 16px; background-color: black; float:left;";
    canvas.appendChild(pixels);
  }
}

function entered(event) {
  console.log(event.srcElement.className);
  event.target.style.cssText = "width: 16px; height: 16px; background-color: white; float:left;";
}

document.addEventListener('click', entered)

console.log(document.querySelectorAll('.pixels').length);