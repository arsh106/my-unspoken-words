// ========================================
// MUSIC PLAYER CONTROLS (Works for ANY page)
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");

  if (audio) {
    // Set initial volume to 30%
    audio.volume = 0.3;

    // Try to autoplay
    audio
      .play()
      .then(function () {
        console.log("🎵 Music is playing");
      })
      .catch(function (e) {
        console.log("🎵 Click play to start music");
      });

    // Event listeners
    audio.addEventListener("play", function () {
      console.log("▶️ Music started playing");
    });

    audio.addEventListener("pause", function () {
      console.log("⏸️ Music paused");
    });
  }
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

document.addEventListener("keydown", function (e) {
  const audio = document.getElementById("bg-music");

  if (!audio) return;

  // Press 'M' to toggle mute
  if (e.key === "m" || e.key === "M") {
    audio.muted = !audio.muted;
    console.log(audio.muted ? "🔇 Muted" : "🔊 Unmuted");
  }

  // Press 'Space' to play/pause
  if (e.key === " " && !e.target.matches("input, textarea, button")) {
    e.preventDefault();
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
});

// ========================================
// PAGE VISIBILITY
// ========================================

document.addEventListener("visibilitychange", function () {
  const audio = document.getElementById("bg-music");

  if (!audio) return;

  if (document.hidden) {
    if (!audio.paused) {
      audio.pause();
      console.log("⏸️ Music paused (tab hidden)");
    }
  }
});
