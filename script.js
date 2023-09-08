let inputText;
let blomstImg = document.querySelector("#blomst");
let blomstSize, skal;

//Tilføj til kalenderen
function tilføj(inputText = "Ingen text"){
    //Hook til input field
    inputText = document.querySelector("#text").value;
    // Make li-element
    let listEl = document.createElement("li");
    listEl.innerText = inputText;
    // Append li-element
    let kalender = document.querySelector("#kalenderIndhold");
    kalender.append(listEl);
};

//Laver blomst med random antal blade
function init(random = Math.random()){
    const minSize = 6
    const maxSize = 6;
    skal = true;
    blomstSize = Math.floor(random * maxSize) + minSize;
    blomstImg.src = `assets/${blomstSize}.png`;
};
init();

blomstImg.addEventListener("click", blomstClick);

//Nedtælling når blomsten klikkes
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
    //Skal, skal ikke tekst på blomst
    if(skal){
        document.querySelector("#skal").innerText = "Skal";
    } else {
        document.querySelector("#skal").innerText = "Skal ikke";
    };
};


function blomstClick(e){
    inputText = document.querySelector("#text");
    
    //check if input has been filled
    if(inputText.value.length > 0){
        blomstCountDown();
    } else{
        alert("Udfyld teksfeldt");
    }
    console.log(blomstSize, skal);
};

//Reset
function reset(){
    inputText = document.querySelector("#text").value = "";
    document.querySelector("#skal").innerText = "";
    init();
    console.log("Reset");
};