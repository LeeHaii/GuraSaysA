var click = 0;
const gura = document.getElementById('imgGura');
var counter = document.getElementById('showCounter');
const guraAbsolute = document.getElementById('guraAb');

function playSound(){
    var sound = new Audio('gawr-gura-a.mp3');
    sound.play();
}

function Jump(){
    guraAbsolute.style.top = '-100px';
}

function Down(){
    guraAbsolute.style.top = '0px';
}

gura.onclick = function(){
    click++;
    counter.innerHTML = "I have A! for " + click + " times!";
    playSound();
    Jump();
    setTimeout(() => {
        Down();
    }, 100);
};

function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
}
  
function closePopup() {
    const popup = document.getElementById("popup");
    const video = document.getElementById("video");
    video.pause();
    popup.style.display = "none";
}

