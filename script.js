document.addEventListener("DOMContentLoaded", function () {
    // Function to animate text
    function animateText(id, index) {
      var element = document.getElementById(id);
      element.classList.remove("hidden");
  
      setTimeout(function () {
        element.classList.remove("fade-in-out");
        setTimeout(function () {
          element.classList.add("fade-in-out");
          element.classList.add("hidden");
          index++;
          if (index < 5) {
            animateText((index + 1) + "text", index);
          } else {
            // All texts have been shown, show the gif and calendar
            document.getElementById("hiddenImage").style.display = "block";
            document.getElementById("calendar-container").classList.remove("hidden");
          }
        },2000); // Adjust this value based on the pause duration ?
      }, 2000); // Adjust this value based on the pause duration ?
    }
  
    // Function to start animation
    function startAnimation() {
      // Start playing the background music
      var audio = document.getElementById("backgroundMusic");
  
      // Check if the audio is currently paused or playing
      var isAudioPlaying = !audio.paused;
  
      // Check if there's a stored playback position
      var storedTime = localStorage.getItem('audioPlaybackPosition');
      if (storedTime && !isAudioPlaying) {
        audio.currentTime = parseFloat(storedTime);
        console.log("Resuming audio playback from stored position:", storedTime);
      } else {
        console.log("Starting audio playback from the beginning.");
      }
  
      if (!isAudioPlaying) {
        audio.play();
      }
  
      animateText("1text", 0); // Initial animation
  
      // Hide the text and button after "Press to Start" is pressed
      var textElement = document.getElementById("page1txt");
      var startButton = document.getElementById("startButton");
  
      if (textElement && startButton) {
        document.getElementById("hiddenImage").style.display = "block";
        textElement.style.display = "none";
        startButton.style.display = "none";
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
      // Display the Valentine's Day card after the form is submitted
      animateValentinesCard();
    }
  
    // Save the current playback position when the tab is not visible
    document.addEventListener('visibilitychange', function () {
      var audio = document.getElementById("backgroundMusic");
      if (document.hidden) {
        localStorage.setItem('audioPlaybackPosition', audio.currentTime.toString());
        console.log("Saving current playback position:", audio.currentTime);
      }
    });
  
    // Use popstate event to detect back/forward button usage
    window.addEventListener('popstate', function (event) {
      var audio = document.getElementById("backgroundMusic");
      audio.play();
    });
  
    // Assign the functions to global variables for access from HTML
    window.startAnimation = startAnimation;
    window.checkDate = checkDate;
    window.submitForm = submitForm;
  });
  
  // Function to start the Valentine's Day card animation
  function animateValentinesCard() {
    var valentinesCard = document.getElementById("valentinesDayCard");
    valentinesCard.style.display = "block";
    valentinesCard.classList.remove("hidden");
  
    // Add the fade-in class to initiate the animation
    valentinesCard.classList.add("fade-in");
  }

  
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
  document.getElementById('hiddenImage').addEventListener('click', function () {
    addConfetti();
});

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
});


  


function addConfetti(event) {
    const config = {
        angle: 360,
        spread: 360,
        startVelocity: 45,
        elementCount: 400,
        colors: ['#FFD700', '#FF6347', '#00BFFF', '#FF4500', '#FF69B4'],
    };

    // Trigger confetti burst
    confetti(config);
}


  document.getElementById('open').addEventListener('change', function () {

    if (this.checked) {
        addConfetti();
    }
});


