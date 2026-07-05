// Typing Animation

const words = [
    "Moiz Developer",
    "Web Developer",
    "Frontend Developer",
    "AI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function type() {

    if (!typingElement) return;

    if (charIndex < words[wordIndex].length) {

        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;

        setTimeout(erase, 50);

    } else {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        setTimeout(type, 300);

    }

}

type();


// Dark / Light Mode

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

    });

}


// Loading Screen

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

});
