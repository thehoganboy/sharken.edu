const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infoText = wrapper.querySelector(".info-text"),
removeIcon = wrapper.querySelector(".search span");

let audio;


function data(result, word){
    if(result.title){
        infoText.innerHTML = `Không thể tìm được nghĩa của <span>"${word}"</span>. Vui lòng thử lại với từ khác.`;
    }else{
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        document.querySelector(".example span").innerText = definitions.example;
        audio = new Audio(result[0].phonetics[0].audio);
    }
}

function search(word){
    fetchApi(word);
    searchInput.value = word;
}

function fetchApi(word){
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Đang tìm kiếm nghĩa của <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
        infoText.innerHTML = `Không thể tìm được nghĩa của <span>"${word}"</span>. Vui lòng thử lại với từ khác.`;
    });
}

searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && word){
        fetchApi(word);
    }
});

volume.addEventListener("click", ()=>{
    volume.style.color = "#E74646";
    audio.play();
    setTimeout(() =>{
        volume.style.color = "#999";
    }, 800);
});
removeIcon.addEventListener("click", ()=>{
    searchInput.value = "";
    searchInput.focus();
    wrapper.classList.remove("active");
    infoText.style.color = "#E74646";
    infoText.innerHTML = "Nhập bất kỳ từ tiếng Anh nào và nhấn enter để hiểu nghĩa, ví dụ cho từ,...";
});



