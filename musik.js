let musicMap = new Map();

musicMap.set(65, {mp3: 'https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c', img: "kisspng-color-ink-paint-colorful-ink-5aa6b9448d2693.1552322115208758445782.png", timeToPlay:70, seekTime:22, imgHeight:600, imgWidth:1500})
musicMap.set(66, {mp3: 'thank god.mp3', img: "pink-dots-unscreen.gif", timeToPlay:180, seekTime:120, imgHeight:800, imgWidth:1500})
musicMap.set(67, {mp3: 'thank god.mp3', img: "blueball.gif", timeToPlay:180, seekTime:30, imgHeight:400, imgWidth:400})
musicMap.set(68, {mp3: 'thank god.mp3', img: "disappearing-dot-unscreen.gif", timeToPlay:180, seekTime:40, imgHeight:600, imgWidth:1700})
musicMap.set(69, {mp3: 'https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c', img: "dots-unscreen.gif", timeToPlay:180, seekTime:100, imgHeight:400, imgWidth:700})
musicMap.set(70, {mp3: 'deep-house-pluck-25180 (1).mp3', img: "fading-dots-unscreen.gif", timeToPlay:150, seekTime:20, imgHeight:700, imgWidth:700})
musicMap.set(71, {mp3: 'thank God Hat.wav', img: "loading-dots-unscreen.gif", timeToPlay:180, seekTime:10, imgHeight:800, imgWidth:1500})
musicMap.set(72, {mp3: 'balafonk-rhythm-148936.mp3', img: "pink-dots-unscreen.gif", timeToPlay:180, seekTime:300, imgHeight:700, imgWidth:700})
musicMap.set(73, {mp3: 'bio-life-155999.mp3', img: "sideToSideDot-unscreen.gif", timeToPlay:180, seekTime:10, imgHeight:800, imgWidth:1500})
musicMap.set(74, {mp3: 'cortinilla-de-transicion-1-9753.mp3', img: "green-dots-unscreen.gif", timeToPlay:1000, seekTime:600, imgHeight:1000, imgWidth:1500})
musicMap.set(75, {mp3: 'bio-life-155999.mp3', img: "flow-wave.gif", timeToPlay:500, seekTime:22, imgHeight:700, imgWidth:1500})
musicMap.set(76, {mp3: 'deep-house-pluck-25180 (1).mp3', img: "red-bubbles-unscreen.gif", timeToPlay:180, seekTime:20, imgHeight:700, imgWidth:1700})
musicMap.set(77, {mp3: 'deep-house-pluck-25180 (1).mp3', img: "three_bouncing_dots.gif", timeToPlay:1500, seekTime:100, imgHeight:700, imgWidth:1500})
musicMap.set(78, {mp3: 'Thank God Snare.wav', img: "moving-size-dots-unscreen.gif", timeToPlay:150, seekTime:102, imgHeight:700, imgWidth:2000})
musicMap.set(79, {mp3: 'Thank God Kick.wav', img: "bouncing-unscreen.gif", timeToPlay:150, seekTime:200, imgHeight:700, imgWidth:1000})


console.log("map:" + musicMap.get(65).mp3);

document.addEventListener('keydown', function(e) {
    let entry = musicMap.get(e.keyCode);
    if (entry) {
        play(entry.mp3, entry.timeToPlay, entry.seekTime, entry.img, entry.imgHeight, entry.imgWidth);
    }
    return entry;
});

function play( audio_path, time_in_miliSec, seek_time, image, image_height, image_width) {
    //if (beep) beep.pause();
    let beep = new Audio( audio_path);
    beep.controls = true;
    beep.loop = true;
    beep.currentTime = seek_time;
    beep.play();
    const getImgDiv = document.querySelector("#imgDiv");
    const getImg = document.querySelector("#blue");
    getImg.src = image + "?xx=" + new Date().getMilliseconds();
    getImg.height = image_height
    getImg.width = image_width
    getImgDiv.hidden = false;
    setTimeout(() => {
        beep.pause();
        getImgDiv.hidden = true;
        }, time_in_miliSec);
}

document.addEventListener("DOMContentLoaded", function () {
    const onclickButton = document.querySelector("#playBtn");
    const playSoundLoop = document.querySelector("#playBackAudio");

    // Add a click event listener to the button.
    onclickButton.addEventListener("click", function () {
        if (playSoundLoop.paused) {
            playSoundLoop.play();
        } else {
            playSoundLoop.pause();
        }
    })
});