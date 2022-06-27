const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const boom = document.getElementById("boom");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tom = document.getElementById("tom");
const tink = document.getElementById("tink");

let playSound= (sound) => {
    let audio = new Audio(sound);
    audio.play();
};

/*clap.addEventListener('click', playSound('sounds/clap.wav'));*/
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
    let audio = new Audio('sounds/clap.wav')
    audio.play();
    }
    else if(e.keyCode == 83 ){
    let audio = new Audio('sounds/hihat.wav')
    audio.play();
    
    }else if(e.keyCode == 68 ){
        let audio = new Audio('sounds/kick.wav')
        audio.play();
    }else if(e.keyCode == 70 ){
        let audio = new Audio('sounds/openhat.wav')
        audio.play();
    }else if(e.keyCode == 71 ){
        let audio = new Audio('sounds/boom.wav')
        audio.play();
    }else if(e.keyCode == 72 ){
        let audio = new Audio('sounds/ride.wav')
        audio.play();
    }else if(e.keyCode == 74 ){
        let audio = new Audio('sounds/snare.wav')
        audio.play();
    }else if(e.keyCode == 75 ){
        let audio = new Audio('sounds/tom.wav')
        audio.play();
    }else if(e.keyCode == 76 ){
        let audio = new Audio('sounds/tink.wav')
        audio.play();
    }
});