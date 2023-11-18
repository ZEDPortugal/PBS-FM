var audio = document.getElementById('audio');
var playButton = document.getElementById('playButton');

var audio2 = document.getElementById('audio2');
var playButton2 = document.getElementById('playButton2');

var audio3 = document.getElementById('audio3');
var playButton3 = document.getElementById('playButton3');

var currentTime = 0; // Variable to store current playback position

function toggleAudio(audioElement, playButtonElement, otherAudioElement1, otherPlayButtonElement1, otherAudioElement2, otherPlayButtonElement2) {
    if (audioElement.paused) {
        audioElement.play();
        playButtonElement.innerHTML = 'PAUSE';
        playButtonElement.style.backgroundColor = '#0E1822';

        if (!otherAudioElement1.paused) {
            otherAudioElement1.pause();
            otherPlayButtonElement1.innerHTML = 'PLAY';
            otherPlayButtonElement1.style.backgroundColor = '#FF4655';
        }

        if (!otherAudioElement2.paused) {
            otherAudioElement2.pause();
            otherPlayButtonElement2.innerHTML = 'PLAY';
            otherPlayButtonElement2.style.backgroundColor = '#FF4655';
        }
    } else {
        currentTime = audioElement.currentTime; // Store current playback position
        audioElement.pause();
        playButtonElement.innerHTML = 'PLAY';
        playButtonElement.style.backgroundColor = '#FF4655';
    }
}

function toggleAudio1() {
    toggleAudio(audio, playButton, audio2, playButton2, audio3, playButton3);
}

function toggleAudio2() {
    toggleAudio(audio2, playButton2, audio, playButton, audio3, playButton3);
}

function toggleAudio3() {
    toggleAudio(audio3, playButton3, audio2, playButton2, audio, playButton);
}

playButton.addEventListener('click', toggleAudio1);
playButton2.addEventListener('click', toggleAudio2);
playButton3.addEventListener('click', toggleAudio3);
