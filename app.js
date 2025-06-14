// Lista de canciones
const songs = [
    "https://www.youtube.com/embed/ssVCtZBQyus", // Canción 1
    "https://www.youtube.com/embed/mm29aBe71SI", // Canción 2
    "https://www.youtube.com/embed/nP8ZVJxiJlU", // Canción 3
    "https://www.youtube.com/embed/6SHIrbtXY1U", // Canción 4
    "https://www.youtube.com/embed/dTbONq0zxRA", // Canción 5
    "https://www.youtube.com/embed/XQ0D_QD_DhM"  // Canción 6
];

// Contador para la canción actual
let currentSongIndex = 0;

// Reproductor de música
const musicPlayer = document.getElementById("musicPlayer");

// Función para reproducir o pausar
function playPause() {
    const iframe = document.getElementById("musicPlayer");
    const player = new YT.Player(iframe);
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

// Función para ir a la canción anterior
function previousSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    changeSong();
}

// Función para ir a la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    changeSong();
}

// Cambiar la canción del reproductor
function changeSong() {
    musicPlayer.src = songs[currentSongIndex];
}
