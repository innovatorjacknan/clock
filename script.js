function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let amPm = "AM";
  if (h < 12) {
    amPm = "AM";
  }
  if (h > 12) {
    amPm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + amPm;
  setTimeout(showTime, 1000);
}
showTime();
