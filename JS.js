var audio = document.getElementById('top_player_Html5_api');
var playButton = document.getElementById('playButton');

var audio2 = document.getElementById('audio2');
var playButton2 = document.getElementById('playButton2');

function toggleAudio(audioElement, playButtonElement, otherAudioElement, otherPlayButtonElement) {
    if (audioElement.paused) {
        audioElement.play();
        playButtonElement.innerHTML = 'PLAY';
        playButtonElement.style.backgroundColor = '#0E1822';

        if (!otherAudioElement.paused) {
            otherAudioElement.pause();
            otherPlayButtonElement.innerHTML = 'PLAY';
            otherPlayButtonElement.style.backgroundColor = '#FF4655';
        }
    } else {
        audioElement.pause();
        playButtonElement.innerHTML = 'PLAY';
        playButtonElement.style.backgroundColor = '#FF4655';
    }
}

function toggleAudio2() {
    toggleAudio(audio2, playButton2, audio, playButton);
}

function toggleAudio1() {
    toggleAudio(audio, playButton, audio2, playButton2);
}

playButton.addEventListener('click', toggleAudio1);
playButton2.addEventListener('click', toggleAudio2);
