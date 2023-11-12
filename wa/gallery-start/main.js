const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["images/hVCZDQk.jpg", 
                "images/l6WyL0fZW8wkNEzZLIRWUFQdMEk.jpg", 
                "images/a1wq1dkry8da1.jpg", 
                "images/FCLlyA6WUAMrehu.jpg", 
                "images/6026190045_482f13c02b.jpg"]

                //change images and edit alt text!!!!

/* Declaring the alternative text for each image file */

const altText = {
    "image1": "Godzilla vs Biollante",
    "image2": "Godzilla vs Mothra (featuring Battra)",
    "image3": "Godzilla vs Destoroyah",
    "image4": "Godzilla vs Hedorah",
    "image5": "Godzilla vs MechaGodzilla",
}            

//console.log(altText["Image4"])

/* Looping through images */

//for (let i = 0; i < images.length; i++) {}

for(let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);
function displayImage() {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', altText['image'+(i+1)]);
}
    newImage.addEventListener("click", displayImage)
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", ()=> {
    if (btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        return
    }

    else if (btn.getAttribute("class") == "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        return
    }
})


