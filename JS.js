var audio = document.getElementById('top_player_Html5_api');
var playButton = document.getElementById('playButton');

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = 'FM1';
        playButton.style.backgroundColor = '#0E1822';
    } else {
        audio.pause();
        playButton.innerHTML = 'FM1';
        playButton.style.backgroundColor = '#FF4655';
    }
}

playButton.addEventListener('click', toggleAudio);

var audio2 = document.getElementById('audio2');
var playButton2 = document.getElementById('playButton2');

function toggleAudio2() {
    if (audio2.paused) {
        audio2.play();
        playButton2.innerHTML = 'FM2';
        playButton2.style.backgroundColor = '#0E1822';
    } else {
        audio2.pause();
        playButton2.innerHTML = 'FM2';
        playButton2.style.backgroundColor = '#FF4655';
    }
}

playButton2.addEventListener('click', toggleAudio2);
