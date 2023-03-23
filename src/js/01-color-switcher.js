
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
startBtn.disabled = false;
startBtn.addEventListener("click", () => {
    timerId = setInterval(changeBgColor, 1000);
    startBtn.classList.add("button__start"); 
    startBtn.disabled = true; 
});

function changeBgColor(event) {
    const bodyEl = document.querySelector("body");
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color; 
}

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);    
    startBtn.disabled = false;
});