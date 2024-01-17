document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas and context
    const canvas = document.getElementById("svgCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size based on viewport dimensions
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Create a new Image object
    const svgImage = new Image();

    // Replace 'path/to/your/svg/image.svg' with the path to your SVG image
    svgImage.src = './your_campus_map (1).svg';

    // Once the image is loaded, draw it on the canvas
    svgImage.onload = function() {
        // Rotate the canvas by -90 degrees (clockwise)
        ctx.rotate(-Math.PI / 2);

        // Draw the SVG image onto the canvas
        ctx.drawImage(svgImage, -canvasHeight, 0, canvasHeight, canvasWidth);

        // Reset the canvas rotation
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    };

    // Handle window resize events to dynamically update canvas size
    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Rotate the canvas by -90 degrees (clockwise)
        ctx.rotate(-Math.PI / 2);

        // Redraw the SVG image when the canvas size changes
        ctx.drawImage(svgImage, -canvas.height, 0, canvas.height, canvas.width);

        // Reset the canvas rotation
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    });
});
