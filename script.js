const playAudioBtn = document.getElementById("playAudioBtn");
const myAudio = document.getElementById("myAudio");

playAudioBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (myAudio.paused) {
    myAudio.play();
    playAudioBtn.textContent = "Pause";
  } else {
    myAudio.pause();
    playAudioBtn.textContent = "Play";
  }
});

// When the audio finishes, change button back to Play
myAudio.addEventListener("ended", function () {
  playAudioBtn.textContent = "Play";
});

// JavaScript for manual slider control
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const items = document.querySelectorAll(".item");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let isAutoPlaying = true;
  let currentRotation = 0;
  let autoPlayInterval;

  // Function to update slider rotation
  function updateSliderRotation() {
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentRotation}deg)`;
  }

  // Start auto rotation
  function startAutoPlay() {
    clearInterval(autoPlayInterval);

    autoPlayInterval = setInterval(() => {
      currentRotation += 1;

      if (currentRotation >= 360) currentRotation = 0;

      updateSliderRotation();
    }, 55);
  }

  // Stop auto rotation
  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    isAutoPlaying = false;
  }

  // Initialize auto play
  startAutoPlay();

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      stopAutoPlay();
      currentRotation -= 36;
      updateSliderRotation();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      stopAutoPlay();
      currentRotation += 36;
      updateSliderRotation();
    });
  }

  // Allow user to drag the slider
  let isDragging = false;
  let startX;
  let startRotation;

  slider.addEventListener("mousedown", function (e) {
    isDragging = true;
    startX = e.clientX;
    startRotation = currentRotation;
    stopAutoPlay();
    slider.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", function (e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    currentRotation = startRotation + dx / 2; // Adjust sensitivity
    updateSliderRotation();
  });

  document.addEventListener("mouseup", function () {
    if (isDragging) {
      isDragging = false;
      slider.style.cursor = "grab";

      startAutoPlay();
    }
  });

  // Touch events for mobile
  slider.addEventListener("touchstart", function (e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    startRotation = currentRotation;
    stopAutoPlay();
  });

  document.addEventListener("touchmove", function (e) {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    currentRotation = startRotation + dx / 2;
    updateSliderRotation();
  });

  document.addEventListener("touchend", function () {
    isDragging = false;
    startAutoPlay();
  });

  // Make slider interactive
  slider.style.cursor = "grab";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js");
  });
}
