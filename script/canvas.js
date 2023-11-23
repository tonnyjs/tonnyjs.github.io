document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#130E1F'); // Orange
    gradient.addColorStop(0.5, '#3A0C34'); // Pink
    gradient.addColorStop(1, '#1e90ff'); // Blue

    //Create an Image object
    const img = new Image();

    //Set the source of the image
    img.src = "https://cdn.pixabay.com/photo/2012/04/24/14/20/pencil-40237_640.png";

    //Wait for the image to load
    img.onload = function () {
        //Draw the image onto the canvas
        ctx.drawImage(img, 300, 200, 300, 300);
    }
});