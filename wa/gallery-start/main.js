const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["images/pic1.jpg", 
                "images/pic2.jpg", 
                "images/pic3.jpg", 
                "images/pic4.jpg", 
                "images/pic5.jpg"]


/* Declaring the alternative text for each image file */

const altText = {
    "image1": "A human eye",
    "image2": "just a rock",
    "image3": "flower",
    "image4": "hieroglyph",
    "image5": "butterfly",
}            

//console.log(altText["Image4"])

/* Looping through images */

//for (let i = 0; i < images.length; i++) {}

for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
    }

/* Wiring up the Darken/Lighten button */
