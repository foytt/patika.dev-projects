let userInput = () => document.getElementById("myName").innerText = prompt("İsminizi girin lütfen: ");

userInput();

const updateClock = () => document.getElementById("myClock").innerText = new Date().toLocaleTimeString();

updateClock();
setInterval(updateClock, 1000);

