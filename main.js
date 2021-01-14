let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess <= min || guess >= max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    } else {
        clearMessage();
    }

    if (guess === winningNum) {
        guessInput.disabled = true;
        guessInput.style.borderColor = "green";
        setMessage(`${winningNum} is correct! YOU WIN`, "green");
    } else if (
        guess !== winningNum &&
        guessInput.value !== "" &&
        guess < max &&
        guess > min
    ) {
        setMessage(`${guess} is wrong! Try again`, "red");
    }
});

guessInput.addEventListener("click", function () {
    guessInput.value = "";
    clearMessage();
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function clearMessage() {
    message.textContent = "";
}
