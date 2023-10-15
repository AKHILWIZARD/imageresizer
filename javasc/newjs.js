
var image = document.getElementById('picture');
var link = document.getElementById('newtab');

var imageWidthInput = document.getElementById('imageWidth');
var imagePercentageInput = document.getElementById('imagePercentage');
var imageHeightInput = document.getElementById('imageheight');
var heightPercentageInput = document.getElementById('heightPercentage');
var linkInput = document.getElementById('link');
var flexCheck = document.getElementById('flexCheck');


function autochange(){
    image.style.width = imageWidthInput.value + 'px';
    image.style.width = imagePercentageInput.value + '%';
    image.style.height = imageHeightInput.value + 'px';
    image.style.height = heightPercentageInput.value + '%';
    link.href = linkInput.value;
    link.target = flexCheck.checked ? '_blank' : '';
}

