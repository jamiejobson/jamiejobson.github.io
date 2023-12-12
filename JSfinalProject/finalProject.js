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

      var newX = Math.floor(Math.random() * maxX);
      var newY = Math.floor(Math.random() * maxY);

      box.style.left = newX + "px";
      box.style.top = newY + "px";
    });
  }

  setInterval(function() {
    moveElements();
  }, 3000);


  
