let musicMap = new Map();
//Music data, mapped by keystroke numbers
musicMap.set(65/*A*/, createMusicData('https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c', "animated-mesh-line--unscreen.gif", 70, 22, 600, 1500));
musicMap.set(66/*B*/, createMusicData('thank god.mp3', "pink-dots-unscreen.gif", 180, 120, 800, 1500));
musicMap.set(67/*C*/, createMusicData('thank god.mp3', "blueball.gif", 180, 30, 400, 400));
musicMap.set(68/*D*/, createMusicData('thank god.mp3', "disappearing-dot-unscreen.gif", 180, 40, 600, 1700));
musicMap.set(69/*E*/, createMusicData('https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c', "dots-unscreen.gif", 180, 100, 400, 700));
musicMap.set(70/*F*/, createMusicData('deep-house-pluck-25180 (1).mp3', "fading-dots-unscreen.gif", 150, 20, 700, 700));
musicMap.set(71/*G*/, createMusicData('Thank God Hat.wav', "loading-dots-unscreen.gif", 180, 10, 800, 1500));
musicMap.set(72/*H*/, createMusicData('balafonk-rhythm-148936.mp3', "pink-dots-unscreen.gif", 180, 300, 700, 700));
musicMap.set(73/*I*/, createMusicData('bio-life-155999.mp3', "sideToSideDot-unscreen.gif", 180, 10, 800, 1500));
musicMap.set(74/*J*/, createMusicData('cortinilla-de-transicion-1-9753.mp3', "green-dots-unscreen.gif", 1000, 600, 1000, 1500));
musicMap.set(75/*K*/, createMusicData('bio-life-155999.mp3', "flow-wave.gif", 500, 22, 700, 1500));
musicMap.set(76/*L*/, createMusicData('deep-house-pluck-25180 (1).mp3', "red-bubbles-unscreen.gif", 180, 20, 700, 1700));
musicMap.set(77/*M*/, createMusicData('deep-house-pluck-25180 (1).mp3', "three_bouncing_dots.gif", 1500, 100, 700, 1500));
musicMap.set(78/*N*/, createMusicData('Thank God Snare.wav', "moving-size-dots-unscreen.gif", 180, 10, 700, 2000));
musicMap.set(79/*O*/, createMusicData('Thank God Kick.wav', "bouncing-unscreen.gif", 150, 20, 700, 1000));
musicMap.set(80/*G*/, createMusicData('Thank God Hat.wav', "flowting_buubles.gif", 180, 100, 800, 1500));
musicMap.set(81/*H*/, createMusicData('balafonk-rhythm-148936.mp3', "moving-size-dots-unscreen.gif", 180, 30, 700, 700));
musicMap.set(82/*I*/, createMusicData('bio-life-155999.mp3', "liquid-dots-opt-unscreen.gif", 180, 200, 800, 1500));
musicMap.set(83/*J*/, createMusicData('cortinilla-de-transicion-1-9753.mp3', "bluecircle.png", 1000, 60, 1000, 1500));
musicMap.set(84/*K*/, createMusicData('bio-life-155999.mp3', "blod.gif", 500, 202, 700, 1500));
musicMap.set(85/*L*/, createMusicData('deep-house-pluck-25180 (1).mp3', "fading-dots-unscreen.gif", 180, 120, 700, 1700));
musicMap.set(86/*M*/, createMusicData('deep-house-pluck-25180 (1).mp3', "bouncing-red-ball.gif", 1500, 15, 700, 1500));
musicMap.set(87/*N*/, createMusicData('Thank God Snare.wav', "motion-unscreen.gif", 180, 200, 700, 2000));
musicMap.set(88/*O*/, createMusicData('Thank God Kick.wav', "three_bouncing_dots.gif", 150, 20, 700, 1000));
musicMap.set(89/*N*/, createMusicData('Thank God Snare.wav', "pulsating-animation-unscreen (1).gif", 180, 100, 700, 2000));
musicMap.set(90/*O*/, createMusicData('Thank God Kick.wav', "flowting_buubles.gif", 150, 10, 700, 1000));
const tune = new Audio();
const getImgDiv = document.querySelector("#imgDiv");
const getImg = document.querySelector("#blue");

document.addEventListener('keydown', function(e) {
    let entry = musicMap.get(e.keyCode);
    if (entry) {
        playTune(entry.mp3, entry.seekTime);
        showImg(entry.img, entry.imgHeight, entry.imgWidth);
        setTimeout(() => {
            stopTune();
        }, entry.timeToPlay);
    }
    return entry;
});

function stopTune() {
    tune.pause();
}

function playTune(audio_path, seek_time) {
    tune.src = audio_path;
    tune.loop = true;
    tune.currentTime = seek_time;
    tune.play();
}

function showImg(image, image_height, image_width) {
    getImg.src = image + "?xx=" + new Date().getMilliseconds();
    getImg.height = image_height
    getImg.width = image_width
    getImgDiv.hidden = false;
    getImg.hidden = false;
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

function createMusicData(mp3, img, timeToPlay, seekTime, imgHeight, imgWidth) {
    return {mp3:mp3, img:img, timeToPlay:timeToPlay, seekTime:seekTime, imgHeight:imgHeight, imgWidth:imgWidth};
}


