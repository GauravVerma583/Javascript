// setInterval(time, 1000);
function time() {
  const date = new Date();
  let hours = date.getHours;
  let min = date.getMinutes;
  let sec = date.getSeconds;
  console.log(`${hours}:${min}:${sec}`);
}
