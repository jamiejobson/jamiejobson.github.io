function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phoneNumber");
  var errorMessage = document.getElementById("error-message");

  var phoneNumberPattern = /^\d{10}$/;

  if (phoneNumberPattern.test(phoneNumberInput.value)) {
    errorMessage.textContent = "";
    alert("Phone number is valid: " + phoneNumberInput.value);
  } else {
    errorMessage.textContent = "Please enter a valid 10-digit phone number.";
  }
}

function generateRandomNumber() {
  var textBox = document.getElementById("phoneNumber");

  var randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

  textBox.value = randomNumber;
}

window.onload = function() {
  generateRandomNumber();
};

function generateRandomNumber() {
  var textBox = document.getElementById("phoneNumber");
  
 
  var randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

  textBox.value = randomNumber;
}

document.getElementById("generateButton").addEventListener("click", generateRandomNumber);


function moveElements() {
  var textBox = document.getElementById("phoneNumber");
  var submitButton = document.querySelector('.floating-box');

  
  var shouldAppearTextBox = Math.random() > 0.5;
  var shouldAppearSubmitButton = Math.random() > 0.5;

  if (shouldAppearTextBox) {
    
    var maxX = window.innerWidth - textBox.offsetWidth;
    var maxY = window.innerHeight - textBox.offsetHeight;

    var targetX = Math.random() * maxX;
    var targetY = Math.random() * maxY;

    
    var speed = 0.005; 
    var currentX = parseFloat(textBox.style.left) || targetX; 
    var currentY = parseFloat(textBox.style.top) || targetY; 

    var newX = currentX + (targetX - currentX) * speed;
    var newY = currentY + (targetY - currentY) * speed;

    
    textBox.style.left = newX + "px";
    textBox.style.top = newY + "px";

    
    textBox.style.visibility = "visible";
  } else {
    
    textBox.style.visibility = "hidden";
  }

  if (shouldAppearSubmitButton) {
    
    var maxXButton = window.innerWidth - submitButton.offsetWidth;
    var maxYButton = window.innerHeight - submitButton.offsetHeight;

    var targetXButton = Math.random() * maxXButton;
    var targetYButton = Math.random() * maxYButton;

   
    var speedButton = 0.005; 
    var currentXButton = parseFloat(submitButton.style.left) || targetXButton; 
    var currentYButton = parseFloat(submitButton.style.top) || targetYButton; 

    var newXButton = currentXButton + (targetXButton - currentXButton) * speedButton;
    var newYButton = currentYButton + (targetYButton - currentYButton) * speedButton;


    submitButton.style.left = newXButton + "px";
    submitButton.style.top = newYButton + "px";


    submitButton.style.visibility = "visible";
  } else {
   
    submitButton.style.visibility = "hidden";
  }
}


setInterval(moveElements, 1000); 


function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phoneNumber");
  var errorMessage = document.getElementById("error-message");

  var phoneNumberPattern = /^\d{10}$/;

  if (phoneNumberPattern.test(phoneNumberInput.value)) {
    errorMessage.textContent = "";
    alert("Phone number is valid: " + phoneNumberInput.value);
  } else {
    errorMessage.textContent = "Please enter a valid 10-digit phone number.";
  }
}

function moveElements() {
  var floatingBoxes = document.querySelectorAll('.floating-box');

  floatingBoxes.forEach(function(box) {
    var maxX = window.innerWidth - box.offsetWidth;
    var maxY = window.innerHeight - box.offsetHeight;

  
    var targetX = Math.random() * maxX;
    var targetY = Math.random() * maxY;

   
    var speed = 0.05;
    var currentX = parseFloat(box.style.left) || 0;
    var currentY = parseFloat(box.style.top) || 0;

    var newX = currentX + (targetX - currentX) * speed;
    var newY = currentY + (targetY - currentY) * speed;

    
    box.style.left = newX + "px";
    box.style.top = newY + "px";
  });
}

setInterval(moveElements, 30); 


// ChatGPT was a great help to me during this project, mostly with the javascript in general and the
// animation of the moving submit buttons. 