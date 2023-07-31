const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
levelText = document.querySelector(".level b"),
pointText = document.querySelector(".point b");

let correctWord, timer;

var initLevel = 1;
var point = 0;



const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Hết giờ! ${correctWord.toUpperCase()} là đáp án đúng!!`);
        point = 0;
        initLevel = 1;
        initGame();
    }, 1000);
}

const initGame = () => { 
    levelText.innerText = initLevel;
    pointText.innerText = point;
    initTimer(35 - initLevel*5);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Hãy nhập từ để check kết quả!") ;
    if(userWord !== correctWord) return alert(`${userWord} không phải là từ cần tìm`);
    alert(`Chúc mừng bạn! ${correctWord.toUpperCase()} chính là từ cần tìm`);
    point++;
    if (initLevel<=4 && point>4) {
        point=0;
        initLevel++;
    }
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);