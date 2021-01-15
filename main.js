let min = 1;
let max = 15;
let winningNum = getRandomInt(min, max);
let guessesLeft = 3;

const game = document.querySelector("#game");
const maxNum = document.querySelector(".max-num");
const minNum = document.querySelector(".min-num");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

maxNum.textContent = max;
minNum.textContent = min;

function getRandomInt(mini, maxi) {
    mini = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    } else {
        clearMessage();
    }

    if (guess === winningNum) {
        gameOver(true, `${guess} was the correct number! YOU WIN`);
    } else if (
        guess >= min &&
        guess <= max &&
        guess !== winningNum &&
        guessInput.value !== ""
    ) {
        setMessage(
            `${guess} is wrong. You have ${guessesLeft} guesses left. Try again!`,
            "red"
        );

        guessInput.value = "";

        if (guessesLeft === 0) {
            gameOver(
                false,
                `Game Over. YOU LOSE! The correct number was ${winningNum}`
            );
        } else {
            guessesLeft = guessesLeft - 1;
        }
    }
});

function gameOver(won, msg) {
    let color;

    guessInput.disabled = true;

    if (won === true) {
        color = "green";
    } else {
        color = "red";
    }

    guessInput.style.borderColor = color;

    setMessage(msg, color);
}

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
