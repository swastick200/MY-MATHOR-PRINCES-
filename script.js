// 🌟 Start Surprise Page
// Hide marked area (shooting stars + emoji stars)
document.querySelectorAll(".emoji-stars, .emoji-shooting-star").forEach(el => {
    el.style.display = "none";
});

function startPage() {
  document.querySelector(".hero").classList.add("fade-out");
heartRain(); // shower right after button tap

  setTimeout(() => {
    document.querySelector(".hero").style.display = "none";
    const main = document.getElementById("mainContent");
    main.classList.remove("hidden");
    main.classList.add("fade-in");
    typeWriterEffect();
  }, 600);

  // 🎵 Background Music
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
}

// 💌 Typewriter Effect (Smooth)
const text = `
From the moment you stepped into my life, the world became brighter.
Your smile lights up my days, and your presence fills my nights with laughter and serenity.
Every beat of my heart whispers your name… I cannot even sleep without murmuring your name.
I don’t just love you, my Princess—I adore you, today, tomorrow, and forever.
`;

let index = 0;
function typeWriterEffect() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriterEffect, 45);
  }
}

// ❤️ Love Slider
const slider = document.getElementById("loveSlider");
const loveMsg = document.getElementById("loveMsg");

slider.addEventListener("input", () => {
  if (slider.value >= 90) {
    loveMsg.classList.add("fade-in-soft");
    loveMsg.textContent =
      "I'll choose you over and over again… with every beat of my heart. 💖";
      heartRain(); // 🌸💖 rain again right after message
  } 
  else {
    loveMsg.classList.remove("fade-in-soft");
    loveMsg.textContent = "";
  }
});

// 🤗 Hug & Kiss Response
function sendLove() {
  const msg = document.getElementById("loveResponse");
  msg.style.display = "block";
  msg.classList.add("fade-in-soft");
  heartRain(); // 💋 romantic shower again
}

// 🌠 Create Glowing Meteor
function spawnMeteor() {
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");

  meteor.style.top = `${Math.random() * window.innerHeight * 0.4}px`;
  meteor.style.left = `${Math.random() * window.innerWidth * 0.4}px`;

  document.body.appendChild(meteor);

  setTimeout(() => meteor.remove(), 1600);
}

// ⏳ Launch meteors continuously but SMOOTH + battery safe
function meteorLoop() {
  spawnMeteor();
  setTimeout(meteorLoop, Math.random() * 1500 + 1500); // 1.5–3 sec
}
meteorLoop();

// 🖼 Smooth Fade & Zoom-in for All Images
document.querySelectorAll("img").forEach((img) => {
  img.onload = () => {
    img.classList.add("img-loaded");
  };
});

// 🦋 Smooth orbit restart on page load (mobile safe)
window.addEventListener("load", () => {
  document.querySelectorAll(".orbit-butterfly").forEach((b) => {
    b.style.animationPlayState = "running";
  });
});

// 📱 Auto-resize elements for mobile
function adjustForMobile() {
  if (window.innerWidth < 480) {
    document.querySelectorAll(".carousel-container img").forEach((im) => {
      im.style.width = "180px";
    });
  }
}
adjustForMobile();
window.addEventListener("resize", adjustForMobile);
function heartRain() {
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.innerHTML = ["💖", "🌸", "💕", "💗"][Math.floor(Math.random()*4)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}
