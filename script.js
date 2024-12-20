document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let currentAudio = null; // Track the currently playing audio

  cards.forEach((card) => {
    const audio = card.querySelector(".card-audio");

    card.addEventListener("mouseenter", () => {
      // Pause and reset the previous audio
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Play the new audio
      if (audio && (currentAudio !== audio || audio.paused)) {
        audio.play();
        currentAudio = audio; // Update the current audio reference
      }
    });

    card.addEventListener("mouseleave", () => {
      // Pause and reset the audio when the mouse leaves the card
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        currentAudio = null;
      }
    });
  });
});
