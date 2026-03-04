var countDown = new Date("MARCH 14, 2026 12:00:00").getTime();

var myCountdownFunc = setInterval(function () {
  var now = new Date().getTime();
  var remainingTime = countDown - now;

  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours ;
  document.getElementById("mins").innerHTML = minutes ;
  document.getElementById("secs").innerHTML = seconds;

  if (remainingTime < 0) {
    clearInterval(myCountdownFunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);
; 

// Countdown logic
function startCountdown() {
  const targetDate = new Date("March 14, 2026 00:00:00").getTime();
  const countdownEl = document.getElementById("countdown");

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      countdownEl.innerHTML = "🎂 Happy Birthday! 🎉";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

startCountdown();

// play background music when page loads (will be blocked by browsers until user interaction)
window.addEventListener('load', () => {
  const bg = document.getElementById('bgMusic');
  if (bg) {
    bg.play().catch(()=>{/* autoplay prevented; will play on first interaction */});
  }
});

// image click sound
const img = document.getElementById('birthdayImage');
if (img) {
  img.addEventListener('click', () => {
    const snd = document.getElementById('clickSound');
    if (snd) snd.play();
  });
}

// the redirect listener should only be attached on video page
const vid = document.getElementById("videoSticker");
if (vid) {
  vid.addEventListener("click", () => {
    window.location.href = "main.html"; // go to second page
  });
}

