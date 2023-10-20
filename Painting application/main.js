const canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

context.fillStyle = "white";
context.fillRect(0, 0, 500, 500);
context.fillStyle = "black";

let brushColor = "black";
let brushSize = 3;

document.getElementById("color").addEventListener("change", function () {
	brushColor = this.value;
});
console.log(brushColor);
document.getElementById("thickness").addEventListener("change", function () {
	brushSize = this.value;
});
console.log(brushSize);

let painting = false;

function paintingStart() {
	painting = true;
    draw(e)
}

function paintingEnd() {
	painting = false;
	context.beginPath();
}
function draw(e) {
	if (painting == false) return;
	let x = e.clientX;
	let y = e.clientY - canvas.offsetTop;

	context.lineWidth = brushSize;

	context.lineCap = "round";
	context.lineTo(x, y);
	context.strokeStyle = brushColor;
	context.stroke();
}

canvas.addEventListener("mousedown", paintingStart);
canvas.addEventListener("mouseup", paintingEnd);
canvas.onmousemove=draw


