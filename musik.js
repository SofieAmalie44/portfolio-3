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

console.log("map:" + musicMap.get(65).mp3);

document.addEventListener('keydown', function(e) {
    //let entry = musicMap.get(e.keyCode);
    //if (entry) {
    //    play(entry.mp3, entry.timeToPlay, entry.seekTime, entry.img, entry.imgHeight, entry.imgWidth);
    //}
    //return;
    if (e.keyCode === 65) // A
        {play('https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c', 180, 22, "motion-unscreen.gif", 600,1500);
    }
    else if (e.keyCode === 66) // B
        { play("thank god.mp3", 180, 120, "blod.gif", 800, 1500);
    }
    else if (e.keyCode === 67) // C
        { play("thank god.mp3", 150, 100, "flowting_buubles.gif", 700,1700);
    }
    else if (e.keyCode === 68) // D
        { play("thank god.mp3", 180, 300, "bouncing-red-ball.gif", 600, 900);
    }
    else if (e.keyCode === 69) // E
        { play("https://p.scdn.co/mp3-preview/dde4ed3c04aae7aaf22a5fa2d72bef4d900ba02c", 200, 100, "pulsating-animation-unscreen (1).gif", 700,1500);
    }
    else if (e.keyCode === 70) // F
        { play("deep-house-pluck-25180 (1).mp3", 150, 30, "fading-dots-unscreen.gif", 700, 700);
    }
    else if (e.keyCode === 71) // G
        { play("Thank God Hat.wav", 180, 10, "animated-mesh-line--unscreen.gif", 800, 1500);
    }
    else if (e.keyCode === 72) // H
        { play("balafonk-rhythm-148936.mp3", 200, 300, "liquid-dots-opt-unscreen.gif", 800,1700);
    }
    else if (e.keyCode === 73) // I
        { play("bio-life-155999.mp3", 3000, 900, "sideToSideDot-unscreen.gif", 800, 2000);
    }
    else if (e.keyCode === 74) // J
        { play("cortinilla-de-transicion-1-9753.mp3", 1000, 600, "green-dots-unscreen.gif", 1000,1500);
    }
    else if (e.keyCode === 75) // K
    { play("bio-life-155999.mp3", 500, 22, "flow-wave.gif", 700,1500);
    }
    else if (e.keyCode === 76) // L
    { play("deep-house-pluck-25180 (1).mp3", 180, 20, "red-bubbles-unscreen.gif", 700,1700);
    }
    else if (e.keyCode === 77) // M
    { play("deep-house-pluck-25180 (1).mp3", 1500, 100, "three_bouncing_dots.gif", 700, 1500);
    }
    else if (e.keyCode === 78) // N
    { play("Thank God Snare.wav", 150, 102, "moving-size-dots-unscreen.gif", 700, 2000);
    }
    else if (e.keyCode === 79) // O
    { play("Thank God Kick.wav", 150, 200, "bouncing-unscreen.gif", 700,1000);
    }
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
    });
});