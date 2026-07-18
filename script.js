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
// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if(menuToggle){

    menuToggle.addEventListener("click", function(){

        nav.classList.toggle("active");

    });

}
// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* ===========================
   AI CHAT UI
=========================== */

const chatToggle = document.getElementById("chatToggle");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

chatToggle.onclick = () => {
    chatContainer.style.display = "flex";
};

closeChat.onclick = () => {
    chatContainer.style.display = "none";
};

function addMessage(text, className) {

    const div = document.createElement("div");

    div.className = className;

    div.textContent = text;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function fakeReply(question) {

    const q = question.toLowerCase();

    if (q.includes("hello") || q.includes("hi")) {
        return "👋 Hello! Welcome to Moiz Developer Portfolio.";
    }

    if (q.includes("name")) {
        return "My name is Moiz AI Assistant.";
    }

    if (q.includes("website")) {
        return "This website was built using HTML, CSS and JavaScript.";
    }

    if (q.includes("project")) {
        return "Moiz Developer is building Web and AI Projects.";
    }

    return "🤖 Gemini AI will be connected in the next step.";
}

sendBtn.onclick = () => {

    const message = userInput.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");

    userInput.value = "";

    setTimeout(() => {

        addMessage(fakeReply(message), "ai-message");

    }, 600);

};

userInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendBtn.click();

    }

});
