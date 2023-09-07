//gem text fra input
//lav blomst
//add event listner
//blomst logic
//lav kalender
//knap funktioner

//Tilføj til kalenderen
let inputText;
let blomstImg = document.querySelector("#blomst");
let blomstSize, skal;

function tilføj(inputText = "Ingen text"){
    inputText = document.querySelector("#text").value;
    // Make li-element
    let listEl = document.createElement("li");
    listEl.innerText = inputText;
    // Append li-element
    let kalender = document.querySelector("#kalenderIndhold");
    kalender.append(listEl);
};

// Alt om blomst
function init(random = Math.random()){
    const minSize = 6
    const maxSize = 6;
    skal = true;
    blomstSize = Math.floor(random * maxSize) + minSize;
    blomstImg.src = `assets/${blomstSize}.png`;
};
init();

blomstImg.addEventListener("click", blomstClick);

function blomstCountDown(){
    if(blomstSize > 1){
        skal = !skal;
        blomstSize --;
        blomstImg.src = `assets/${blomstSize}.png`;
    } else if (blomstSize > 0 && !skal){
        skal = !skal;
        blomstSize --;
        blomstImg.src = `assets/${blomstSize}.png`;
        tilføj();
    } else if (blomstSize > 0 && skal){
        skal = !skal;
        blomstSize --;
        blomstImg.src = `assets/${blomstSize}.png`;
    };
};

function blomstClick(e){
    inputText = document.querySelector("#text");
    
    if(inputText.value.length > 0){
        blomstCountDown();
        if(skal){document.querySelector("#skal").innerText = "Skal";} else {document.querySelector("#skal").innerText = "Skal ikke";};
    } else{
        alert("Udfyld teksfeldt");
    }
    console.log(blomstSize, skal);
};

//Reset
function reset(){
    inputText = document.querySelector("#text").value = "";
    init();
    document.querySelector("#skal").innerText = "";
}