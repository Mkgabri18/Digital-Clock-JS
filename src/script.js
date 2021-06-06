// Variables
const clock = document.querySelector(".clock");

let time = "00:00:00";
let meridian = "AM";

function getTime() {
  let now = new Date();
  let [h, m, s] = [now.getHours(), now.getMinutes(), now.getSeconds()];

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    meridian = "PM";
  }

  //padding digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  time = h + ":" + m + ":" + s + " " + meridian;
  clock.innerHTML = time;
}

setInterval(getTime, 1000);
