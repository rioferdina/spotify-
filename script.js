const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progressBar = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-bar');
const lyricsContent = document.getElementById('lyrics-content');

// Tambahkan lirik di sini
const lyrics = `
He looks up grinning like a devil

It's new, the shape of your body
It's blue, the feeling I've got
And it's ooh, whoa, oh
It's a cruel summer
It's cool, that's what I tell 'em
No rules, in breakable heaven
But ooh, whoa, oh
It's a cruel summer
With you

I'm drunk in the back of the car


`;

audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

function previousTrack() {
    // Fungsi ini dapat disesuaikan untuk memutar lagu sebelumnya dalam daftar putar
    console.log("Previous track");
}

function nextTrack() {
    // Fungsi ini dapat disesuaikan untuk memutar lagu berikutnya dalam daftar putar
    console.log("Next track");
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Tambahkan lirik ke elemen pre
lyricsContent.textContent = lyrics;