let time = 600;
const timer = document.getElementById("timer");

setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;
    timer.textContent = `${m}:${s < 10 ? "0" + s : s}`;
    if (time > 0) time--;
}, 1000);
