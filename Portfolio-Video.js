const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPause');
const muteBtn = document.getElementById('mute');

playPauseBtn.addEventListener('click', () => {
 
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } 
    else {
        video.pause();
        playPauseBtn.textContent = "Play";
    }
    
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "Unmute" : "Mute";
});