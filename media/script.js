const compliments = [
    "You debug like a dream 💻💖",
    "That logic? Impeccable. 🐾",
    "If I had a tail, it’d be wagging non-stop! 🐶",
    "You're paws-itively purrfect!",
    "I’d share my chew toy with you 😘",
  ];
  
  function showCompliment() {
    const box = document.getElementById('flirt-box');
    box.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  }
  
  setInterval(showCompliment, 10000);
  window.onload = showCompliment;
  