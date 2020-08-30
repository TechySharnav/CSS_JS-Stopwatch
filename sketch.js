const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");
const startBtn = document.getElementById("StartBtn");

var ss = 0;
var mm = 0;
var hh = 0;
var interval;

function start() {
    startBtn.style.pointerEvents = 'none';
    interval = setInterval(() => {
        if (ss < 59) {
            ss += 1;
            if (ss < 10) {
                sec.innerHTML = "0" + ss;
            } else {
                sec.innerHTML = ss;
            }
        } else {
            mm += 1;
            ss = 0;
            if (ss < 10) {
                sec.innerHTML = "0" + ss;
            } else {
                sec.innerHTML = ss;
            }
            if (mm < 59) {
                if (mm < 10) {
                    min.innerHTML = "0" + mm;
                } else {
                    min.innerHTML = mm;
                }
            } else {
                hh += 1;
                if (hh < 10) {
                    sec.innerHTML = "0" + hh;
                } else {
                    hr.innerHTML = hh;
                }
            }
        }
    }, 1000)
}

function stop() {
    clearInterval(interval);
    startBtn.style.pointerEvents = 'visible';
}

function reset() {
    ss = 0;
    mm = 0;
    hh = 0;

    sec.innerHTML = "0" + ss;
    min.innerHTML = "0" + mm;
    sec.innerHTML = "0" + hh;

    clearInterval(interval);
    startBtn.style.pointerEvents = 'visible';
}