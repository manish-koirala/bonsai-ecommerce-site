// A script to control the slider for the page.

// Category : Aesthetic
var cat1_row1 = document.getElementsByClassName('category-aesthetic-row1')[0];
var cat1_row2 = document.getElementsByClassName('category-aesthetic-row2')[0];

var cat1_leftSlider = document.getElementById('category-aesthetic').firstElementChild;
var cat1_rightSlider = document.getElementById('category-aesthetic').lastElementChild;

// Left Sliding Function
cat1_leftSlider.addEventListener('click',function(){
    cat1_row1.classList.remove('hidden');
    cat1_row2.classList.add('hidden');
    cat1_rightSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat1_leftSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});
// Right Sliding Function
cat1_rightSlider.addEventListener('click',function(){
    cat1_row1.classList.add('hidden');
    cat1_row2.classList.remove('hidden');
    cat1_leftSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat1_rightSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});

// Category : Gardening
var cat2_row1 = document.getElementsByClassName('category-gardening-row1')[0];
var cat2_row2 = document.getElementsByClassName('category-gardening-row2')[0];

var cat2_leftSlider = document.getElementById('category-gardening').firstElementChild;
var cat2_rightSlider = document.getElementById('category-gardening').lastElementChild;

// Left Sliding Function
cat2_leftSlider.addEventListener('click',function(){
    cat2_row1.classList.remove('hidden');
    cat2_row2.classList.add('hidden');
    cat2_rightSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat2_leftSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});
// Right Sliding Function
cat2_rightSlider.addEventListener('click',function(){
    cat2_row1.classList.add('hidden');
    cat2_row2.classList.remove('hidden');
    cat2_leftSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat2_rightSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});

// Category : Fruits
var cat3_row1 = document.getElementsByClassName('category-fruits-row1')[0];
var cat3_row2 = document.getElementsByClassName('category-fruits-row2')[0];

var cat3_leftSlider = document.getElementById('category-fruits').firstElementChild;
var cat3_rightSlider = document.getElementById('category-fruits').lastElementChild;

// Left Sliding Function
cat3_leftSlider.addEventListener('click',function(){
    cat3_row1.classList.remove('hidden');
    cat3_row2.classList.add('hidden');
    cat3_rightSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat3_leftSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});
// Right Sliding Function
cat3_rightSlider.addEventListener('click',function(){
    cat3_row1.classList.add('hidden');
    cat3_row2.classList.remove('hidden');
    cat3_leftSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat3_rightSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});

// Category : Favourites
var cat4_row1 = document.getElementsByClassName('category-favourites-row1')[0];
var cat4_row2 = document.getElementsByClassName('category-favourites-row2')[0];

var cat4_leftSlider = document.getElementById('category-favourites').firstElementChild;
var cat4_rightSlider = document.getElementById('category-favourites').lastElementChild;

// Left Sliding Function
cat4_leftSlider.addEventListener('click',function(){
    cat4_row1.classList.remove('hidden');
    cat4_row2.classList.add('hidden');
    cat4_rightSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat4_leftSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});
// Right Sliding Function
cat4_rightSlider.addEventListener('click',function(){
    cat4_row1.classList.add('hidden');
    cat4_row2.classList.remove('hidden');
    cat4_leftSlider.style.boxShadow = "0px 0px 4px 1px grey";
    cat4_rightSlider.style.boxShadow = "0px 0px 4px 1px rgb(196, 196, 196)";
});