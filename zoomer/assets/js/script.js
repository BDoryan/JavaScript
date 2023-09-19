const canvas = document.getElementById("crapper");
const context = canvas.getContext('2d');
const imageViewer = document.getElementById("imageViewer");
const image = new Image();

const offset = [0, 0];

image.onload = () => {
    context.drawImage(image, offset[0], offset[1]);
}
image.src = "./assets/img/portrait_femme.jpg";
function drawImage() {
    context.drawImage(image, offset[0], offset[1]);
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

var isDragging = false;
var offX, offY;
var lastX, lastY;

imageViewer.addEventListener("mousemove", (event) => {
    var currentX = event.clientX - canvas.getBoundingClientRect().left;
    var currentY = event.clientY - canvas.getBoundingClientRect().top;

    /*
            // Dessinez ici, par exemple, une ligne entre lastX, lastY et currentX, currentY
            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(currentX, currentY);
            context.stroke();
            */

    clearCanvas()
    offset[0] = -currentX + 150;
    offset[1] = -currentY - image.height + 150;
   
    /**
     * Ne pas sortir
     */
    if (offset[0] > 0)
        offset[0] = 0
    if (offset[1] > 0)
        offset[1] = 0
    if (image.width - currentX < 150)
        offset[0] = -(image.width - 300);
    if (currentY > -150)
        offset[1] = -(image.height - 300);
    console.log(currentY)
    document.getElementById("current_x").textContent = currentX;
    document.getElementById("current_y").textContent = currentY;
    document.getElementById("x").textContent = offset[0];
    document.getElementById("y").textContent = offset[1];
    document.getElementById("width").textContent = image.width;
    document.getElementById("height").textContent = image.height;
    //offset[1] = offY + currentY;
    drawImage();

    lastX = currentX;
    lastY = currentY;
});