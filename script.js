
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

// Open a surprise when its button is clicked.
document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.open;
    const section = document.getElementById(id);

    if (!section) return;

    section.classList.remove("hidden");

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (id === "final") {
      makeConfetti(100);
    }
  });
});

// Close a surprise.
document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".reveal").classList.add("hidden");
  });
});

// Switch between the birthday letters.
document.querySelectorAll("[data-letter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".letter-paper").forEach(letter => {
      letter.classList.add("hidden");
    });

    document.getElementById(button.dataset.letter)
      .classList.remove("hidden");

    document.querySelectorAll(".letter-tab").forEach(tab => {
      tab.classList.remove("active");
    });

    button.classList.add("active");
  });
});

// Birthday mood game.
const birthdayMoods = {
  soft: "Your birthday wish: a gentle year filled with peace, warm friendships, calm days, and people who make you feel safe. 🌷",

  adventure: "Your birthday wish: new experiences, brave beginnings, spontaneous laughter, and stories you'll tell forever. 🦋",

  glow: "Your birthday wish: confidence, beautiful opportunities, growth, and the courage to be completely yourself. ✨"
};

document.querySelectorAll("[data-mood]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-mood]").forEach(item => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");

    const result = document.getElementById("moodResult");
    result.textContent = birthdayMoods[button.dataset.mood];
    result.classList.remove("hidden");
  });
});

// Music button.
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "Ⅱ Pause Birthday Music";
    } catch (error) {
      musicBtn.textContent = "Add birthday-song.mp3 first 🎵";
    }
  } else {
    music.pause();
    musicBtn.textContent = "♫ Play Birthday Music";
  }
});

// Confetti effect.
document.getElementById("confettiBtn").addEventListener("click", () => {
  makeConfetti(160);
});

function makeConfetti(amount) {
  const decorations = ["💗", "🎀", "✨", "🌸", "♥"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";
    piece.textContent =
      decorations[Math.floor(Math.random() * decorations.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (12 + Math.random() * 15) + "px";
    piece.style.animationDuration = (3 + Math.random() * 4) + "s";
    piece.style.animationDelay = Math.random() + "s";

    document.body.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }
}


/* Click a photo to make it wiggle and pop 🎀 */
document.querySelectorAll(".photo-frame, .gallery figure").forEach(photo => {
  photo.addEventListener("click", () => {
    photo.classList.remove("photo-pop");

    // Restart the animation on every click
    void photo.offsetWidth;

    photo.classList.add("photo-pop");
  });

  photo.addEventListener("animationend", () => {
    photo.classList.remove("photo-pop");
  });
});
