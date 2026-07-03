const words = [
    "Moiz Developer",
    "Web Developer",
    "Frontend Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {

    if(charIndex < words[wordIndex].length){

        typingElement.innerHTML += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typingElement.innerHTML = words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(type,300);

    }

}

type();
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function(){

    document.body.classList.toggle("light-mode");

}
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});
}
