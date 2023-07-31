const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input"),
levelText = document.querySelector(".level b"),
pointText = document.querySelector(".point b");

let word, maxGuesses, incorrectLetters = [], correctLetters = [];

var point = 0;
var level = 1;

function randomWord() {
    pointText.innerText = point;
    levelText.innerText = level;
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word.toLowerCase();
    maxGuesses = 9-level;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();

function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Chúc mừng bạn! ${word.toUpperCase()} là từ cần tìm.`);
            point++
            if (level<=6 && point>4) {
                point=0;
                level++;
            }
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Bạn đã hết lượt đoán.");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
                point=0;
                level=1;
            }
        }
        
    }, 100);
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());