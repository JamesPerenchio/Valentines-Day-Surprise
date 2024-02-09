document.addEventListener("DOMContentLoaded", function() {
    // Function to animate text
    function animateText(id, index) {
      var element = document.getElementById(id);
      element.classList.remove("hidden");
  
      setTimeout(function() {
        element.classList.remove("fade-in-out");
        setTimeout(function() {
          element.classList.add("fade-in-out");
          element.classList.add("hidden");
          index++;
          if (index < 4) {
            animateText((index + 1) + "text", index);
          } else {
            // All texts have been shown, show the gif and calendar

            document.getElementById("calendar-container").classList.remove("hidden");
  
            
          }
        }, 2000); // Adjust this value based on the pause duration
      }, 2000); // Adjust this value based on the pause duration
    }
  
    // Function to start animation
    function startAnimation() {
      animateText("1text", 0); // Initial animation
  
      // Hide the "Press to Start" button after it's pressed
      var startButton = document.getElementById("startButton");
      if (startButton) {
        startButton.style.display = "none";
        document.getElementById("backgroundMusic").play();
        document.getElementById("hiddenImage").style.display = "block";
      }
    }
  
    // Function to check the selected date
    function checkDate() {
      var selectedDate = document.getElementById('selectedDate').value;
      var warningMessage = document.getElementById('warningMessage');
      var formContainer = document.getElementById('form-container');
  
      if (selectedDate === '2024-02-14') {
        // Correct date selected
        warningMessage.classList.add('hidden');
        formContainer.classList.remove('hidden');
      } else {
        // Wrong date selected
        warningMessage.classList.remove('hidden');
        formContainer.classList.add('hidden');
      }
    }
  
    // Function to submit the form
    function submitForm() {
      confirm("Thank you for your response! Your input has been received. Here's a reward for your participation.");
      
      // You can add any further actions or page transitions here if needed
    }
  
    // Assign the functions to global variables for access from HTML
    window.startAnimation = startAnimation;
    window.checkDate = checkDate;
    window.submitForm = submitForm;
  });
  
  
  
  
  
  
  

  


  


$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

function addConfetti() {
    // Configure confetti settings
    const config = {
        angle: 360,
        spread: 360,
        startVelocity: 45,
        elementCount: 400,
        decay: 0.9,
        colors: ['#FFD700', '#FF6347', '#00BFFF', '#FF4500', '#FF69B4'],
    };

    // Trigger confetti burst
    confetti(config);
    
}
document.getElementById('open').addEventListener('change', function () {
    if (this.checked) {
        addConfetti();
        showImg2();
    }
});

const target =document.getElementById("img2");
function showImg2(){
    img2.style.display ='block';
}
function hideImg2(){
    img2.style.display ='none';
}


