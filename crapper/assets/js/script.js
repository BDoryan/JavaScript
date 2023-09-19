const canvas = document.getElementById("crapper");
const context = canvas.getContext('2d');
const image = new Image();

const offset = [0, 0];

image.onload = () => {
    context.drawImage(image, offset[0],offset[1]);
}
image.src = "./assets/img/portrait_femme.jpg";

function clearCanvas() {
    canvas.clearRect(0, 0, canvas.width, canvas.height);
}

var isDragging = false;
var lastX, lastY;

canvas.style.cursor = "grab";

canvas.addEventListener("mousedown", function(event) {
    isDragging = true;
    lastX = event.clientX - canvas.getBoundingClientRect().left;
    lastY = event.clientY - canvas.getBoundingClientRect().top;
    canvas.style.cursor = "dragging";
});

canvas.addEventListener("mousemove", function(event) {
    if (isDragging) {
        var currentX = event.clientX - canvas.getBoundingClientRect().left;
        var currentY = event.clientY - canvas.getBoundingClientRect().top;

        /*
        // Dessinez ici, par exemple, une ligne entre lastX, lastY et currentX, currentY
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(currentX, currentY);
        context.stroke();
        */

        lastX = currentX;
        lastY = currentY;
    }
});

canvas.addEventListener("mouseup", function() {
    canvas.style.cursor = "grab";
});