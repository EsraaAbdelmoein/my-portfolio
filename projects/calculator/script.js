// Load click sound
const clickSound = new Audio('click-sound.mp3');

// Play sound
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// Add value to display
function appendToDisplay(value) {
  playSound();
  document.getElementById("display").value += value;
}

// Clear display
function clearDisplay() {
  playSound();
  document.getElementById("display").value = "";
}

// Calculate result
function calculate() {
  playSound();
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
