const albumCovers = document.querySelectorAll(".album-cover");
const audioPlayers = document.querySelectorAll("audio");

function playMusic(event) {
    audioPlayers.forEach(player => {
        player.pause();
        player.currentTime = 0;
        player.classList.add("d-none");
    });
    switch (event.target.alt) {
        case "Album 1":
            document.getElementById("audio1").classList.remove("d-none");
            document.getElementById("audio1").play();
            break;
        case "Album 2":
            document.getElementById("audio2").classList.remove("d-none");
            document.getElementById("audio2").play();
            break;
        case "Album 3":
            document.getElementById("audio3").classList.remove("d-none");
            document.getElementById("audio3").play();
            break;
        case "Album 4":
            document.getElementById("audio4").classList.remove("d-none");
            document.getElementById("audio4").play();
            break;
        default:
            console.log("Unknown album clicked");
    }
}
albumCovers.forEach(cover => {
    cover.addEventListener("click", playMusic);
});
