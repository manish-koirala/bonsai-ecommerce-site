// A script designed for the main content slides on the top of the products page.

// Array to store slide images names
var slideImages = ["images/pictures/bonsai_1.jpg","images/pictures/bonsai_2.jpg","images/pictures/bonsai_3.jpg"];

// Display Circles for the Index of Slide
let c01 = document.getElementById('c01');
let c02 = document.getElementById('c02');
let c03 = document.getElementById('c03');
let circles = [c01, c02, c03];

// Select the left and right buttons and the container.
var leftSlider = document.querySelector('.left-slider-container');
var rightSlider = document.querySelector('.right-slider-container');
var containerForSlides = document.getElementById('container1');

// Assigning the default index to start along with content and image for slides.
var x = 1;
containerForSlides.style.backgroundImage = 'url('+ slideImages[1] +')';
circles[1].style.backgroundColor = "white";

// Assigning event listeners to the left and right slider buttons.
rightSlider.addEventListener('click', rightSlide);
leftSlider.addEventListener('click', leftSlide);


// Defining functions:
/* The function does the following:
1. Resets circle opacity
2. Changes the background to the next image.
3. Sets a white color on the circle that represents the corresponding image.
*/
function rightSlide() {
    resetCircleOpacity();
    x += 1;
    if (x === slideImages.length) {
        x = 0;
    }

    containerForSlides.style.backgroundImage = 'url('+ slideImages[x] +')';
    circles[x].style.backgroundColor = "white";
}

/* The function does the following:
1. Resets circle opacity
2. Changes the background to the previous image.
3. Sets a white color on the circle that represents the corresponding image.
*/
function leftSlide() {
    resetCircleOpacity();
    if (x > 0){
        x -= 1;
    }
    else {
        x = 2;
    }
    containerForSlides.style.backgroundImage = 'url('+ slideImages[x] +')';
    circles[x].style.backgroundColor = "white";
}

// A function that resets every circles opacity to match the default.
function resetCircleOpacity() {
    for (var i=0; i<slideImages.length; i++) {
        circles[i].style.backgroundColor = "rgba(202, 199, 199, 0.5)";
    }
}