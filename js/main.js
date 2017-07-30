const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
hr = date.getHours();
min = date.getMinutes();
sec = date.getSeconds();

if (hr > 12) {
    hr = hr - 12;
}

console.log(hr, min, sec);

let hrPosition = hr * 30;
let minPosition = min * 6;
let secPosition = sec * 6;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";