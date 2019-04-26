const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.fill-progress');
const playPauseBtn = document.getElementById('pause-play-btn');
const timeUpdate = player.querySelector('.time');

window.addEventListener('load', function(){
    if (video.paused) {
        video.muted = true;
        video.play();
        video.loop = true;
        playPauseBtn.querySelector('.fas').classList.replace('fa-play', 'fa-pause')
    }

});


playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseBtn.querySelector('.fas').classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause();
        playPauseBtn.querySelector('.fas').classList.replace('fa-pause', 'fa-play');
    }
});

function progressBarUpdate () {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.left = percentage + '%';
}

function currentTimeUpdate() {
    let minutes = Math.floor(video.currentTime / 60);
    let second = Math.floor(video.currentTime - minutes * 60);

    if (second < 10) {
        second = '0' + second;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    timeUpdate.innerHTML = minutes + ":" + second;
}

function changeTime(event) {
    const changeTimeButton = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = changeTimeButton;
}

progress.addEventListener('click', changeTime);

progressBar.addEventListener('change', changeTime);

video.addEventListener('timeupdate', function () {
    progressBarUpdate();
    currentTimeUpdate();

});
