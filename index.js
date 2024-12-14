// Select all drum buttons
const drumButtons = document.querySelectorAll(".drum");

// Add click event listener to each drum button
drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML; 
        playSound(buttonInnerHTML); 
        animateButton(buttonInnerHTML); 
    });
});


document.addEventListener("keydown", function (event) {
    const key = event.key; 
    playSound(key); 
    animateButton(key); 
});
function playSound(key) {
    let soundFile;
    switch (key) {
      case "w":
        soundFile = "sounds/crash.mp3";
        break;
      case "a":
        soundFile = "sounds/kick-bass.mp3";
        break;
      case "s":
        soundFile = "sounds/snare.mp3";
        break;
      case "d":
        soundFile = "sounds/tom-1.mp3";
        break;
      case "j":
        soundFile = "sounds/tom-2.mp3";
        break;
      case "k":
        soundFile = "sounds/tom-3.mp3";
        break;
      case "l":
        soundFile = "sounds/tom-4.mp3";
        break;
      default:
        console.log("Invalid key pressed: " + key);
        return;
    }

    // Play the sound
    const audio = new Audio(soundFile);
    audio.play();
}

// Function to animate the button
function animateButton(key) {
    const activeButton = document.querySelector(`.${key}`); // Select the button by class name

    if (activeButton) {
        activeButton.classList.add("pressed"); // Add the "pressed" CSS class

        // Remove the "pressed" class after 100ms
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}