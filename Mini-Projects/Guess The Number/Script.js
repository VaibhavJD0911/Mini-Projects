let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const input = document.getElementById("userguess");
const button = document.getElementById("submitBtn");
const messageArea = document.getElementById("message");

button.addEventListener("click", function () {
  const userGuess = Number(input.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    showMessage("❗ Please enter a number between 1 and 100.", "yellow");
    return;
  }

  attemptsLeft--;

  if (userGuess === secretNumber) {
    showMessage(`🎉 Correct! You guessed the number ${secretNumber}!`, "lime");
    resetGame();
  } else if (attemptsLeft === 0) {
    showMessage(`❌ Game Over! The number was ${secretNumber}.`, "red");
    resetGame();
  } else if (userGuess < secretNumber) {
    showMessage(`📉 Too low! Attempts left: ${attemptsLeft}`, "#ffa500");
  } else {
    showMessage(`📈 Too high! Attempts left: ${attemptsLeft}`, "#ffa500");
  }

  input.value = "";
});

function showMessage(msg, color) {
  messageArea.textContent = msg;
  messageArea.style.color = color;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  setTimeout(() => {
    showMessage("🔁 New game started! Try again...", "#0ff");
  }, 2000);
}
